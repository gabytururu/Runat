import './CartWidget.css'

const CartWidget = () => {

    return(

        <div>
            <div className="carritoCount">
            <p className="carritoMsg">0</p>
            <img src='../images/cart.png' alt='cart' className="carritoImg"/>
            </div>
        </div>
    )

}

export default CartWidget