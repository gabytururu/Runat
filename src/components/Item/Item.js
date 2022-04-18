import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price}) => {

    //frenando la propagación a los elementos padres -- por ej como lo hace el corazoncito de favo de mercado libre. contenido en la card del articulo... lo mismo aca
    const handleClick=(e) => {
        e.stopPropagation()
        console.log("hice click al Item")
    }

    return(

        //el test SIN el stop propagation implicaría que este codigo arranca con:
        // <section className='box' onClick={() => console.log('hice click al Item')}>
        <section className='box' onClick={handleClick}>
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



