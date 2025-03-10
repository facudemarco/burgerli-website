import { pattaya } from "@/app/layout"

export default function Sucursales() {
  return (
    <section className="w-full flex flex-col gap-5">
        <h2 className={`${pattaya.className} text-center text-2xl`}>Sucursales</h2>
        <p className="text-center">Estamos en Lanus, Gerli y Wilde te esperamos  para disfrutar de las mejores hamburguesas. Para Delivery podes hacer tu pedido en la web o encontranos en Pedidos Ya
        </p>
        <ul className="flex justify-between items-center mx-20">
            <li>
                <p className={`${pattaya.className} text-center text-2xl`}>Lanus</p>
                <small className="underline">• Sarmiento 1736</small>
                <img src="./logo.png" alt="" />
            </li>
            <li>
            <p className={`${pattaya.className} text-center text-2xl`}>Wilde</p>
                <small className="underline">• Casacubierta 918</small>
                <img src="./logo.png" alt="" />
            </li>
            <li>
            <p className={`${pattaya.className} text-center text-2xl`}>Gerli</p>
                <small className="underline">• Onsari 417</small>
                <img src="./logo.png" alt="" />
            </li>
        </ul>
    </section>
  )
}
