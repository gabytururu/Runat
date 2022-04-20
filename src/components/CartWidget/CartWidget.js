import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../Context/CartContext'

const CartWidget = () => {

    const { qtyCartWidget } = useContext(CartContext)

    return(

        <div>
            <div className="carritoCount">
            <p className="carritoMsg">{ qtyCartWidget() }</p>
            <img src='../images/cart.png' alt='cart' className="carritoImg"/>
            </div>
        </div>
    )

}

export default CartWidget