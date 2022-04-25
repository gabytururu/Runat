import { useState, useEffect } from 'react'
import { getProducts } from '../asyncmock/asyncmock'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const [ title, setTitle ] = useState()
    const { categoryId } = useParams()
    

    useEffect (() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)}
            )
    }, [categoryId])  
   
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

