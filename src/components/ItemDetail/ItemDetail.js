import './ItemDetail.css'
import { useState } from 'react'

const InputCount = ({onConfirm, stock, initial=0}) => {

    const [count, setCount] = useState(initial)

    const handleChange = ({target}) => {      
            setCount(target.value)
        
        //--version original, no le funciono a Sebas, nunca explicó por que--
        // if(target.value <= stock && target.value >= 0) {
        //     setCount(target.value)
        // }
    }
    
    return (
        <div>
            <input type="number" onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al Carrito</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm, stock, initial = 0 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        
            setCount (count + 1 )
        
        // mismo problema que en InputCount
        // if (count < stock) {
        //     setCount (count + 1 )
        // }
    }

    const decrement = () => {
        
        setCount(count - 1)
        
        // mismo problema que en InputCount
        // if (count > initial) {
        //     setCount(count - 1)
        // }
    }
    
    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )

}


const Details = ({prodDetails}) => {

    return(

        <section className="boxID">
            <div className="cardID">
                <div className="detallesID">
                    <h3>{prodDetails.name}</h3>
                    <p>{prodDetails.category}</p>
                    <p>{prodDetails.description}</p>
                </div>
                <picture>
                    <img src={prodDetails.img} alt={prodDetails.name} className="imgID"/>
                </picture>
                <div className="detallesID">
                    <p>{prodDetails.serviciosBrindados}</p>
                    <p>{prodDetails.precio}</p>
                    <p>{prodDetails.puntoPartida}</p>
                    <p>{prodDetails.fechas}</p>
                    <p>{prodDetails.reserva}</p>
                    <button className="botonCompraID">COMPRAR</button>                
                </div>   
                <footer className='ItemFooter'>
                    <InputCount />
                    <ButtonCount />
                </footer>      
            </div>
        </section>
    )
}

export default Details

