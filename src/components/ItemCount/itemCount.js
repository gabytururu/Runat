import { useEffect, useState } from 'react'
import './ItemCount.css'


const ItemCount = (props) => {    

    const [itemCount, setItemCount] = useState(props.init)   

    const addProd = () => {       
            if (itemCount <= props.stock) {
            // console.log(props.stock)
            // console.log(props.init)
            setItemCount(itemCount + 1)
            // console.log(itemCount)
            } else {
                console.log ('no hay suficiente inventario')
            }
        }

    const removeProd = () => {      
            if (itemCount > props.init) {
            // console.log(props.stock)
            // console.log(props.init)
            // console.log(itemCount)
            setItemCount (itemCount - 1)
            } else {
                console.log('el inventario  no puede ser menor a cero')
            }
        }
        
       
    return (            
        <div className="containerGral">
                <div className = "qtyContainer">
                <p className = "headerTitle">{props.header}</p>
                <p className = "qtyTotal">{itemCount}</p>
                <div className="countButtonsContainer">
                    <button className = "button" onClick={removeProd}>Reducir Personas (-)</button>
                    <button className = "button" onClick={addProd}>Aumentar Personas (+)</button>
                </div>
                <button className="botonComprar" onClick={() => props.onAdd(itemCount)}>Finalizar Reservación </button>
            </div>  
        </div>         
    )
}

export default ItemCount