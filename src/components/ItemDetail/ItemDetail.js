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

        const removerProducto = () => {
            removeItem(id)
        }

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
                    <button onClick={clearCart} className='botonCompraContext'>vaciar carrito</button>                   
                    <button onClick={removerProducto} className='botonCompraContext'>Eliminar del carrito</button>                   
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


// notas retro Rodrigo para correccion del error con funcion remove Item:

// opcion 1 --> insertar la funcion removeItem directo en el onclick pero con la sintaxis de arrow function, si no, no la ejecuta bien (como me pasó previamente). Quedaría:                       
               // <button onClick={() => removeItem(id)} className='botonCompraContext'>Eliminar del carrito</button>                   
                

// Opcion 2 --> ejecutarla con la función nueva que cree (removerProducto) sin embargo en este caso el error mío era que al insertar el id como parámetro de la nueva función, esta termina declarándose como una nueva variable local (en lugar de tomar el id previamente creado en el scope global), y esta nueva id local no tiene en realidad un valor por lo que terminaba siendo undefined a la hora de llamarla desde el return. Para corregir el error simplemente toca establecer la funcion SIN el id en el parametro inicial, de modo que al llamar al id (al interior de la funcion) este tome la variable id previamente creada en el scope global ... la cual SI tiene valores vincluados pre establecidos desde asyncmock. Quedaría: 
               // const removerProducto = () => {  removeItem(id) }
               // <button onClick={removerProducto} className='botonCompraContext'>Eliminar del carrito</button>                