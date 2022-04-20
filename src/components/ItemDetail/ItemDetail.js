import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/itemCount'
import CartWidget from '../CartWidget/CartWidget'
import {Context} from '../../App'

//NOTAS:
            //paso 1 -- inserto las importaciones de useContext y la ref context
            //acá vengo y recibo el setCart que envié por props desde ItemDetailContainer
            // const Details = ({id, name, category, description, img, serviciosBrindados, price, puntoPartida, fechas, reserva, stock, setCart, cart}) => {  
            // Posteriormente, ELIMINO setCart y cart de la lista de props enviadas, para evitar errores ya que ahora estoy también usandolas o trayéndomelas como parte del context y no como props anidadas (justo pa evitar el nesting)

const Details = ({id, name, category, description, img, serviciosBrindados, price, puntoPartida, fechas, reserva, stock}) => {

    const [quantity, setQuantity] = useState(0)
    console.log(quantity)
    
    //TESTS previos:
        // testeando el uso de useContext y context para verlo en console.logs
        // const value = useContext(Context)
        // console.log(value) //-- arroja "undefined en console.log"
        // console.log(cart) // arroja el array de objetos de reservaciones agregadas
        // AHORA ENTONCES DESESTRUCTURO CART Y SET CART EN EL LLAMADO DEL CONTEXT -- pero OJO, para poder hacer esto, tengo que eliminarlos de las props iniciales de const details.
    const { cart, setCart } = useContext(Context)

    const finalizarCompra =  (qtyCounter) => {      
        //TESTS consola (arroja dif numeros***)
        // console.log(qtyCounter)
        // console.log(quantity)   
        setQuantity(qtyCounter)           

        //NOTAS:
            // y acá mismo recibo la funcion que me traje por props de setCart, ahora como yo voy a agregar un objeto al seteo del carrito, pues aca mismo declaro el objeto que le voy a pasar al carrito
            //POSTERIORMENTE esta de calaracion la muevo AL INTERIOR de la funcion finalizar compra, para poder ahi mismo tambien setear el carrito (usar el context) incorporando estos valores, es decir, enviandolos al carrito, como antes hice con el nesting pero ahora con el context -- sin embargo el valor de quantity no lo mantiene como parte de la variable objProd, sino como un valor adicional donde iguala la quanity a la qtyCounter  
        const objProd = {
                id, name, price, 
            }            
        //NOTAS: 
                //y desde acá llamo al objeto que voy a crear cuando decido setear el carrito, con la salvedad y cuidadode tener en cuenta que el setCart es un array, pq asi fue declarado antes...entonces acá mismo, cuando lo llamo, lo llamo respetando la estructura de array que tiene (usando los corchetes. ) 
                //finalmente reconociendo que lo que yo deseo es no solo llamar porque sí, sino llamar para que esenuevo objeto ahora forme parte de mi array subyacente al carrito (lo que  hace que el carrito vaya recibiendo articulos), entonces tengo que agregar también una instrucción que permita que este objeto que recibe setCart se traslade al estado inicial.. acá en react JAMAS USO PUSH, porque eso modificaría o mutaría mi estado inicial o el contenido de mi variable de estado inicial y eso es INDESEABLE, lo que deseo es ir construyendo de forma agregada en una nueva versión del estado y eso se logra con el SPREAD OPERATOR ... ASI que agrego el spread operator a CART (que es mi estado inicial en itemDetailContainer -- y entonces pues como cart en sí aún no lo tenía, voy y me lo traigo por props basicamente )            
                //nota.. esto mismo podría hacerlo con la sintaxis de concat de la sig forma
                // setCart([cart.contact(objProd)])  //distinta sintaxis mismito resultado              
                // la ree estructuracion del setcart, permite resolver el asunto en que no se registraba bien la cantidad y la dif de numeros*** que arrojaban las pruebas previas entre quantity y qtyCounter-- como que en este context, permite que el cart seteado (setCart, reciba los detalles del cart inicial, del objetoProd creado y ademas, de una cantidad que es IGUAL que qty counter)

        setCart([...cart, {...objProd, quantity: qtyCounter}])
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
                    {quantity > 0 ? <Link to = '/cart' className='linkCarrito'>Ir al Carrito</Link> : <ItemCount header={'¿Para cuántas personas deseas reservar?:'} stock={stock} init={0} onAdd={finalizarCompra}/> }                               
                </footer>      
            </div>
        </section>
    )
}

export default Details


//-------------- VERSION SINTAXIS PREVIA --- SIN LA DESESTRUCTURACION DE PROD DETAILS PROCEDENTE DE ITEMDETAILCONTAINER---------//

// const Details = ({prodDetails}) => {

//     const [quantity, setQuantity] = useState(0)

//     const finalizarCompra =  (qtyCounter) => {
//         setQuantity(qtyCounter) 
//     }

//     return(

//         <section className="boxID">            
//             <div className="cardID">
//                 <div className="detallesID">
//                     <h3>{prodDetails.name}</h3>
//                     <p>{prodDetails.category}</p>
//                     <p>{prodDetails.description}</p>
//                 </div>
//                 <picture>
//                     <img src={prodDetails.img} alt={prodDetails.name} className="imgID"/>
//                 </picture>
//                 <div className="detallesID">
//                     <p>{prodDetails.serviciosBrindados}</p>
//                     <p>{prodDetails.precio}</p>
//                     <p>{prodDetails.puntoPartida}</p>
//                     <p>{prodDetails.fechas}</p>
//                     <p>{prodDetails.reserva}</p>                   
//                 </div>   
//                 <footer className='ItemFooter'>                    
//                     {quantity > 0 ? <Link to = '/cart' className='linkCarrito'>Ir al Carrito</Link> : <ItemCount header={'¿Para cuántas personas deseas reservar?:'} stock={prodDetails.stock} init={0} onAdd={finalizarCompra}/> }                               
//                 </footer>      
//             </div>
//         </section>
//     )
// }

// export default Details


