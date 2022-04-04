import { useEffect, useState } from 'react'
import './ItemCount.css'


const ItemCount = (props) => {

    

    const [itemCount, changeItemCount] = useState(props.init)   

    const addProd = () => {       
            if (itemCount < props.stock)
            changeItemCount(itemCount + 1)
        }

    const removeProd = () => {      
        if (itemCount > props.init){
            changeItemCount (itemCount - 1)
            }
        }
        
       
    return (            
        <div className="containerGral">
                <div className = "qtyContainer">
                <p className = "headerTitle">{props.header}</p>
                <p className = "qtyTotal">{itemCount}</p>
                <button className = "button" onClick={removeProd}>Quitar Productos (-)</button>
                <button className = "button" onClick={addProd}>Agregar Productos (+)</button>
                <button className="botonComprar">Finalizar Compra </button>
            </div>  
        </div>         
    )
}

export default ItemCount