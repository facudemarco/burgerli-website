'use client'
import { useState } from 'react'
import Logo from './Logo'
import ArrowDown from './icons/ArrowDown'
import Link from 'next/link'

export default function Header() {
    const [user] = useState(true)
    const [menu, setMenu] = useState(false)
    
    const handleClick = () => {setMenu(!menu)}

  return (
        <header className="flex justify-between items-center text-md font-semibold bg-[#EA951B] py-2 px-5">
            <Link href='/'>
            <Logo width={70}/>
            </Link>
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
                        <div onClick={handleClick} className={menu ? 'rotate-180 cursor-pointer' : 'cursor-pointer'}>
                        <ArrowDown />
                        </div>
                    </div>
                </section>
                 : 
                <section>
                     <Link href='/login' className='bg-yellow-200 cursor-pointer px-6 py-[8px] shadow-gray-700 shadow-md rounded-xl font-semibold'>Iniciar sesion</Link>
                </section>
                }
            </section>
            {menu ? <div className='absolute right-5 rounded-b-xl top-20 bg-red-500'>
                <ul className='flex gap-1 flex-col justify-between items-start py-2 pl-3 pr-5 bg-amber-950 text-white'>
                    <li>Mis favoritos</li>
                    <li>Historial de compras</li>
                    <li>Informacion personal</li>
                </ul>
                <p className='text-center py-1'>Cerrar sesion</p>
            </div> : ''}
        </header>
    )
}
