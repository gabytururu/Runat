import {useState, useContext } from 'react'
import { addDoc , collection, getDocs, Timestamp, writeBatch, query, where, documentId } from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase/index'
import './Checkout.css'
import CartContext from '../Context/CartContext'
import { Link } from 'react-router-dom'



const Checkout = () => {    
    //ojo input cambio a tel no?
    // const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)

    const [tel, setTel] = useState('')
    const [nombre, setNombre] =useState('')
    const [email, setEmail ] = useState('')
    const [order, setOrder] = useState('')

    //correcta entrega final? 
    // const { clearCart } = useContext( CartContext )

    // repractica firebase2
    const { clearCart, sumaTotal, cart } = useContext( CartContext )
    
    // re practica de firebase2    
//     const objOrder = {
//        items: cart,
//        buyer: {
//            name: 'gabriela tururu',
//            tel: '1234567',
//            email: 'gtururu@xmail.com'
//        },
//        total: sumaTotal(),
//        date: new Date()
//    }

   const addDocToCollection = () => {
       const collectionRefTesting = collection( firestoreDB, 'TestNuevaCollection')
       
       const objNewBuyerTest = {
           nombre: nombre,
           tel: tel,
           email: email,
           products: cart,
           total: sumaTotal(),
           fecha: Timestamp.fromDate(new Date())
       }

       addDoc(collectionRefTesting, objNewBuyerTest) 
            .then(response => {
                console.log(response.id)
            })      
    }

    const createOrderTest = () => {
        
        setLoading(true)

        const objNewBuyerTest = {
            products: cart,
            comprador: {
                nombre: nombre,
                tel: tel,
                email: email,
            },
            total: sumaTotal(),
            fecha: Timestamp.fromDate(new Date())
        }

        const ids = cart.map(prod => prod.id)
        const batch = writeBatch(firestoreDB)
        const collectionRef = collection(firestoreDB, 'products')
        const outOfStock = []
        
        getDocs(query(collectionRef, where(documentId(),'in', ids)))
            .then(response=> {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id).quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({id: doc.id, ...dataDoc})
                    }
                })
            }).then (() => {
                    if(outOfStock.length === 0) {
                        const collectionRef = collection(firestoreDB, 'ordersNuevas')
                        return addDoc(collectionRef, objNewBuyerTest)
                    }else {
                        return Promise.reject({name: 'outOfStockError', products: outOfStock})
                    }
            // }).then(({id}) => {
            //         batch.commit()
            //         console.log(`tu orden es la ${id}`)
            }).then(({id}) => {
                    batch.commit()
                    console.log(`tu orden es la ${id}`)
                    let orderId = id
                    setOrder(orderId)
                    console.log(`tu orden es la ${orderId} link al state`)

            }).catch(error => {
                    console.log(error)
            }).finally(() => {
                    setLoading(false)
            })            
   }

   if (loading) {
       
    return(
           <h1>Orden en proceso...</h1>
       )
   }

    const handleSubmit = (e) => {        
        e.preventDefault()

        // console.log(input)
        console.log(nombre)
        console.log(tel)
        console.log(email)
       
    }

    const addDocCollectionCheckout = () => {
        const collectionRefCheckout = collection (firestoreDB, 'collectionCheckout')
        const objNewBuyerCheckout = {
            nombre: nombre,
            email: email,            
            tel: tel,            
            products: cart,
            total: sumaTotal(),
            fecha: Timestamp.fromDate(new Date())            
        }
        addDoc(collectionRefCheckout, objNewBuyerCheckout)
            .then(response => {
                console.log(response.id)
                let orderId = response.id
                setOrder(orderId)
                console.log(`tu orden de compra es ${orderId}`)
                
            })
    }

    
    return (
        <div>
            {/* <h1>Checkout Final</h1> */}
            <div className='formSection'>                
                <div className='formContainer'>   
                <div>                
                    {order===''?
                    <div>
                        <div className='formHeader'>
                            <h2>¡GRACIAS POR CONFIAR EN NOSOTR@S!</h2>
                        <div className='msjHeader'>                        
                            <p>Ingresa tus datos para crear tu # clave de reservación</p>
                        </div> 
                        </div>
                            <form className='form' onSubmit={handleSubmit} >

                            <div className='formInputs'>
                                    <label>Nombre:</label>
                                    <input type='text' onChange={(e) => {setNombre(e.target.value)}} />
                                </div>
                                <div className='formInputs'>
                                    <label>Teléfono:</label>
                                    <input type='tel' onChange={(e) => {setTel(e.target.value)}} />
                                </div>
                                <div className='formInputs'>
                                    <label>email:</label>
                                    <input type='email' onChange={(e) => {setEmail(e.target.value)}} />
                                </div>
                                <div>                
                                    {/* <button type='submit' className='botonCheckout' onClick={() => addDocCollectionCheckout()}>SUBMIT</button>               */}
                                    <button type='submit' className='botonCheckout' onClick={()=> createOrderTest()}>SUBMIT</button>              
                                </div>                    
                       
                                {/* <div className='formInputs'>
                                    <label>Nombre:</label>
                                    <input type='text' onChange={(e) => {setInput(e.target.value)}} />
                                </div>
                                <div className='formInputs'>
                                    <label>Teléfono:</label>
                                    <input type='tel' onChange={(e) => {setNombre(e.target.value)}} />
                                </div>
                                <div className='formInputs'>
                                    <label>email:</label>
                                    <input type='email' onChange={(e) => {setEmail(e.target.value)}} />
                                </div>
                                <div>                
                                    <button type='submit' className='botonCheckout' onClick={() => addDocCollectionCheckout()}>SUBMIT</button>              
                                </div>                                  */}
                        </form> 
                    </div>                        
                    :                   
                        <div>
                             <div className='formHeader'>
                            <h4 className='orderNumberMsj'>Tu Clave de Reservación es:</h4>
                            </div>
                            <p className='orderNumber'>#{order}</p>                            
                            <p className='text'>Te enviaremos toda la información al e-mail proporcionado</p>
                            <Link to='/' className='botonAceptar' onClick={() => clearCart()}>Aceptar / Checkout</Link>                             
                        </div>
                    }    
                    </div>                                    
                </div>
            </div>            
{/*                 
        firebase2 repractica
        <div>
            <button onClick={()=> createOrderTest()}className='botonAceptar'>TestOrder</button>
        </div> */}

        </div>
    )
}

export default Checkout


// <div>
// {order!==''&&<h4>Muchas Gracias - Su Orden es la Número# :  {order}</h4>}
// <p className='text'>Enviaremos su información al correo electrónico proporcionado</p>                            
// <Link to='/' className='botonAceptar' onClick={() => clearCart()}>Aceptar / Checkout</Link>                             

// </div>