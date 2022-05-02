import './Cart.css'
import { useContext } from 'react'
import CartContext from '../Context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, removeItem, sumaTotal, clearCart } = useContext (CartContext)
 

    if (cart.length === 0) {
        return (
            <div>
              <h1> Carrito Vacío</h1> <br></br> <h2>No has agregado ningún producto</h2> 
              <Link to='/' className='botonVolver'><h3>Seguir comprando</h3></Link>
            </div>
               
            
        )
    }

    console.log(sumaTotal(cart))    
  
    return (
        <div>   
        <h1>¡Gracias Por Tu Compra!</h1>
        <div className='CartTicket'>    
            <div className='header'>
                <div className='headerTitle'>Tu Carrito</div>
                <p>Por favor revisa tu lista de productos<br></br>Si estás de acuerdo con todo acepta para ir al último paso</p></div>        
                {
                cart.map (prod => <div key={prod.id}>                   
                    <div className='ticketContent'>
                        <strong>Nombre: </strong>{prod.name}<br></br>                        
                        <strong>Precio: </strong>${prod.price}<br></br>
                        <strong>Tamaño del Grupo Reservado:   </strong>{prod.quantity} personas<br></br>               
                        <strong>Subtotal tour {prod.id}:  </strong>${prod.quantity * prod.price} <br></br>
                        <button className='botonVolver' onClick={() => removeItem(prod.id)}>Quitar</button><br></br>                        
                    </div>
                    </div>)
                }            
        
            <div className='total'>
                <h2>Total a Pagar:${sumaTotal()}</h2>
                <button className='botonAceptar' onClick={() => clearCart()}>VaciarCarrito</button>
                <Link to='*' className='botonAceptar'>ACEPTAR</Link>

            </div>     

        </div>
        </div>
    )
}

export default Cart