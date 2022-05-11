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
            <div>
              <h1> Carrito Vacío</h1> <br></br> <h2>No has agregado ningún producto</h2> 
              <Link to='/' className='botonVolver'><h3>Seguir comprando</h3></Link>
            </div>             
            )
    }

    console.log(sumaTotal(cart))    

  
    return (
        <div>   
        <h1 className='grcs'>¡Excelente! <br></br>Ya Casi Está Lista tu Aventura </h1>
        <div className='CartTicket'>    
            <div className='header'>
                <div className='headerTitle'>Carrito : Tours Adquiridos</div>
                <p>Por favor revisa tu lista de productos<br></br>Si estás de acuerdo con todo acepta para ir al último paso</p></div>        

                { cart.map (prod => <CartItem key={prod.id} {...prod}/>)}              
                 
                
                {/* ----------Previo map pre div ---------- */}
                    {/* {
                    cart.map (prod => <div key={prod.id}>                   
                        <div className='ticketContent'>
                            <strong>Nombre: </strong>{prod.name}<br></br>                        
                            <strong>Precio: </strong>${prod.price}<br></br>
                            <strong>Tamaño del Grupo Reservado:   </strong>{prod.quantity} personas<br></br>               
                            <strong>Subtotal :  </strong>USD$ {prod.quantity * prod.price} <br></br>
                            <button className='botonRemove' onClick={() => removeItem(prod.id)}>Quitar</button><br></br>                        
                        </div>
                        </div>)
                    }             */}
        
            <div className='totalContainer'>
                <p className='total'>Su pago total es de: USD${sumaTotal()}</p>
                <div className='botonesFinales'>
                    <button className='botonVaciar' onClick={() => clearCart()}>Vaciar Carrito</button>
                    <Link to='/checkout' className='botonAceptar'>Aceptar / Checkout</Link>
                </div>

            </div>                 
          
        </div>
        </div>
    )
}

export default Cart




// --------------- firebase 2 - version completa con codigo para creacion y modificacion de collections ------------------------------------------

// const Cart = () => {

//     const [loading, setLoading] = useState(false)

//     const { cart, removeItem, sumaTotal, clearCart } = useContext (CartContext)    

//     // const addDocToCollection = () => {
//     //     const collectionRef = collection(firestoreDB, 'nuevaCollectionUser')
//     //     const objNuevaCollectionUser = {
//     //         nombre: 'gabrielaM',
//     //         phone: '123456678',
//     //         email: 'gmorales@gmail.com',
           
//     //         date: Timestamp.fromDate(new Date())
//     //     }
        
//     //     addDoc(collectionRef, objNuevaCollectionUser )
//     //         .then(response => {
//     //             console.log(response.id)
//     //         })

//     // }

//     // const updateDocFromCollection = () => {
//     //     const id = 'YDTPRPg7UFBpAcYxc1Sq'

//     //     const docRef = doc(firestoreDB, 'nuevaCollectionUser', id)

//     //     const fieldToUpdate = {
//     //         name: deleteField(),
//     //         nombre: 'brad Pitt',
//     //         phone: '98453546',
//     //         date: Timestamp.fromDate(new Date())
//     //     }

//     //     updateDoc(docRef, fieldToUpdate)
//     //         .then(response => {
//     //             console.log(response)

//     //         })
           
//     // }

//     // const createOrder = () => {
        
//     //     setLoading(true)

//     //     const objOrder = {
//     //         items: cart,
//     //         buyer: {
//     //             name: 'Sebastian Zurivia',
//     //             phone: '12345678',
//     //             email: 'szuviria@gmail.com'
//     //         },
//     //         total: sumaTotal(),
//     //         date: new Date()
//     //     }

//     //     const batch = writeBatch(firestoreDB)      
       
//     //     const collectionRefProds = collection(firestoreDB, 'products')     

//     //     const ids = cart.map(prod => prod.id)
        
//     //     const outOfStock = []

      
//     //     getDocs(query(collectionRefProds, where(documentId(), 'in', ids )))
//     //         .then(response => {
             
//     //             response.docs.forEach( doc => {
                
//     //                 const dataDoc = doc.data()
               
//     //                 const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                   
//     //                 if(dataDoc.stock >= prodQuantity) {
                    
//     //                     batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
//     //                 } else {
                     
//     //                     outOfStock.push({id:doc.id, ...dataDoc})
//     //                 }
//     //             })
//     //         }).then(() => {
              
//     //             if(outOfStock.length === 0 ) {
//     //                 const collectionRefProds = collection(firestoreDB, 'orders')
//     //                 return addDoc(collectionRefProds, objOrder)
//     //             } else {
                
//     //                 return Promise.reject({name: 'outOfStockError', products: outOfStock})
//     //             }
//     //         }).then (( { id }) => {
            
//     //             batch.commit()
//     //             console.log(`el id de la orden es ${id}`)
//     //         }).catch( error => {
//     //             console.log(error)
//     //         }).finally(() => {
//     //             setLoading(false)
//     //         })
//     // }

//     // if(loading) {
//     //     return <h1>Se esta generando su orden</h1>
//     // }

//     if (cart.length === 0) {
//         return (
//             <div>
//               <h1> Carrito Vacío</h1> <br></br> <h2>No has agregado ningún producto</h2> 
//               <Link to='/' className='botonVolver'><h3>Seguir comprando</h3></Link>
//             </div>
               
            
//         )
//     }

//     console.log(sumaTotal(cart))    

  
//     return (
//         <div>   
//         <h1>¡Gracias Por Tu Compra!</h1>
//         <div className='CartTicket'>    
//             <div className='header'>
//                 <div className='headerTitle'>Tu Carrito</div>
//                 <p>Por favor revisa tu lista de productos<br></br>Si estás de acuerdo con todo acepta para ir al último paso</p></div>        
//                 {
//                 cart.map (prod => <div key={prod.id}>                   
//                     <div className='ticketContent'>
//                         <strong>Nombre: </strong>{prod.name}<br></br>                        
//                         <strong>Precio: </strong>${prod.price}<br></br>
//                         <strong>Tamaño del Grupo Reservado:   </strong>{prod.quantity} personas<br></br>               
//                         <strong>Subtotal tour {prod.id}:  </strong>${prod.quantity * prod.price} <br></br>
//                         <button className='botonVolver' onClick={() => removeItem(prod.id)}>Quitar</button><br></br>                        
//                     </div>
//                     </div>)
//                 }            
        
//             <div className='total'>
//                 <h2>Total a Pagar:${sumaTotal()}</h2>
//                 <button className='botonAceptar' onClick={() => clearCart()}>VaciarCarrito</button>
//                 <Link to='/checkout' className='botonAceptar'>Aceptar / Checkout</Link>

//             </div>     
            
//             {/* Clase Firebase 2 hardcodeando metodo para agregar algo a la coleccion */}
//             {/* <div>
//             <button onClick={() => addDocToCollection()} className='botonUpdateColl' >Agregar Docus a Collection </button>
//             <button onClick={() => updateDocFromCollection()} className='botonUpdateColl' >Actualizar Documento </button>
//             <button onClick={() => createOrder()} className='botonUpdateColl' >Generar Orden</button>
//             </div> */}

//         </div>
//         </div>
//     )
// }

// export default Cart