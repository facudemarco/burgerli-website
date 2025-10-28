import { NextRequest, NextResponse } from "next/server";

// Almacenamiento temporal en memoria (en producción, usar Redis o DB)
const tempOrders = new Map<string, { orderId: string; timestamp: number }>();

// Limpiar órdenes expiradas (más de 10 minutos)
const cleanupExpiredOrders = () => {
  const now = Date.now();
  const TEN_MINUTES = 10 * 60 * 1000;

  for (const [paymentId, data] of tempOrders.entries()) {
    if (now - data.timestamp > TEN_MINUTES) {
      tempOrders.delete(paymentId);
    }
  }
};

export async function POST(req: NextRequest) {
  try {
    const { payment_id, order_id } = await req.json();

    if (!payment_id || !order_id) {
      return NextResponse.json(
        { error: "payment_id and order_id are required" },
        { status: 400 }
      );
    }

    // Limpiar órdenes expiradas antes de agregar nueva
    cleanupExpiredOrders();

    // Guardar la orden temporalmente
    tempOrders.set(payment_id, {
      orderId: order_id,
      timestamp: Date.now()
    });

    console.log(`📋 Orden temporal guardada: payment_id=${payment_id}, order_id=${order_id}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error guardando orden temporal:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const payment_id = searchParams.get("payment_id");

    if (!payment_id) {
      return NextResponse.json(
        { error: "payment_id is required" },
        { status: 400 }
      );
    }

    // Limpiar órdenes expiradas
    cleanupExpiredOrders();

    const orderData = tempOrders.get(payment_id);

    if (!orderData) {
      return NextResponse.json(
        { order_id: null, message: "Order not found or expired" },
        { status: 404 }
      );
    }

    console.log(`📋 Orden temporal encontrada: payment_id=${payment_id}, order_id=${orderData.orderId}`);

    return NextResponse.json({ order_id: orderData.orderId });
  } catch (error) {
    console.error("Error obteniendo orden temporal:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const payment_id = searchParams.get("payment_id");

    if (!payment_id) {
      return NextResponse.json(
        { error: "payment_id is required" },
        { status: 400 }
      );
    }

    const deleted = tempOrders.delete(payment_id);

    return NextResponse.json({
      success: deleted,
      message: deleted ? "Order removed" : "Order not found"
    });
  } catch (error) {
    console.error("Error eliminando orden temporal:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
