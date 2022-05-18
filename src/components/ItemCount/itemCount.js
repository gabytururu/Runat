import { useState } from 'react'
import './ItemCount.css'
import { Link } from 'react-router-dom'


const ItemCount = (props) => {    

    const [itemCount, setItemCount] = useState(props.init)   

    const addProd = () => {       
            if (itemCount < props.stock) {     
            setItemCount(itemCount + 1)           
            } else {
                console.log ('El max de stock ha sido alcanzado - no hay más inventario')               
            }
        }

    const removeProd = () => {      
            if (itemCount > props.init) {            
            setItemCount (itemCount - 1)
            } else {
                console.log('el min de reservaciones no puede ser menor a uno')                
            }
        }
        
       
    return (            
        <div className="containerGral">             
            {props.stock > 0 ?
                <div>                       
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
            :            
                <div className ="outOfStock">   
                    <div>
                        <p className="sorry">¡Lo Sentimos Mucho!</p>
                    </div>          
                    <img src= "../images/sad.png" className="sadFace" alt="carita triste"/>
                    <p>Ya no hay espacios disponibles <br></br>en este Tour</p>
                    <Link to='/' className="buttonAccept" >Ver otros tours</Link>
                </div>                        
            }
        </div>         
    )
}

export default ItemCount