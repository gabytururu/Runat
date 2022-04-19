import {useState, useEffect} from 'react'
import { getItemDetail } from '../asyncmock/asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = ({cart, setCart}) => {

    const [prodDetails, setItemsDetails] = useState([])

    const {productId} = useParams()
    
    useEffect (() => {
        getItemDetail(productId).then(items => {
            setItemsDetails(items)}
            )
    }, [productId])

   
    return (

        <div>
    

            <ItemDetail {...prodDetails} setCart={setCart} cart={cart}/>   

        </div>
    )
}

export default ItemDetailContainer