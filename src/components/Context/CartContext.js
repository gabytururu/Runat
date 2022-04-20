import { createContext, useState } from 'react'


const CartContext = createContext()

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
        console.log(id)
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    return (        
        <CartContext.Provider value= {{cart, addItem, qtyCartWidget, isInCart, clearCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext