import {useState, useContext } from 'react'
import { addDoc , collection } from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase/index'
import './Checkout.css'
import CartContext from '../Context/CartContext'
import { Link } from 'react-router-dom'



const Checkout = () => {    
    
    const [input, setInput] = useState('')
    const [nombre, setNombre] =useState('')
    const [email, setEmail ] = useState('')
    const [order, setOrder] = useState('')

    const { clearCart } = useContext( CartContext )
    
    const handleSubmit = (e) => {        
        e.preventDefault()

        console.log(input)
        console.log(nombre)
        console.log(email)
       
    }

    const addDocCollectionCheckout = () => {
        const collectionRefCheckout = collection (firestoreDB, 'collectionCheckout')
        const objNewBuyerCheckout = {
            nombre: nombre,
            email: email,
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
            <h1>Checkout Final</h1>
            <div className='formSection'>                
                <div className='formContainer'>
                    <div className='formHeader'>
                        <h2>¡Gracias por su compra!</h2>
                        <p>Por favor ingrese los datos para poder generar su # de orden y enviar su factura</p>
                    </div>
                    <div>
                    {order===''? 
                        <form className='form' onSubmit={handleSubmit} >
                            <div className='formInputs'>
                                <label>UserId:</label>
                                <input type='text' onChange={(e) => {setInput(e.target.value)}} />
                            </div>
                            <div className='formInputs'>
                                <label>Nombre:</label>
                                <input type='text' onChange={(e) => {setNombre(e.target.value)}} />
                            </div>
                            <div className='formInputs'>
                                <label>email:</label>
                                <input type='email' onChange={(e) => {setEmail(e.target.value)}} />
                            </div>
                            <div>                
                                <button type='submit' className='botonCheckout' onClick={() => addDocCollectionCheckout()}>SUBMIT</button>              
                            </div> 
                              
                        </form>                         
                    :                   
                        <div>
                            <h4>Muchas Gracias - Su Orden es la Número# : {order}</h4>
                            <p className='text'>Enviaremos su información al correo electrónico proporcionado</p>
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


// <div>
// {order!==''&&<h4>Muchas Gracias - Su Orden es la Número# :  {order}</h4>}
// <p className='text'>Enviaremos su información al correo electrónico proporcionado</p>                            
// <Link to='/' className='botonAceptar' onClick={() => clearCart()}>Aceptar / Checkout</Link>                             

// </div>