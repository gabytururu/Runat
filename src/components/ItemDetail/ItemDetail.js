import './ItemDetail.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/itemCount'
import CartContext  from '../Context/CartContext'
import { useNotification } from '../Notification/Notification'

const Details = ({id, name, category, description, img, serviciosBrindados, price, puntoPartida, fechas, reserva, stock}) => {
        
        const { addItem, isInCart, clearCart, removeItem, cart } = useContext(CartContext)
        
        const { setNotification } = useNotification()
      
        const finalizarCompra =  (qtyCounter) => {      
            const objProd = {               
                    id, name, price, 
            }    
            
            if (qtyCounter > 0) {
        
            addItem({...objProd, quantity: qtyCounter})
       
            setNotification('success', `¡Listo! Tu reservación a ${name} para ${qtyCounter} persona(s) fué enviada a tu carrito` )

            } else {                
                setNotification('error', `¡Uupss! No es posible reservar un tour para ${qtyCounter} personas. Intenta de nuevo` )
            }

        }

        const removerProducto = () => {
            removeItem(id)
        }



    return(

        <section className="boxID">            
            <div className="cardID">
                <div className="itemDetails">
                        <div className="descriptionGral">
                            <h3>{name}</h3>                       
                            <p>{description}</p>                
                        </div>  
                        <picture>
                            <img src={img} alt={name} className="imgID"/>
                        </picture>  
                        <div className="descriptionSpec">          
                            <p><strong>Actividad: </strong>{category}</p>
                            <p><strong>Precio: </strong>${price} USD por persona</p>
                            <p><strong>Encuentro: </strong>{puntoPartida}</p>
                            <p><strong>Recurrencia: </strong>{fechas}</p>
                            <p><strong>Requisito para Reservar: </strong>{reserva}</p> 
                            <p><strong>Incluye: </strong>{serviciosBrindados}</p>
                        </div>                                  
                </div>   
                <div className='itemCounter'>                     
                    { isInCart(id) ?                         
                        <div className='border'>
                            <div className='linkCarrito'>
                                <div className='upperSection'>
                                    <p className='reservaPrevia'><strong>Este tour fue agregado a tu Carrito:</strong></p>    
                                    { cart.map( p => name===p.name?
                                        <div key={p.id} className='reservaPrevia'>{p.name} para {p.quantity} Personas </div>
                                    :
                                        '')           
                                    }  
                                </div>                                
                                <div className='middleSection'>
                                    <p>¿Qué quieres hacer?</p>
                                    <div className='buttonSection'>
                                        <Link to = '/cart' className='botonCompraContext'>Ver<br></br>Carrito</Link> 
                                    </div>
                                    <div className='buttonSection'>
                                        <button onClick={removerProducto} className='botonCambios'>Cambiar<br></br>Reservación</button>                      
                                        <Link to = '/' onClick={clearCart} className='botonCambios'>Vaciar Carrito</Link>                                             
                                    </div>
                                </div>              
                            </div> 
                            <div className='bottomSection'>  
                                <div className='buttonSection'>                      
                                    <Link to = '/' className='botonVerTours'>Ver Más Tours</Link>  
                                </div>
                            </div>       
                        </div>                 
                    :                        
                        <ItemCount 
                        header={'¿Para cuántas personas quieres reservar?'} stock={stock} init={0} onAdd={finalizarCompra}/> 
                    }                                             
                </div>      
            </div>
        </section>
    )
}

export default Details

