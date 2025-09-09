'use client'
import { createContext, useContext, useState } from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([
    {
      id: "1",
      name: "Hamburguesa triple queso",
      description: "Extra: Sin, Papas",
      price: 10,
      quantity: 1,
      image: "https://via.placeholder.com/150",
      category: "general",
    }
  ])

      const addToCart = (item) => {
      const productFound = cart.findIndex((product) => product.id === item.id)
      
      if (productFound >= 0) {
        const newCart = structuredClone(cart)
        newCart[productFound].quantity += 1
        console.log(newCart)
        setCart(newCart)
      }
      setCart(prevState => ([
        ...prevState,
        {
          ...item,
          quantity : 1
        }
      ]))
    };

    const removeFromCart = (item) => {
     setCart(prevState => prevState.filter((product) => product.id !== item.id))
    }

    const addQuantity = (item) => {
      const productFound = cart.findIndex((product) => product.id === item.id)
      if (productFound >= 0) {
        const newCart = structuredClone(cart)
        newCart[productFound].quantity += 1
        return setCart(newCart)
      }
    }

    const resetCart = () => {
      setCart([])
    }

    const totalPricing = () => {
      return cart.reduce((total, product) => total + product.price * product.quantity, 0)
    }

  return (
    <CartContext.Provider value={
        {
         cart, 
         setCart,
         addToCart,
         removeFromCart,
         addQuantity,
         resetCart,
         totalPricing
        }
      }>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)