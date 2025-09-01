"use client";
// import Cheddar from '../icons/Cheddar'
import Delivery from "./Delivery";
import Link from "next/link";
import Cupon from "../Cupon";
import { useState } from "react";
import { Inter, Pattaya } from "next/font/google";
import CartResponsive from "../CartResponsive";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pattaya = Pattaya({
  weight: ["400"],
  variable: "--font-pattaya",
  subsets: ["latin"],
});

export default function Cart() {
  const [open, setOpen] = useState(false);
  
  const cart = [
    {
      id: "1",
    }
  ]
  return (
    <>
      <div className="md:hidden fixed inset-x-0 bottom-0 z-40 px-4 pb-4 pointer-events-none">
        {cart.length > 0 && <div className="w-full">
          <button
            onClick={() => {
              setOpen(true);
            }}
            className="pointer-events-auto cursor-pointer w-full bg-[#c77a1a] text-black rounded-2xl shadow-2xl px-4 py-4 flex items-center justify-between text-base font-semibold">
            <span className="flex items-center gap-3">
              Ver pedido
              {/* ({items.reduce((a, i) => a + i.qty, 0)}) */}
            </span>
            <span className="flex items-center gap-2">
              {/* ${total.toLocaleString("es-AR")} <ChevronUp className="w-5 h-5" /> */}
            </span>
          </button>
        </div>}
      </div>
      {open && <CartResponsive closed={() => setOpen(false)} />}

      <section
        className={`${inter.className} w-[450px] md:block hidden pt-28 h-min cart text-white rounded-2xl bg-primary py-3 px-5`}>
        <h2 className={`${pattaya.className} text-2xl`}>Mi pedido</h2>
        <ul className="flex mt-6 flex-col gap-2">
          <li className="flex justify-between items-start">
            <div className="flex flex-col items-start gap-1">
              <p className="font-bold">Hamburguesa triple queso</p>
              <small>Extra:</small>
              <small>Sin:</small>
              <small>Papas:</small>
              <button className="underline cursor-pointer text-sm">
                Eliminar
              </button>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <span className="font-bold">$10.000</span>
              <div className="flex gap-4 border rounded-xl justify-between px-2">
                <button className="cursor-pointer"> - </button>
                <span className="text-tertiary font-bold">1</span>
                <button className="cursor-pointer"> + </button>
              </div>
            </div>
          </li>
          <hr className="font-bold" />
          <li className="flex justify-between items-start">
            <div className="flex flex-col items-start gap-1">
              <p className="font-bold">Hamburguesa triple queso</p>
              <small>Extra:</small>
              <small>Sin:</small>
              <small>Papas:</small>
              <button className="underline cursor-pointer text-sm">
                Eliminar
              </button>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <span className="font-bold">$10.000</span>
              <div className="flex gap-4 border rounded-xl justify-between px-2">
                <button className="cursor-pointer"> - </button>
                <span className="text-tertiary font-bold">1</span>
                <button className="cursor-pointer"> + </button>
              </div>
            </div>
          </li>
          <hr className="font-bold" />
        </ul>
        <h3 className="mt-4 font-semibold">Cupon de descuento</h3>
        <Cupon />
        <hr />
        {<Delivery />}
        <hr />
        <ul className="my-3 text-gray-500 w-full">
          <li className="flex justify-between">
            <p>Subtotal</p>
            <span>$20.000</span>
          </li>
          <li className="flex justify-between">
            <p>Descuento</p>
            <span>-$5.000</span>
          </li>
          <li className="flex justify-between">
            <p>Delivery</p>
            <span>$5.000</span>
          </li>
          <li className="flex justify-between mt-10 text-xl mb-5 font-bold text-tertiary">
            <h4>Total</h4>
            <p>$20.000</p>
          </li>
          <h5 className="text-white text-lg font-semibold">Instrucciones</h5>
          <hr />
          <textarea className="bg-white rounded-xl px-3 py-1 text-black font-semibold my-5 w-full h-52"></textarea>
          <Link href="/checkout">
            <button className="bg-tertiary w-full py-2 cursor-pointer rounded-xl text-black font-bold text-lg">
              Continuar
            </button>
          </Link>
        </ul>
      </section>
    </>
  );
}
