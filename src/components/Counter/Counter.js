import  { useState, useEffect } from 'react';


const Counter = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('se acaba de montar el componente, yo me espere por el useEffect post mount') 
        setTimeout (() => {
            setCount(10)
        },3000)    
        
        return (() => {
            console.log("este se ejecuta antes de desmontar el componente")
        })
        
    }, [])

    useEffect(() => {
        setTimeout(() => {
            console.log('segundo timeOut con 5 seg de delay y sin alteraciones del estado')
        }, 5000)
    }, [])

    useEffect (() => {
        console.log('cambió el contador')
    }, [count])

    const decrement = () => {
        setCount(count - 1)
    }
    
    const increment = () => {    
        setCount(count + 1)               
    }

    console.log (count)
    console.log ('se va a montar el componente, esto esta en el cuerpo del componente')

    return(

        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter



