import { useState, useEffect } from 'react'
import { getProducts } from '../asyncmock/asyncmock'


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    useEffect (() => {
        getProducts().then(prods => {
            setProducts(prods)}
            )
    }, [])

    return (

        <div>
            <h1>{props.greeting}</h1>
            <ul>
                {products.map(product => <li key={product.id}>{product.name}</li>)}
            </ul>
        </div>
    )
}

export default ItemListContainer