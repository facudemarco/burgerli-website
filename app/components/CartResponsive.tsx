import Link from 'next/link'
import Cupon from './Cupon'
import Delivery from './home/Delivery'
import { Inter, Pattaya } from 'next/font/google';
import { X } from 'lucide-react';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pattaya = Pattaya({
  weight: ["400"],
  variable: "--font-pattaya",
  subsets: ["latin"],
});

export default function CartResponsive({closed} : {closed: () => void}) {

  return (
    <section className={`${inter.className} md:hidden block fixed overflow-y-scroll w-full h-[90vh] right-0 z-50 pt-5 top-0 text-white rounded-2xl bg-primary py-3 px-5`}>
              <div>
                <h2 className={`${pattaya.className} text-2xl`}>Mi pedido</h2>
                <button onClick={closed} className='absolute cursor-pointer right-3 top-2 p-2 rounded-full bg-black/20' aria-label='Cerrar'>
                  <X className='w-6 h-6' />
                </button>
              </div>
              <ul className='flex mt-6 flex-col gap-2'>
                <li className='flex justify-between items-start'>
                    <div className='flex flex-col items-start gap-1'>
                        <p className='font-bold'>Hamburguesa triple queso</p>
                        <small>Extra:</small>
                        <small>Sin:</small>
                        <small>Papas:</small>
                        <button className='underline cursor-pointer text-sm'>Eliminar</button>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <span className='font-bold'>$10.000</span>
                        <div className='flex gap-4 border rounded-xl justify-between px-2'>
                          <button className='cursor-pointer'> - </button>
                          <span className='text-tertiary font-bold'>1</span>
                          <button className='cursor-pointer'> + </button>
                        </div>
                    </div>
                </li>
                <hr className='font-bold' />
                <li className='flex justify-between items-start'>
                    <div className='flex flex-col items-start gap-1'>
                        <p className='font-bold'>Hamburguesa triple queso</p>
                        <small>Extra:</small>
                        <small>Sin:</small>
                        <small>Papas:</small>
                        <button className='underline cursor-pointer text-sm'>Eliminar</button>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <span className='font-bold'>$10.000</span>
                        <div className='flex gap-4 border rounded-xl justify-between px-2'>
                          <button className='cursor-pointer'> - </button>
                          <span className='text-tertiary font-bold'>1</span>
                          <button className='cursor-pointer'> + </button>
                        </div>
                    </div>
                </li>
                <hr className='font-bold' />
              </ul>
              <h3 className='mt-4 font-semibold'>Cupon de descuento</h3>
              <Cupon />
              <hr />
              {<Delivery />}
              <hr />
              <ul className='my-3 text-gray-500 w-full'>
                <li className='flex justify-between'>
                  <p>Subtotal</p>
                  <span>$20.000</span>
                </li>
                <li className='flex justify-between'>
                <p>Descuento</p>
                <span>-$5.000</span>
                </li>
                <li className='flex justify-between'>
                <p>Delivery</p>
                <span>$5.000</span>
                </li>
                <li className='flex justify-between mt-10 text-xl mb-5 font-bold text-tertiary'>
                  <h4>Total</h4>
                  <p>$20.000</p>
                </li>
                <h5 className='text-white text-lg font-semibold'>Instrucciones</h5>
                <hr />
                <textarea className='bg-white rounded-xl px-3 py-1 text-black font-semibold my-5 w-full h-52'></textarea>
                <Link href="/checkout">
                  <button className='bg-tertiary w-full py-2 cursor-pointer rounded-xl text-black font-bold text-lg'>Continuar</button>
                </Link>
              </ul>
              
            </section>
  )
}
