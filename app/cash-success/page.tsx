"use client";
import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "../context/SessionContext";
import { Pattaya } from "next/font/google";

const pattaya = Pattaya({
  weight: ["400"],
  variable: "--font-pattaya",
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";

export default function CashSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Content />
    </Suspense>
  );
}

function Content() {
  const { session } = useSession();
  const router = useRouter();

  // Función para notificar a la tienda por WhatsApp (si se implementa)
  const notifyStore = () => {
    const message = `🍔 *NUEVA ORDEN - BURGERLI* 🍔

💰 *Método de Pago:* Efectivo
📅 *Fecha:* ${new Date().toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })}

⚡ *¡Nuevo pedido para preparar!*

📝 El cliente pagará en efectivo al momento de la entrega/retiro.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5491157395035&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-[60vh] flex items-center justify-center flex-col gap-6 p-8">
      <div className="text-green-500 text-6xl">✅</div>

      <h1
        className={`${pattaya.className} text-4xl font-bold text-green-600 text-center`}
      >
        ¡Orden Confirmada!
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Tu pedido ha sido recibido
        </h2>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center mb-2">
            <span className="text-2xl mr-2">💵</span>
            <span className="font-bold text-green-700">Pago en Efectivo</span>
          </div>
          <p className="text-sm text-green-600">
            Pagarás al momento de recibir tu pedido
          </p>
        </div>

        <div className="space-y-3 text-sm text-gray-600 mb-6">
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg">⏰</span>
            <p>Tu pedido será procesado en breve</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg">📱</span>
            <p>Recibirás confirmación por WhatsApp</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg">🚚</span>
            <p>Se entregará según el método seleccionado</p>
          </div>
        </div>

        <div className="space-y-3">
          {session ? (
            <>
              <button
                onClick={() => router.push("/orders")}
                className="w-full bg-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-primary/80 transition-colors duration-200"
              >
                Ver mis órdenes
              </button>
              <button
                onClick={() => router.push("/")}
                className="w-full bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200"
              >
                Seguir comprando
              </button>
            </>
          ) : (
            <>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-blue-700">
                  💡 <strong>¿Sabías que...</strong> puedes crear una cuenta
                  para hacer seguimiento de todos tus pedidos?
                </p>
              </div>

              <button
                onClick={() => router.push("/login")}
                className="w-full bg-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-primary/80 transition-colors duration-200"
              >
                Iniciar sesión / Registrarse
              </button>

              <button
                onClick={() => router.push("/")}
                className="w-full bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200"
              >
                Continuar comprando
              </button>
            </>
          )}

          {/* Botón para notificar a la tienda (opcional) */}
          {/*<button
            onClick={notifyStore}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
          >
            <span>📱</span>
            Notificar a la tienda (WhatsApp)
          </button>*/}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            ¡Gracias por elegir Burgerli! 🍔
          </p>
          <p className="text-xs text-gray-500 text-center mt-1">
            En caso de consultas, contáctanos por WhatsApp
          </p>
        </div>
      </div>
    </main>
  );
}
