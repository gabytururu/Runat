import { useState, useEffect } from 'react'
import { getProducts } from '../asyncmock/asyncmock'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    //creando estado del titulo
    const [ title, setTitle ] = useState()
    const { categoryId } = useParams()
    

    useEffect (() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)}
            )
    }, [categoryId])  
    
    // creando el efecto para que aparezca el titulo a los 2 segundos para ejemplificar el re-rendering y demostrar la importancia del memo para evitar re-render de todos los hijos (ej titulo + ItemList), y en cambio, simplemente re-renderizar lo que debe renderizarse (que en este caso es title) -- esta es una técnica de optimización importante
    // ir a ItemList para ver el uso de memo para evitar ese re rendering
    // nota importante, la importación y consumo del memo tiene que utilizarse en el componente que NO DEBERÍA CAMBIAR por un CAMBIO DE ESTADO --- EN este caso es el componente de ItemList
    useEffect (() => {
        setTimeout(() => {
            setTitle('Este título se agrega a los 2 segundos')
        }, 2000)
    })

    return (

        <div>
            <h1>{props.greeting}</h1> 
            <h1>{title}</h1>                  
            <ItemList products={products}/>
        </div>

    )
}

export default ItemListContainer

