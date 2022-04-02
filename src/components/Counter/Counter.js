import  { useState } from 'react';

const Counter = () => {

    console.log(useState())

    const myState = useState(5)
    

    console.log(myState)
    

    const decrement = () => {

        myState[1](myState[0] - 1)
        /* lo que se traduce como "change state, a lo que indique el valor inicial de estado menos -" */
    }

    const increment = () => {
        myState[1](myState[0] + 10)
    }

    return(

        <div>
            <button onClick={decrement}>-</button>
            <p>{myState[0]}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter