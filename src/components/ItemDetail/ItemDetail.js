import './ItemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/itemCount'

const Details = ({prodDetails}) => {

    const [quantity, setQuantity] = useState(0)

    const finalizarCompra =  (qtyCounter) => {
        setQuantity(qtyCounter) 
    }

    return(

        <section className="boxID">            
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
                </div>   
                <footer className='ItemFooter'>                    
                    {quantity > 0 ? <Link to = '/cart' className='linkCarrito'>Ir al Carrito</Link> : <ItemCount header={'¿Para cuántas personas deseas reservar?:'} stock={prodDetails.stock} init={0} onAdd={finalizarCompra}/> }                               
                </footer>      
            </div>
        </section>
    )
}

export default Details


