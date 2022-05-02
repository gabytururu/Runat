import './Cart.css'
import { useContext, useState } from 'react'
import CartContext from '../Context/CartContext'
import { Link } from 'react-router-dom'
// firebase2 - aca me traigo la funcion q ocupare
import { addDoc, collection, Timestamp , updateDoc, doc, deleteField, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore'
//aca me traigo la ref especifica a mi base de datos especifica creada en firebase1 
import { firestoreDB } from '../../services/firebase/index'

const Cart = () => {

    const [loading, setLoading] = useState(false)

    const { cart, removeItem, sumaTotal, clearCart } = useContext (CartContext)
 
    //clase firebase 2

    //lo comento pq se mueve a la función const createOrder
    // const objOrder = {
    //     items: cart,
    //     buyer: {
    //         name: 'Sebastian Zurivia',
    //         phone: '12345678',
    //         email: 'szuviria@gmail.com'
    //     },
    //     total: sumaTotal(),
    //     date: new Date()
    // }


    // firebase2 - p agregrar docus a una collection debo utilizar funcions de la librería de firebase
    const addDocToCollection = () => {
        const collectionRef = collection(firestoreDB, 'nuevaCollectionUser')
        const objNuevaCollectionUser = {
            nombre: 'gabrielaM',
            phone: '123456678',
            email: 'gmorales@gmail.com',
            //date: new Date() // ojo si yo solo pongo asi new Date() firestore lo va a reconocer como string. p poderlo manipular realmente como fecha me tengo q traer el objeto timestamp de la libreria de firebase - para luego usar ese objeto  con su propiedad fromDate - lo que me permitira que el campo de fecha sea en formato timestamp // aunque curiosamente a el no le salio pq el firebase igual registro timestamp solo insertando new Date() - sin embargo recomienda que se use timestamp para evitar errores alguna vez
            date: Timestamp.fromDate(new Date())
        }
        
        addDoc(collectionRef, objNuevaCollectionUser )
            .then(response => {
                console.log(response.id)
            })

    }

    const updateDocFromCollection = () => {
        const id = 'YDTPRPg7UFBpAcYxc1Sq'

        const docRef = doc(firestoreDB, 'nuevaCollectionUser', id)

        const fieldToUpdate = {
            name: deleteField(),
            nombre: 'brad Pitt',
            phone: '98453546',
            date: Timestamp.fromDate(new Date())
        }

        updateDoc(docRef, fieldToUpdate)
            .then(response => {
                console.log(response)

            })
           
    }

    const createOrder = () => {
        
        setLoading(true)

        const objOrder = {
            items: cart,
            buyer: {
                name: 'Sebastian Zurivia',
                phone: '12345678',
                email: 'szuviria@gmail.com'
            },
            total: sumaTotal(),
            date: new Date()
        }

        const batch = writeBatch(firestoreDB)
        //paso 1 - verifico que el stock disponible sea mayor al pedido usando la funcion q me trae los datos (getDocs)
        // PASO 2 - filtro el producto que quiero buscar su stock, pq si no me traigo todos los productos completos y todo su stock q en un caso real puede ser miles, pa hacer esto tengo q usar query y where 

        //paso3 creo mi collection poq esto será un parametro necesario 
        const collectionRefProds = collection(firestoreDB, 'products')

        // paso4- llamo mi collection, y luego tengo que determinar donde y como buscar. en este caso debo buscar a partir de mis ids de productos pero OJO, no voy a filtrar por un solo ID, osea el parametro de entrada de busqueda y filtrado no es un solo ID, sino todos los IDS Que correspondan a los productos elegidos en mi carrito y pa eso, debo usar un map primero para traerme todos los ids que vienen del cart

        const ids = cart.map(prod => prod.id)

        //paso x -- determinar que hago con los pedidos outofstock. osea no se que hare con ellos pero aca establezco al menos el contenedor donde deben guardarse para luego ver q les hacemos -- de momento los voy a pushear ahi 
        const outOfStock = []

        //paso 5 - pa decirle a la función where que yo quiero ir y buscar el ID de cada producto, debo armar una nueva funcion de la libreria de firebase llamado documentId, y esto lo acompaño con un operador llamado "in" que me permite verificar que los ids de document id esten dentro de los ids que voy a usar como referencia de comparacion (los que mapee antes)
        getDocs(query(collectionRefProds, where(documentId(), 'in', ids )))
            .then(response => {
                // como respuesta tendre un array de productos pq es una funcion en plural y ahora debo entonces con un for each establecer la cantidad de productos que selecciono el usuario que corresponden al docukment oque estoy buscando aca con el for each
                response.docs.forEach( doc => {
                    //estos son los datos que vienen de la base de datos
                    const dataDoc = doc.data()
                    //esta otra es la cantidad que tengo en el carrito
                    // entro al cart y busco el producto donde su id sea igual al id del doc.data. y de eso me traigo la cantidad
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    //ahroa, si el stock es mayor o igual que la cantidad seleccionada por el ussuario entonces yo procedo con el batch update
                    if(dataDoc.stock >= prodQuantity) {
                        // el update requiere como primer parametro una referencia, y como segundo parametro qe es el campo a actualizar
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                    } else {
                        // data doc corresponde al resto de campos ojo. data id pues al id unico -- hay qu recordar que cuando consologeamos esto, de inicio el id sale en un nivel o rango de info como un objeto independeinte al objeto data doc que aparece a otro nivel o altura / jerarquia de info, y que si deseo verlos como en un mismo nivel, debo entonces spredear el objeto dataDoc. En este caso pues no voy a manipular las propiedades dentro de data doc asi que siendo puristas, esto no es necesario... pero sebas decide poner el spread op nomas para que quede todo al mismo nivel como ejemplo
                        outOfStock.push({id:doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                //aca si ya vi que se cumple con la existencia de ciertos productos que son mayores a su stock, pues voy y ahora si creo la actualización d la collection, indicand que la actualizacion se crea en la base firestoreDB, en una nueva collection llamada orders
                if(outOfStock.length === 0 ) {
                    const collectionRefProds = collection(firestoreDB, 'orders')
                    return addDoc(collectionRefProds, objOrder)
                } else {
                    //y si no esta todo bien con el stock pq no hay stoc, pues puedo elegir aca q hacer, ya sea un msj de error, avisarle al user cuales no hay etc. sebas elige usar un .then mas alla abajo para evitar then anidades o whatever
                    return Promise.reject({name: 'outOfStockError', products: outOfStock})
                }
            }).then (( { id }) => {
                // ahora si sta todo ok 
                batch.commit()
                console.log(`el id de la orden es ${id}`)
            }).catch( error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if(loading) {
        return <h1>Se esta generando su orden</h1>
    }

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
            
            {/* Clase Firebase 2 hardcodeando metodo para agregar algo a la coleccion */}
            <div>
            <button onClick={() => addDocToCollection()} className='botonUpdateColl' >Agregar Docus a Collection </button>
            <button onClick={() => updateDocFromCollection()} className='botonUpdateColl' >Actualizar Documento </button>
            <button onClick={() => createOrder()} className='botonUpdateColl' >Generar Orden</button>
            </div>

        </div>
        </div>
    )
}

export default Cart