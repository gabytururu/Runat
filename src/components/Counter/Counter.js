import  { useState, useEffect } from 'react';


const Counter = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('se acaba de montar el componente, yo me espere por el useEffect post mount')        
    }, [])

    const decrement = () => {
        setCount(count - 1)
    }
    
    const increment = () => {    
        setCount(count + 1)               
    }

    console.log (count)
    console.log ('se va a montar el componente')

    return(

        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter



