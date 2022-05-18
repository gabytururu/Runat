import {useState, useContext } from 'react'
import { addDoc , collection, getDocs, Timestamp, writeBatch, query, where, documentId } from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase/index'
import './Checkout.css'
import CartContext from '../Context/CartContext'
import { Link } from 'react-router-dom'

const Checkout = () => {    
   
    const [loading, setLoading] = useState(false)
    const [tel, setTel] = useState('')
    const [nombre, setNombre] =useState('')
    const [email, setEmail ] = useState('')
    const [order, setOrder] = useState('')
    
    const { clearCart, sumaTotal, cart } = useContext( CartContext )
  
    const crearOrden = () => {
        
        setLoading(true)

        const ticketCompra = {
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
                        const collectionRef = collection(firestoreDB, 'ordenesCompraRecibidas')
                        return addDoc(collectionRef, ticketCompra)
                    }else {
                        return Promise.reject({name: 'outOfStockError', products: outOfStock})
                    }
            
            }).then(({id}) => {
                    batch.commit()                    
                    let orderId = id
                    setOrder(orderId)                  

            }).catch(error => {
                    console.log(error)
            }).finally(() => {
                    setLoading(false)
            })            
   }

   if (loading) {
       
    return(
        <div>
           <h1>Estamos Procesando Tu Orden...</h1>
           <img src="../images/sync.png" className="marca" alt="logo Runat"/>   
        </div>
       )
   }

    const handleSubmit = (e) => {        
        e.preventDefault()       
    }
 
    return (
        <div>            
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
                                    <button type='submit' className='botonCheckout' onClick={()=> crearOrden()}>SUBMIT</button>              
                                </div>                   
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
        </div>
    )
}

export default Checkout
