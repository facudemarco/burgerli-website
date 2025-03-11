import { pattaya } from '@/app/layout'
// import Cheddar from '../icons/Cheddar'
import Delivery from './Delivery'

export default function Cart() {
  return (
    <section className="w-1/4 h-min text-white rounded-2xl bg-amber-900 py-3 px-5">
          {/* <Cheddar /> */}
          <h2 className={`${pattaya.className} text-xl`}>Mi pedido</h2>
          <ul className='flex mt-6 flex-col gap-2'>
            <li className='flex justify-between items-center'>
              <div className='flex gap-1'>
              <small className='text-orange-500'>x1</small>
              <p>Hamburguesa triple queso</p>
              </div>
              <span className='font-semibold'>$10.000</span>
            </li>
            <hr className='font-bold' />
            <li className='flex justify-between items-center'>
              <div className='flex gap-1'>
              <small className='text-orange-500'>x1</small>
              <p>Hamburguesa triple queso</p>
              </div>
              <span className='font-semibold'>$10.000</span>
            </li>
            <hr className='font-bold' />
          </ul>
          <h3 className='mt-4 font-semibold'>Cupon de descuento</h3>
          <div className='flex bg-white rounded-xl py-1 my-2'>
          <input className='w-full text-black rounded-xl' type="text" />
          <button className='text-black font-semibold px-2 cursor-pointer'>Aplicar</button>
          </div>
          <hr />
          {<Delivery />}
          <hr />
          <ul className='my-3 text-gray-500'>
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
            <li className='flex justify-between mt-10 text-xl mb-5 font-bold text-orange-400'>
              <h4>Total</h4>
              <p>$20.000</p>
            </li>
            <h5 className='text-white text-lg font-semibold'>Instrucciones</h5>
            <hr />
            <textarea className='bg-white rounded-xl px-3 py-1 text-black font-semibold my-5 w-full h-52'></textarea>
            <button className='bg-orange-500 w-full py-2 rounded-xl text-black font-semibold text-lg'>Continuar</button>
          </ul>
          
        </section>
  )
}
