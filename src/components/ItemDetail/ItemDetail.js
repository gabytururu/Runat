import './ItemDetail.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/itemCount'
import CartContext  from '../Context/CartContext'
// esta de NotificationContext se va cuando yo decido crear la funcion useNotification, entonces sutituyo esta importacion del default, por una importacion especifica entre llaves de la funcion misma
//import NotificationContext from '../Notification/Notification'
import { useNotification } from '../Notification/Notification'
//y despues de importarla pues la consumo acá mismo.


const Details = ({id, name, category, description, img, serviciosBrindados, price, puntoPartida, fechas, reserva, stock}) => {
        
        const { addItem, isInCart, clearCart, removeItem } = useContext(CartContext)
        

        // PRIMERO me traigo (en imports arriba)la referecia a NotificationContext, y tmb la referencia a useContext que en realidad ya lo venia usando aca por el cartcontext. 
        // const { setNotification } = useContext(NotificationContext)

        //ULTIMO PASO QUE EESTABLECE SEBAS... Indica que --- SI NO QUEREMOS ESTAR IMPORTANDO USE CONTEXT, podemos simplemente asociar el use context a una nueva funcion que es la que será importada en su lugar (en app) y así cuando querramos usar / consumir la notificacion, en lugar de hacer el proceso de importacion de useContext, podemos simplemente consumir la funcion
        //DUDA -- NO ENTIENDO EN ABSOLUTO en que beneficiaria esto... pareciera estar usando la misma cantidad de codigo... ¿cuál es el sentido de hacer esta aparente anidacion o contención de useContext en la función notification context????) qu<á solo sea que todo el codigo asociado a context se quede alla?? y acá solo lo consumo??-- // en cualquier caso para hacer esto PRIMERO debo ir a NOTIFICATION.JS --- y agregar alla el import de usecontext, luego incorporar el usecontext (este mismo que eliminé de acá ) -->  const { setNotification } = useContext(NotificationContext) --> en una función o nueva referencia (que es la const useNotification que agrego al final del código alla), de modo que ahora acá en lugar de traer el use context me traigo la funcion derivada... es decir allá sustituyo el export default NotificationContext por el const useNotification que estoy creando

        const { setNotification } = useNotification()


        // luego vengo y agrego los detalles que quiero usar cuando consuma el context y la funcion setNotification que viene del notification context. en este caso indico cual sera la severidad y el mensaje que quiero que salga .. cuando yo le de click a finalizar compra y como ocurrira con ese click pues por eso yo vengo e incluyo esa lógica adentro de esta funcion

        const finalizarCompra =  (qtyCounter) => {      
            const objProd = {               
                    id, name, price, 
            }                      
        
            addItem({...objProd, quantity: qtyCounter})
            // si quiero q sea verde
            setNotification('success', `Se agregaron ${qtyCounter} ${name} correctamente` )

            //si quiero q sea rojo
            // setNotification('error', `Se agregaron ${qtyCounter} ${name} correctamente` )

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