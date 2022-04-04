import  { useState } from 'react';


const Counter = () => {

    // console.log(useState())

// spread operator para facilitar la modificacion de objetos complejos como los arrays u objetos
    // const [count, setCount] = useState({count: 0})

//lo mismo que lo anterior pero cambiando el nombre de ciertas variables para distinguirlo mejor
    const [initialState, changingState] = useState({title: 'titulo', count: 0})

    const decrement = () => {
        //llamo al count del array, este me trae el objeto del index0 de use state, ahora selecciono el count que corresponde a la segunda propiedad del objeto ubicado en el index0 del use state, y lo piso para modificarlo al picar el boton de decremento
        // setCount ({...count, count: count.count -1})
        //lo mismo que lo anterior pero cambiando el nombre de ciertas variables para distinguirlo mejor
        changingState ({...initialState, count: initialState.count -1})
    }
    
    const increment = () => {    
        
        //llamo al count del array, este me trae el objeto del index0 de use state, ahora selecciono el count que corresponde a la segunda propiedad del objeto ubicado en el index0 del use state, y lo piso para modificarlo al picar el boton de decremento
        // setCount({...count, count: count.count +1 })           
        //lo mismo que lo anterior pero cambiando el nombre de ciertas variables para distinguirlo mejor
        changingState({...initialState, count: initialState.count +1 })     
          
    }
    
    // console.log (count)
    console.log (initialState)
    return(

        <div>
            <button onClick={decrement}>-</button>
            <p>{initialState.count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter

