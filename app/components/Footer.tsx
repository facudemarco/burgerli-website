import Link from "next/link";
import { anton } from "../layout";
import Logo from "./Logo";
import Facebook from './icons/Facebook'
import Instagram from './icons/Instagram'
import Whatsapp from './icons/Whatsapp'

export default function Header() {
  return (
        <footer className={`${anton.className} text-[#FCEDCC] bg-[#EA951B]`}>
            <img src="/bg-footer2.png" alt="Footer" className="w-full object-cover" />
            <ul className="flex flex-col md:flex-row justify-between md:items-end mb-5 px-10">
                <Link className="mx-auto md:mx-0" href='/'>
                    <Logo width="135px"/>
                </Link>
                <li className="flex flex-col items-center gap-5 md:gap-10">
                    <p className="text-2xl text-center">Seguinos en nuestras en redes</p>
                    <ul className="flex w-full justify-between mb-5 md:mb-5 md:justify-around">
                        <Link target="_blank" href="https://www.facebook.com/burgerlibg/">
                            <Facebook />
                        </Link>
                        <Link target="_blank" href="https://wa.me/5491157395035">
                            <Whatsapp />
                        </Link>
                        <Link target="_blank" href="https://www.instagram.com/burgerliar/">
                            <Instagram />
                        </Link>
                    </ul>
                </li>
                <li className="flex md:w-auto w-full items-center bg-[#FCEDCC] text-black px-5 py-3 rounded-2xl flex-col gap-6">
                        <p className="text-2xl">Horarios de atención</p>
                       <div>
                       <small className={`${anton.className} text-lg font-semibold`}>• TODOS LOS DIAS</small>
                       <small className={`${anton.className} text-lg font-semibold text-[#EA951B]`}> 12:00 a 15:30 / 20:00 a 23:30</small>
                       </div>

                </li>
            </ul>
            <div className="flex  flex-col md:flex-row justify-between items-center bg-[#222222] text-gray-200 md:px-10 py-1">
                <p className={anton.className}>Todos los derechos reservados 2025 © Burgerli</p>
                <div className="flex items-center gap-2">
                <p className={anton.className}>Desarrollado por:</p>
                <Link target="_blank" href='https://www.iwebtecnology.com'>
                    <img src="/iweb.png" alt="iWeb" />
                </Link>
                </div>
            </div>
        </footer>
    )
}