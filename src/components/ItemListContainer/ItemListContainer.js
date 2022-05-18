import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import { getDocs, collection , query , where, limit } from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase'


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [ title, setTitle ] = useState()
    
    const { categoryId } = useParams()    
  
    useEffect (() => {      
        const collectionRef = categoryId        
        ? query (collection(firestoreDB, 'products'), where('category', '==', categoryId),)       
        : collection(firestoreDB, 'products')

        getDocs(collectionRef).then(response => {           
            const products = response.docs.map( doc => {         
                return { id: doc.id, ...doc.data()}
            })          
                  
            setProducts(products)
            setLoading(false)
            categoryId?setTitle('Tours disponibles de ' + categoryId ):setTitle('Todas las Actividades a tu Alcance')                    
        })
    }, [categoryId]) 

    return (

        <div>
            <h1>{props.greeting}</h1> 
            <h1 className="titulo">{title}</h1>    
            {loading?
                <div className="loader">
                    <h1>Cargando Productos...</h1>
                    <img src="../images/loading.gif" alt="loading"/>
                </div>
            :
                (products.length === 0?
                    <h1>No hay productos en la categoría</h1>
                    :
                    <ItemList products={products} />
                )
            }         
        </div>
    )
}

export default ItemListContainer

