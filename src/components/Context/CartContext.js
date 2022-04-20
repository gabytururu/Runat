// un custom context es un context dinamico permite ir cambiando a partir de los valores que recibe

import { createContext, useState } from 'react'


const CartContext = createContext()

//aca yo quiero envolver TODA mi aplicacion con el context este de cartContext asi que creo una funcion que es en sí mismo un componente que me permita eso

export const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState ([])
    
    console.log(cart)

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }

    const qtyCartWidget = () => {
        let qtyCount = 0
        cart.forEach (prod => {
            qtyCount = qtyCount += prod.quantity
        })

        return qtyCount
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    return (
        // <CartContext.Provider value= {{cart, setCart}}>
        // pal ejemplo con funciones ya no necesito compartir setCart, sino las funciones que contienen a setCart
        <CartContext.Provider value= {{cart, addItem, qtyCartWidget, isInCart, clearCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext