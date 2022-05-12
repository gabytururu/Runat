import { useState } from 'react'
import './ItemCount.css'


const ItemCount = (props) => {    

    const [itemCount, setItemCount] = useState(props.init)   

    const addProd = () => {       
            if (itemCount <= props.stock) {     
            setItemCount(itemCount + 1)           
            } else {
                console.log ('no hay suficiente inventario')
            }
        }

    const removeProd = () => {      
            if (itemCount > props.init) {            
            setItemCount (itemCount - 1)
            } else {
                console.log('el inventario  no puede ser menor a cero')
            }
        }
        
       
    return (            
        <div className="containerGral">
                {/* <div className = "qtyContainer"> */}
                <div>
                {/* <p className = "headerTitle">{props.header}</p> */}
                    <p className ="numPersonas">{props.header}</p>
                    <p className ="qtyTotal">{itemCount}</p>
                    <div className="buttonsCountContainer">
                        <button className = "buttonChange" onClick={removeProd}><strong>(-)</strong><br></br>Reducir</button>
                        <button className = "buttonChange" onClick={addProd}><strong>(+)</strong><br></br>Aumentar</button>
                    </div>
                <div className="acceptContainer">
                    <button className="buttonAccept" onClick={() => props.onAdd(itemCount)}>Aceptar</button>
                </div>
            </div>  
        </div>         
    )
}

export default ItemCount