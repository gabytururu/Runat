import {useState, useEffect} from 'react'
import { getItemDetail } from '../asyncmock/asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = (props) => {

    const [prodDetails, setItemsDetails] = useState([])

    const {productId} = useParams()
    
    useEffect (() => {
        getItemDetail(productId).then(items => {
            setItemsDetails(items)}
            )
    }, [productId])


    return (
        <div>
            <h1>{props.detallesMsg}</h1>
            <ItemDetail prodDetails={prodDetails}/>            
        </div>
    )
}

export default ItemDetailContainer