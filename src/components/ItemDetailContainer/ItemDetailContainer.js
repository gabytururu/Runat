import {useState, useEffect} from 'react'
import { getItem } from '../asyncmock/asyncmock'
import { itemDetail } from 

const ItemDetailContainer = (props) => {

    const [prodDetails, setItemsDetails] = useState([])


    useEffect (() => {
        getItemDetail().then(items => {
            setItemsDetails(items)}
            )
    }, [])


    return (
        <div></div>



    )

}