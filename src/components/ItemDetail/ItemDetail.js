import './ItemDetail.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/itemCount'
import CartContext  from '../Context/CartContext'
import { useNotification } from '../Notification/Notification'



const Details = ({id, name, category, description, img, serviciosBrindados, price, puntoPartida, fechas, reserva, stock}) => {
        
        const { addItem, isInCart, clearCart, removeItem } = useContext(CartContext)
        
        const { setNotification } = useNotification()


      
        const finalizarCompra =  (qtyCounter) => {      
            const objProd = {               
                    id, name, price, 
            }                      
        
            addItem({...objProd, quantity: qtyCounter})
       
            setNotification('success', `Se agregaron ${qtyCounter} ${name} correctamente` )

        }

        const removerProducto = () => {
            removeItem(id)
        }

    return(

        <section className="boxID">            
            <div className="cardID">
                <div className="detallesID">
                    <h3>{name}</h3>
                    <div className="description">
                        <p>{category}</p>
                        <p>{description}</p>                
                        <picture>
                            <img src={img} alt={name} className="imgID"/>
                        </picture>               
                        <p>{serviciosBrindados}</p>
                        <p>{price}</p>
                        <p>{puntoPartida}</p>
                        <p>{fechas}</p>
                        <p>{reserva}</p>  
                    </div>                 
                </div>   
                <footer className='ItemFooter'>                     
                    { isInCart(id) ? 
                        <div><Link to = '/cart' className='linkCarrito'>Ya existe una reservación para este Tour <br></br><br></br>  VER CARRITO</Link><br></br><button onClick={clearCart} className='botonCompraContext'>vaciar carrito</button>                 
                        <button onClick={removerProducto} className='botonCompraContext'>Eliminar del carrito</button>  
                        </div>                 
                        : 
                        <ItemCount header={'¿Para cuántas personas deseas reservar?:'} stock={stock} init={0} onAdd={finalizarCompra}/> }                                             
                </footer>      
            </div>
        </section>
    )
}

export default Details

