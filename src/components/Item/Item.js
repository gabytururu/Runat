import './Item.css'

const Item = ({name, img, price}) => {

    return(
        <section className='box'>
            <div className='card'>
                <picture>
                    <img src={img} alt={name} className='img'/>
                </picture>
                <div className='detallesProd'>
                    <h3>{name}</h3>
                    <p>${price}USD</p>
                    <button className="botonCompra">Comprar</button>
                </div>
            </div>
        </section>
    )
}

export default Item 



