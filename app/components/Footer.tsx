import Link from "next/link";
import { pattaya,roboto} from "../layout";
import Logo from "./Logo";
import Facebook from './icons/Facebook'
import Instagram from './icons/Instagram'


export default function Header() {
  return (
        <footer className={`${pattaya.className} bg-[#EA951B] pt-28`}>
            <ul className="flex justify-between items-end mb-5 px-10">
                <Link href='/'>
                    <Logo width="135px"/>
                </Link>
                <li className="flex flex-col">
                    <p className="text-2xl">Seguinos en nuestras en redes</p>
                    <ul className="flex justify-around">
                        <li>
                            <Facebook /> </li>
                        <li><Instagram /> </li>
                    </ul>
                </li>
                    <li className="flex flex-col">
                        <p className="text-2xl">Horarios de atención</p>
                        <small className={`${roboto.className} font-semibold`}>Lunes a viernes 10am a 11pm</small>
                        <small className={`${roboto.className} font-semibold`}>Sabado y domingos 10am a 2am</small>
                    </li>
            </ul>
            <div className="flex justify-between items-center bg-[#222222] text-white px-10 py-1">
                <p className={roboto.className}>Todos los derechos reservados 2025 © Burgerli</p>
                <p className={roboto.className}>Desarrollado por: iWeb</p>
            </div>
        </footer>
    )
}