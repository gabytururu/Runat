import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, category}) => {

    // frenando la propagación a los elementos padres -- por ej como lo hace el corazoncito de favo de mercado libre. contenido en la card del articulo... lo mismo aca
    // const handleClick=(e) => {
    //     e.stopPropagation()
    //     console.log("hice click al Item")
    // }  


    return(     
        // <section className='box' onClick={handleClick}>
        <section className='box'>
            <div className='card'>
                <picture>
                    <img src={img} alt={name} className='img'/>
                </picture>
                <div className='detallesProd'>
                    <h3 className='tour'>{name}</h3>
                    <p className='category'>{category}</p>
                    <p className='precio'><strong>Precio:</strong> ${price} USD / por persona</p>
                    <footer>
                        <Link to={`/detail/${id}`} className="botonCompra">Ver detalles</Link>
                    </footer>
                </div>
            </div>
        </section>
    )
}

export default Item 



