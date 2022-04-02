

const Counter = () => {

    

    let count = 0 

    const decrement = () => {
        count -= 1
        console.log('decrement')
        console.log(count)
        //o dicho también count = count-1
    }
    const increment = () => {
        count += 1
        console.log('increment')
        console.log(count)
        //o dicho también count = count+1
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