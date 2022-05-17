import './Cart.css'
import { useContext, useState } from 'react'
import CartContext from '../Context/CartContext'
import { Link } from 'react-router-dom'
import { addDoc, collection, Timestamp , updateDoc, doc, deleteField, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase/index'
import CartItem from '../CartItem/CartItem'

const Cart = () => {


    const { cart, removeItem, sumaTotal, clearCart } = useContext (CartContext)    

       if (cart.length === 0) {
        return (
            <div className='carritoVacio'>
              <h1>Tu Carrito Está Vacío</h1>
              <Link to='/' className='botonVerTours'><h3>Ver Tours Disponibles</h3></Link>
            </div>             
            )
        }

    console.log(sumaTotal(cart))    

  
    return (
        <div>   
            <h1 className='msjCierre'>Tu Aventura Está Casi Lista </h1>
            <div className='CartTicket'>            
                <div className='header'>                
                    <p>Por favor revisa los tours en tu carrito.<br></br>Si estás de acuerdo elige ACEPTAR para ir al último paso</p>
                </div>      
                { cart.map (prod => <CartItem key={prod.id} {...prod}/>)}             
                <div className='totalContainer'>
                    <p className='total'>Tu pago total será de ${sumaTotal()} USD</p>                    
                    <div className='botonesFinales'>
                        <button className='botonVaciar' onClick={() => clearCart()}>Vaciar Carrito</button>
                        <Link to='/checkout' className='botonAceptar'>Aceptar</Link>
                    </div>
                </div>               
            </div>
        </div>
    )
}

export default Cart