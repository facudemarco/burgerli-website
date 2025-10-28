import { NextRequest } from "next/server";

// Map para almacenar conexiones de clientes esperando órdenes
const waitingClients = new Map<string, ReadableStreamDefaultController>();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const paymentId = searchParams.get("payment_id");

  if (!paymentId) {
    return new Response("payment_id is required", { status: 400 });
  }

  // Crear un ReadableStream para Server-Sent Events
  const stream = new ReadableStream({
    start(controller) {
      // Guardar el controller para este payment_id
      waitingClients.set(paymentId, controller);

      // Enviar un mensaje inicial de conexión
      controller.enqueue(
        `data: ${JSON.stringify({ type: "connected", payment_id: paymentId })}\n\n`
      );

      // Cleanup después de 5 minutos
      setTimeout(() => {
        if (waitingClients.has(paymentId)) {
          controller.enqueue(
            `data: ${JSON.stringify({ type: "timeout", message: "Connection timeout" })}\n\n`
          );
          controller.close();
          waitingClients.delete(paymentId);
        }
      }, 5 * 60 * 1000); // 5 minutos
    },
    cancel() {
      waitingClients.delete(paymentId);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Cache-Control",
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const { payment_id, order_id } = await req.json();

    if (!payment_id || !order_id) {
      return Response.json(
        { error: "payment_id and order_id are required" },
        { status: 400 }
      );
    }

    // Encontrar el cliente esperando esta orden
    const controller = waitingClients.get(payment_id);

    if (controller) {
      // Enviar la orden al cliente
      controller.enqueue(
        `data: ${JSON.stringify({
          type: "order_created",
          payment_id,
          order_id
        })}\n\n`
      );

      // Cerrar la conexión
      controller.close();
      waitingClients.delete(payment_id);

      console.log(`📋 Orden notificada vía SSE: payment_id=${payment_id}, order_id=${order_id}`);
    } else {
      console.log(`⚠️ No hay cliente esperando para payment_id=${payment_id}`);
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error notificando orden:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
