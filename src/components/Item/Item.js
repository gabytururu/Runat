import './Item.css'
import { Link } from 'react-router-dom'
//elimino estas pal ejemplo de custom context
// import { useContext } from 'react'
// import { Context } from '../../App'

const Item = ({id, name, img, price}) => {

    //frenando la propagación a los elementos padres -- por ej como lo hace el corazoncito de favo de mercado libre. contenido en la card del articulo... lo mismo aca
    const handleClick=(e) => {
        e.stopPropagation()
        console.log("hice click al Item")
    }

    //NOTAS:
        //siempre dentro de la funcion useContext, como parametro tengo que pasar la referenciade a qué context estoy intentando acceder.. y esa referencia la tomo de la variable declarada/creada y exportada en app (const Context = createContext()) e importada acá mismo al inicio (la cual importe ademas de importar la funcion useContext -- es decir siempre debo mantener ambas en mis importaciones )

    //elimino estas para el ejemplo de custom context
        // const value = useContext(Context)
        // console.log(value)


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



