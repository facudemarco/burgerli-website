'use client'
import { useState } from 'react'
import Logo from './Logo'

export default function Header() {
    const [user, setUser] = useState(false)
  return (
        <header className="flex justify-between text-md font-semibold bg-[#EA951B] py-2 px-5">
            <Logo width={70}/>
            <section className="flex gap-10 items-center">
                <ul className="flex gap-10">
                    <li id='hamburguesas' className='cursor-pointer'>Hamburguesas</li>
                    <li id='acompañamientos' className='cursor-pointer'>Acompañamientos</li>
                    <li id='bebidas' className='cursor-pointer'>Bebidas</li>
                    <li id='sucursales' className='cursor-pointer'>Sucursales</li>
                </ul>

                {user ? 
                <section>
                    <div className="flex gap-5 items-center">
                        <Logo width={40}/>
                        <span>Perfil</span>
                        <span> - </span>
                    </div>
                </section>
                 : 
                <section>
                     <button className='bg-yellow-200 cursor-pointer px-6 py-[5px] shadow-gray-700 shadow-md rounded-xl font-semibold'>Iniciar sesion</button>
                </section>
                }
            </section>
        </header>
    )
}
