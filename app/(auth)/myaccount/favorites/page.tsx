import ModalProducts from "@/app/components/ModalProducts";
import { pattaya } from "@/app/layout";

export default function FavoritePage() {
  return (
    <section className="w-full px-10 py-5">
        <h1 className={`${pattaya.className}font-bold text-2xl`}>Favoritos</h1>
        <p className="my-5">Volvé a pedir las que más te gustan</p>
        <ul className="flex flex-wrap justify-between w-full">
            <ModalProducts />
        </ul>
    </section>
  )
}
