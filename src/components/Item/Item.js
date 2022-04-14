import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price}) => {

    return(
        <section className='box'>
            <div className='card'>
                <picture>
                    <img src={img} alt={name} className='img'/>
                </picture>
                <div className='detallesProd'>
                    <h3>{name}</h3>
                    <p>${price}USD</p>
                    <footer>
                    <Link to={`/detail/${id}`} className="botonCompra">Ver detalle</Link>
                    </footer>
                </div>
            </div>
        </section>
    )
}

export default Item 



