import {useState, useEffect} from 'react'
import { getItemDetail } from '../asyncmock/asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = (props) => {

    const [prodDetails, setItemsDetails] = useState([])


    useEffect (() => {
        getItemDetail().then(items => {
            setItemsDetails(items)}
            )
    }, [])


    return (
        <div>
            <h1>{props.detallesMsg}</h1>
            <ItemDetail prodDetails={prodDetails}/>
        </div>
    )
}

export default ItemDetailContainer