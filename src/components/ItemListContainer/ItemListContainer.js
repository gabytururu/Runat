import { useState, useEffect } from 'react'
import { getProducts } from '../asyncmock/asyncmock'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()
    

    useEffect (() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)}
            )
    }, [categoryId])

    //evento nativo del navegador
    const handleOnResize = (e) => {
        console.log(e)
        console.log(e.target.value) //se ocupa pa los formularios y estos donde estoy targeteando el valor especifico de algo, aunque aca sale undefined
        console.log('cambio el tamaño de ItemListContainer')
    }

    useEffect (() => {
        window.addEventListener('resize', handleOnResize)

        return(() => {
            window.removeEventListener('resize', handleOnResize)
            //ojo si este fuera evento sintetico sería un 'onResize'

        })
    })

    const handleClick = () => {
        console.log('Hice cLick al ItemlistContainer - intento tres a ver q pasa con referncia a funcioncallback')
    }

    return (
        //evento sintetico del navegador contiene al evento nativo de react pq agrega la capa de abstraccion - el div empezaría asi:
        //<div div onClick={(e) => console.log(e)}>

        //o si quiero empezar a utilizar esto en asociacion a funciones puedo entonces 1) o insertar directo el mesnaje que que quiero consologear y ahi el div empezaría asi:
        // <div onClick={() => console.log("hiceclick en el container")}>
        
        //o 2) generar una variable (afuera del return) que operara como funcion de callback para ejecutar el consolog deseado - ojo, el llamado acá YA NO LLEVA los parentesis sino solo el nombre o referencia como metodo de llamado:      
        <div onClick={handleClick}>
            <h1>{props.greeting}</h1>                       
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer