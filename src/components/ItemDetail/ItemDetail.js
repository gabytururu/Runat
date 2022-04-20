import './ItemDetail.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/itemCount'
import CartContext  from '../Context/CartContext'



const Details = ({id, name, category, description, img, serviciosBrindados, price, puntoPartida, fechas, reserva, stock}) => {
        
        const { addItem, isInCart, clearCart, removeItem } = useContext(CartContext)
        
        const finalizarCompra =  (qtyCounter) => {      
            const objProd = {               
                    id, name, price, 
            }                      
        
            addItem({...objProd, quantity: qtyCounter})
        }

        // const removerProducto = (id) => {
        //     removeItem(id)
        // }

    return(

        <section className="boxID">            
            <div className="cardID">
                <div className="detallesID">
                    <h3>{name}</h3>
                    <p>{category}</p>
                    <p>{description}</p>
                </div>
                <picture>
                    <img src={img} alt={name} className="imgID"/>
                </picture>
                <div className="detallesID">
                    <p>{serviciosBrindados}</p>
                    <p>{price}</p>
                    <p>{puntoPartida}</p>
                    <p>{fechas}</p>
                    <p>{reserva}</p>                   
                </div>   
                <footer className='ItemFooter'> 
                    <button onClick={clearCart}>vaciar carrito</button>                   
                    <button onClick={removeItem}>Eliminar Este Producto del carrito</button>                   
                    { isInCart(id) ? 
                        <Link to = '/cart' className='linkCarrito'>Ya existe una reservación para este Tour <br></br><br></br>  VER CARRITO</Link>
                        : 
                        <ItemCount header={'¿Para cuántas personas deseas reservar?:'} stock={stock} init={0} onAdd={finalizarCompra}/> }                                             
                </footer>      
            </div>
        </section>
    )
}

export default Details
