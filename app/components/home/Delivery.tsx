'use client'
import React, { useState } from 'react'
import Ubicacion from '../icons/Ubicacion'
export default function Delivery() {
    const [isDeliveryChecked, setIsDeliveryChecked] = useState(false);
    const [isTakeAwayChecked, setIsTakeAwayChecked] = useState(false);
  return (
    <>
        <ul className='flex my-3 justify-between items-center'>
            <li>
                <input 
                name='pedido' 
                type="radio"
                onClick={() => {
                  setIsTakeAwayChecked(false)
                  setIsDeliveryChecked(true)}
                }
                /> Delivery
            </li>
            <li>
                <input 
                name='pedido' 
                type="radio"
                onClick={() => {
                  setIsDeliveryChecked(false)
                  setIsTakeAwayChecked(true)}}
                /> Retiro en el local
            </li>
        </ul>
       {isDeliveryChecked && 
       <>
          <div>
            <div className='flex justify-between items-center'>
              <div className='flex gap-3'>
              <Ubicacion fill={"white"}/>
              <div className='flex flex-col justify-center'>
                {/* ACA VAN LAS DIRECCIONES GUARDADAS DEL USUARIO */}
                <p>Direccion falsa 1234</p>
                <small>Casa</small>
              </div>
              </div> 
                <input className='rounded-xl' type="checkbox" name="" id="" />
            </div>
          </div>
          <div className='border-dashed border-2 px-3 py-1 my-3'>
            {/* INPUT PARA AGREGAR NUEVA DIRECCION TEMPORARIA  */}
            <p>Agregar nueva direccion</p>
          </div>
          </>}
          {isTakeAwayChecked &&
          <div>
            <p className='text-start font-bold text-lg my-4'>Seleccioná la sucursal de retiro</p>
            <select className='w-full'>
              <option className='text-black' value="">Gerli</option>
              <option className='text-black' value="">Avellaneda</option>
              <option className='text-black' value="">Lanus</option>
            </select>
          </div>
          }       
    </>
  )
}
