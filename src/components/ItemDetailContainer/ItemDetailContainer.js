import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { firestoreDB } from '../../services/firebase'
import { getDoc , doc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [prodDetails, setItemsDetails] = useState([])

    const {productId} = useParams()
  
    
    useEffect (() => {         
        getDoc(doc(firestoreDB, 'products', productId)).then(response => {
            console.log(response)        
            const product = { id: response.id, ...response.data()}
        setItemsDetails(product)
        })

        }, [productId])

    return (

        <div>         
            <ItemDetail {...prodDetails} />  
        </div>
    )
}

export default ItemDetailContainer