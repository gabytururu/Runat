import {useState, useEffect} from 'react'
import { getItemDetail } from '../asyncmock/asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
//toca agregar todas las importaciones para el uso de firebase igual que lo hicimos en itemlistcontainer
import { firestoreDB } from '../../services/firebase'
//ojo , acá en lugar de traerme una coleccion completa quiero traerme solo un documento individual completo, por lo que la funcion que importo es getDoc EN SINGULAR en lugar de la q use en itemlist container que se trataba de getDocs en plurarl por tratarse de una coleccion de docus .. 
//en el mismo sentido en lugar de imoportar un collection, importo un doc unicamente
import { getDoc , doc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [prodDetails, setItemsDetails] = useState([])

    const {productId} = useParams()

    //al igual que en itemListContainer, ahora me toca sustituir mis llamados y filtros de asyncmoc, por llamados y filtros de firebase y firebase 
    
    // useEffect (() => {
    //     getItemDetail(productId).then(items => {
    //         setItemsDetails(items)}
    //         )
    // }, [productId])

    //version firebase
    useEffect (() => {        
    // ahora inserto la funcion que me permite traer el documento en cuestion a partir del parametro product id
    getDoc(doc(firestoreDB, 'products', productId)).then(response => {
        console.log(response)
        //genero la funcion para poder transformar la info que me da firestore con el objeto de la consola, y volverlo lo que a mi me sirve
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