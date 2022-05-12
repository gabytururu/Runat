import './ItemDetail.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/itemCount'
import CartContext  from '../Context/CartContext'
import { useNotification } from '../Notification/Notification'
import Cart from '../Cart/Cart'



const Details = ({id, name, category, description, img, serviciosBrindados, price, puntoPartida, fechas, reserva, stock}) => {
        
        const { addItem, isInCart, clearCart, removeItem, cart, quantityProd } = useContext(CartContext)
        
        const { setNotification } = useNotification()
      
        const finalizarCompra =  (qtyCounter) => {      
            const objProd = {               
                    id, name, price, 
            }    
            
            if (qtyCounter > 0) {
        
            addItem({...objProd, quantity: qtyCounter})
       
            setNotification('success', `Se reservó un tour a ${name} para un grupo de ${qtyCounter} correctamente` )

            } else {                
                setNotification('error', `¡Ups! Lo sentimos. No es posible reservar con ${qtyCounter} personas agregadas` )
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
                        <div>
                            <div className='linkCarrito'>
                            <p className='reservaPrevia'>Tu Reservación de Este Tour será Para </p>    
                            { cart.map( p => 
                            name===p.name?
                            <div key={p.id} className='reservaPrevia'>{p.quantity} Personas </div>
                            :
                            '')                            
                            }                       
                            <Link to = '/cart' className='botonCompraContext'>IR AL CARRITO</Link>                            
                            </div>
                            <br></br>
                            <button onClick={removerProducto} className='botonCambios'>Modificar Reservación</button>  
                            <button onClick={clearCart} className='botonCambios'>vaciar carrito</button>                 
                        </div>                 
                        : 
                        // <ItemCount 
                        // header={'¿Para cuántas personas deseas reservar?:'} stock={stock} init={quantityProd(id)} onAdd={finalizarCompra}/> 
                        <ItemCount 
                        header={'¿Para cuántas personas quieres reservar?'} stock={stock} init={0} onAdd={finalizarCompra}/> 
                    }                                             
                </div>      
            </div>
        </section>
    )
}

export default Details

//---------- VERSION PREVIA DE CONTROL PARA MANIPULACIÓN FOOTER -------- RETURN LIMPIO PREVIO ----------------------//

// return(

//     <section className="boxID">            
//         <div className="cardID">
//             <div className="detallesID">
//                 <h3>{name}</h3>
//                 <div className="description">
//                     <p>{category}</p>
//                     <p>{description}</p>                
//                     <picture>
//                         <img src={img} alt={name} className="imgID"/>
//                     </picture>               
//                     <p>{serviciosBrindados}</p>
//                     <p>{price}</p>
//                     <p>{puntoPartida}</p>
//                     <p>{fechas}</p>
//                     <p>{reserva}</p>  
//                 </div>                 
//             </div>   
//             <footer className='ItemFooter'>                     
//                 { isInCart(id) ? 
//                     <div><Link to = '/cart' className='linkCarrito'>Ya existe una reservación para este Tour <br></br><br></br>  VER CARRITO</Link><br></br><button onClick={clearCart} className='botonCompraContext'>vaciar carrito</button>                 
//                     <button onClick={removerProducto} className='botonCompraContext'>Eliminar del carrito</button>  
//                     </div>                 
//                     : 
//                     <ItemCount header={'¿Para cuántas personas deseas reservar?:'} stock={stock} init={0} onAdd={finalizarCompra}/> }                                             
//             </footer>      
//         </div>
//     </section>
// )

