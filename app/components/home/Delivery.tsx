'use client'
import React, { useState } from 'react'
import Ubicacion from '../icons/Ubicacion'
export default function Delivery() {
    const [isDeliveryChecked, setIsDeliveryChecked] = useState(false);

  return (
    <>
        <ul className='flex my-3 justify-between items-center'>
            <li>
                <input 
                name='pedido' 
                type="radio"
                onClick={() => {setIsDeliveryChecked(true)}}
                /> Delivery
            </li>
            <li>
                <input 
                name='pedido' 
                type="radio"
                onClick={() => {setIsDeliveryChecked(false)}}
                /> Retiro en el local
            </li>
        </ul>
       {isDeliveryChecked && 
       <>
       <div>
            <div className='flex justify-between items-center'>
              <div className='flex gap-3'>
              <Ubicacion />
              <div className='flex flex-col justify-center'>
                <p>Direccion falsa 1234</p>
                <small>Casa</small>
              </div>
              </div> 
                <input className='rounded-xl' type="checkbox" name="" id="" />
            </div>
          </div>
          <div className='border-dashed border-2 px-3 py-1 my-3'>
            <p>Agregar nueva direccion</p>
          </div>
          </>}
    </>
  )
}
