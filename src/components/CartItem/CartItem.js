import './CartItem.css'
import{ useContext } from 'react'
import CartContext from '../Context/CartContext'

const CartItem = ({ id, name, price, quantity, category }) => {

const { removeItem } = useContext(CartContext)

const handleRemove = (id) => {
    removeItem(id)
}

return (

<div key={id}>                   
    <div className='ticketContent'>
        <strong>Nombre: </strong>{name}<br></br>                        
        <strong>Precio: </strong>${price} USD<br></br>
        {/* <strong>Category: </strong>{category}<br></br> */}
        <strong>Tamaño del grupo:</strong> {quantity} personas<br></br>               
        <strong>Subtotal :  </strong>${quantity * price} USD<br></br>
        <button className='botonRemove' onClick={() => handleRemove(id)}>Quitar</button><br></br>                        
    </div>
</div>
)
}

export default CartItem