import {useState} from 'react'
import { addDoc , collection } from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase/index'
import './Checkout.css'


const Checkout = () => {
    
    //react me pide vincular los eventos con react, usando los estados, es apartir de esto, que react entiende que algo sucedio y que eso tiene impacto en el ciclo de vida 
    const [input, setInput] = useState('')
    const [nombre, setNombre] =useState('')
    const [email, setEmail ] = useState('')
    const [order, setOrder] = useState('')
    
    const handleSubmit = (e) => {        
        e.preventDefault()

        console.log(input)
        console.log(nombre)
        console.log(email)
        // console.log(order)
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

    console.log(order)

    return (
        <div>
            <div className='formSection'>
                <div className='formContainer'>
                    <div className='formHeader'>
                        <h2>¡Gracias por su compra!</h2>
                    </div>
                    <div>
                        <form className='form' onSubmit={handleSubmit} >
                            <div className='formInputs'>
                                <label>test Dato Input:</label>
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
                    </div>                
                </div>
            </div>
            <div>
                <h1>tu orden de compra es{order}</h1>
            </div>

            
        </div>        
        
    )
}

export default Checkout