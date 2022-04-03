import  { useState } from 'react';

const Counter = () => {

    console.log(useState())

    /* const myState = useState(5) */
    const [count, setCount] = useState(5)


   /*  console.log(myState) */
    

    const decrement = () => {

       /*  myState[1](myState[0] - 1) */
        /* lo que se traduce como "change state, a lo que indique el valor inicial de estado menos -" */
        /* y ahora enotnces puedo ya sustituir los my state por los count y set count de la version desestructurada: */
        setCount(count -1)

    }

    const increment = () => {
        /* myState[1](myState[0] + 10) */
        if (count < 10) {

            setCount(count + 1)

        }

    }

    return(

        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter

// munuto 47.00