import {useState, useEffect} from 'react'
import { getItemDetail } from '../asyncmock/asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

//aca le atine a la sintaxis pero no se por que... osea pq cart y set cart pueden formar parte de un mismo objeto...
// version previa : const ItemDetailContainer = (props, {setCart, cart}) => {  // renderizaba correctamente pero enviaba error al intentar consoleLog del cart - probé borrando el parámetro props ya que no se ocupa realmente en esta version pq nunca paso el parametro de detallesMsg -- y al hacerlo se solucionó el problema y se pudo hacer el consolelog correcto del objeto del cart.. cada que agregaba mas el cart crece. 

//* elimino set cart y cart de aca y del return para el ejemplo de useContext. no hace sentido combinar ambas tecnicas (pasar por context y pasar por props tmb) */
// const ItemDetailContainer = ({setCart, cart}) => {


const ItemDetailContainer = () => {

    const [prodDetails, setItemsDetails] = useState([])

    const {productId} = useParams()
    
    useEffect (() => {
        getItemDetail(productId).then(items => {
            setItemsDetails(items)}
            )
    }, [productId])

        // NOTAS
            //version nueva  para enviar los props esparcidos(SPREAD) -- DUDA ¿PORQUÉ NO LO NOMBRO YA??? ALGO COMO prodDetails={...prodDetails}, Es pq son varias variables?
            //version previa sin desestructurar era:<ItemDetail prodDetails={prodDetails} />  
    
    return (

        <div>
            {/* <h1>{props.detallesMsg}</h1>  */}
            <ItemDetail {...prodDetails} />  

            {/* elimino set cart y cart de aca para el ejemplo de useContext. no hace sentido combinar ambas tecnicas (pasar por context y pasar por props tmb) */}
            {/* <ItemDetail {...prodDetails} setCart={setCart} cart={cart}/>    */}

        </div>
    )
}

export default ItemDetailContainer