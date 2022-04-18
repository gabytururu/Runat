import './ItemDetail.css'
import { useState } from 'react'
import ItemCount from '../ItemCount/itemCount'

// const InputCount = ({onConfirm, stock, initial=0}) => {

//     const [count, setCount] = useState(initial)

//     console.log(stock)

//     const handleChange = ({target}) => {  
//             if (target.value <= stock && target.value >=0) {
//                 setCount(target.value)
//             } 
//         }    
    
//     return (
//         <div>
//             <input type="number" onChange={handleChange} value={count}/>
//             <button onClick={() => onConfirm(count)}>Agregar al Carrito</button>
//         </div>
//     )
// }

// const ButtonCount = ({ onConfirm, stock, initial = 0 }) => {
//     const [count, setCount] = useState(initial)

//     const increment = () => {
        
//             setCount (count + 1 )
//             //PENDIENTE condicional para limite stock        

//     }

//     const decrement = () => {
        
//         setCount(count - 1)
//         //PENDIENTE condicional para limite stock     

//     }
    
//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={decrement}>-</button>
//             <button onClick={increment}>+</button>
//             <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
//         </div>
//     )
// }

// const Select = ({options = [], onSelect }) => {
    
//     return (
//         <select onChange = {(e) => onSelect(e.target.value)}>
//             {options.map(o => <option key={o.id} value={o.value}>{o.text}</option>)}            
//         </select>
//     )
// }

// const handleSelect = (text) => {
//     console.log(`El color seleccionado es ${text}`)
// }


const Details = ({prodDetails}) => {
    // const [typeInput, setTypeInput] = useState(true)
    // //nota se recomienda que el value no sea directo el valor del resultado sino un identificador del valor del resultado.. por ej acá podría ser A, 1, o codigo hex  or #5258 o  etc. de modo que sea un codigo único que te permita representar el valor final pero mediante una referencia de llamado
    // const options = [{id: 1, value: '00f', text: 'Azul'},{id: 2, value: 'f00', text: 'Rojo'}]

    // const handleAdd = () => {
    //     console.log('Agregar al carrito')
        
    // }

    // const Count = typeInput ? ButtonCount : InputCount

    return(

        <section className="boxID">
            {/* <header>
                <button onClick={() => setTypeInput(!typeInput)}>Cambiar Count</button>
            </header> */}
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
                    {/* <button className="botonCompraID">COMPRAR</button>         */}
                </div>   
                <footer className='ItemFooter'>                    
                    <ItemCount />
                    {/* <button onClick={() => onConfirm(count)}>Agregar al carrito</button>         */}
                    {/* <Select options={options} onSelect={handleSelect} />
                    <Count onConfirm={handleAdd} stock={prodDetails.stock} />   */}
                               
                </footer>      
            </div>
        </section>
    )
}

export default Details




// ---------- GUARDANDO-COMMENTANDO VERSION COMPLETA Clase8 como referencia en la reconstrucción para Desafío8-------------------------//
// import './ItemDetail.css'
// import { useState } from 'react'

// const InputCount = ({onConfirm, stock, initial=0}) => {

//     const [count, setCount] = useState(initial)

//     console.log(stock)

//     const handleChange = ({target}) => {  
//             if (target.value <= stock && target.value >=0) {
//                 setCount(target.value)
//             } 
//         }    

//                     //--version original, no le funciono a Sebas, nunca explicó por que al inicio no funcionaba pero al final lo inserte y si me funcionó--
//             // if(target.value <= stock && target.value >= 0) {
//             //     setCount(target.value)
//             // }

//             //sin embargo, el al final usó una sintaxis distinta con el mismo objetivo ytmb le funcionó (revisar yo despues las distinciones)
//             // const handleChange = (e) => {
//             //      if(e.target.value <= stock) {
//             //           setCount(e.target.value)
//             //      }
//             //  }
    
//     return (
//         <div>
//             <input type="number" onChange={handleChange} value={count}/>
//             <button onClick={() => onConfirm(count)}>Agregar al Carrito</button>
//         </div>
//     )
// }

// const ButtonCount = ({ onConfirm, stock, initial = 0 }) => {
//     const [count, setCount] = useState(initial)

//     const increment = () => {
        
//             setCount (count + 1 )
        
//         // mismo problema que en InputCount
//         // if (count < stock) {
//         //     setCount (count + 1 )
//         // }
//         //queda pendiente volver a implementar la validacion condicional asociada a stock
//     }

//     const decrement = () => {
        
//         setCount(count - 1)
        
//         // mismo problema que en InputCount
//         // if (count > initial) {
//         //     setCount(count - 1)
//         // }
//     }
    
//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={decrement}>-</button>
//             <button onClick={increment}>+</button>
//             <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
//         </div>
//     )

// }

// const Select = ({options = [], onSelect }) => {
    
//     return (
//         <select onChange = {(e) => onSelect(e.target.value)}>
//             {options.map(o => <option key={o.id} value={o.value}>{o.text}</option>)}            
//         </select>
//     )
// }

// const handleSelect = (text) => {
//     console.log(`El color seleccionado es ${text}`)
// }


// const Details = ({prodDetails}) => {
//     const [typeInput, setTypeInput] = useState(true)
//     //nota se recomienda que el value no sea directo el valor del resultado sino un identificador del valor del resultado.. por ej acá podría ser A, 1, o codigo hex  or #5258 o  etc. de modo que sea un codigo único que te permita representar el valor final pero mediante una referencia de llamado
//     const options = [{id: 1, value: '00f', text: 'Azul'},{id: 2, value: 'f00', text: 'Rojo'}]

//     const handleAdd = () => {
//         console.log('Agregar al carrito')
        
//     }

//     const Count = typeInput ? ButtonCount : InputCount

//     return(

//         <section className="boxID">
//             <header>
//                 <button onClick={() => setTypeInput(!typeInput)}>Cambiar Count</button>
//             </header>
//             <div className="cardID">
//                 <div className="detallesID">
//                     <h3>{prodDetails.name}</h3>
//                     <p>{prodDetails.category}</p>
//                     <p>{prodDetails.description}</p>
//                 </div>
//                 <picture>
//                     <img src={prodDetails.img} alt={prodDetails.name} className="imgID"/>
//                 </picture>
//                 <div className="detallesID">
//                     <p>{prodDetails.serviciosBrindados}</p>
//                     <p>{prodDetails.precio}</p>
//                     <p>{prodDetails.puntoPartida}</p>
//                     <p>{prodDetails.fechas}</p>
//                     <p>{prodDetails.reserva}</p>
//                     <button className="botonCompraID">COMPRAR</button>                
//                 </div>   
//                 <footer className='ItemFooter'>
//                     <Select options={options} onSelect={handleSelect} />
//                     <Count onConfirm={handleAdd} stock={prodDetails.stock} />  
                               
//                 </footer>      
//             </div>
//         </section>
//     )
// }

// export default Details

