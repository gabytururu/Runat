import './ItemListContainer.css'
import { useState, useEffect } from 'react'
// import { getProducts } from '../asyncmock/asyncmock'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import { getDocs, collection , query , where, limit } from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase'


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)
    
    const [ title, setTitle ] = useState()
    
  

    const { categoryId } = useParams()    
  
    //version firebase:
    useEffect (() => {      
        const collectionRef = categoryId 
        //re haciendola para que no tenga limit en la categoria porque si no no me salen todos sino solo 2
        ? query (collection(firestoreDB, 'products'), where('category', '==', categoryId),)
        // ? query (collection(firestoreDB, 'products'), where('category', '==', categoryId), limit(2))
        : collection(firestoreDB, 'products')

     
        getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map( doc => {
         
                return { id: doc.id, ...doc.data()}
            })
            console.log(products)
            setProducts(products)
            setLoading(false)
            categoryId?setTitle('Tours disponibles de ' + categoryId ):setTitle('Todas las Actividades a tu Alcance')                    
        })
    }, [categoryId])  
   
    // useEffect (() => {
    //     setTimeout(() => {
    //         setTitle('Tours a tu alcance(2s delay)')
    //     }, 3000)
    // })

    // if (products.length === 0) {
    //     return <h1> No hay productos en esta categoría </h1>
    // }

    return (

        <div>
            <h1>{props.greeting}</h1> 
            <h1 className="titulo">{title}</h1>    
            {
            loading?
            <div className="loader">
            <h1>Cargando Productos...</h1>
            <img src="../images/loading.gif" alt="logo Runat"/>
            </div>
            :
            (
            products.length === 0?
                <h1>No hay productos en la categoría</h1>
                :
                <ItemList products={products} />
            )
            }

            {/* <h1>{props.greeting}</h1> 
            <h1>{title}</h1>                  
            <ItemList products={products}/> */}
        </div>

    )
}

export default ItemListContainer

