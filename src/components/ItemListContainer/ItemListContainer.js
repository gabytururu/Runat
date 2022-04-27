import { useState, useEffect } from 'react'
// import { getProducts } from '../asyncmock/asyncmock'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import { getDocs, collection , query , where, limit } from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase'


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const [ title, setTitle ] = useState()
    const { categoryId } = useParams()    
  
    //version firebase:
    useEffect (() => {      
        const collectionRef = categoryId 
        ? query (collection(firestoreDB, 'products'), where('category', '==', categoryId), limit(1))
        : collection(firestoreDB, 'products')

     
        getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map( doc => {
         
                return { id: doc.id, ...doc.data()}
            })
            console.log(products)
            setProducts(products)
        })
    }, [categoryId])  
   
    useEffect (() => {
        setTimeout(() => {
            setTitle('Tours a tu alcance(2s delay)')
        }, 2000)
    })

    if (products.length === 0) {
        return <h1> No hay productos en esta categoría </h1>
    }

    return (

        <div>
            <h1>{props.greeting}</h1> 
            <h1>{title}</h1>                  
            <ItemList products={products}/>
        </div>

    )
}

export default ItemListContainer

