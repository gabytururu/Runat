import { useState, useEffect } from 'react'
import { getProducts } from '../asyncmock/asyncmock'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
//importo de la libraria de firebase lo que me permite traer los docus y la de collections tmb
//  luego me traigo mis funciones necesarias para el filtrado -query y where
//y tmb aca mismo es donde puedo traerme la funcion limint si quiero para limitar resultados
import { getDocs, collection , query , where, limit } from 'firebase/firestore'
//luego acá importo mi collection especifica y base especifica que cree con products
import { firestoreDB } from '../../services/firebase'


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const [ title, setTitle ] = useState()
    const { categoryId } = useParams()
    
    //sustituyendo asyncmock por firebase
    // useEffect (() => {
    //     getProducts(categoryId).then(prods => {
    //         setProducts(prods)}
    //         )
    // }, [categoryId])  

    //sustitución firebase:
    useEffect (() => {
        // esta funcion ternaria me permitirá sustituir el getDocs collection, porque será justo un obtener esos docs, pero haciendo previamente un operador ternario para detectar si hay query que exija filtrado o no.

        //query tiene 2 parametros, una es la referencia directita de collection (en este ejemplo seria collection(firestoreDB, 'products) como primer parametro) y el segundo parametro es el filtro que uno aplica el cual se hace con la funcion WHERE

        //a su vez where tiene 3 parametros : el nombre del campo (que en este caso es category pq esa es la base de mi filtrado), cómo lo voy a comparar (en este caso asegurando que sea igual) y contra qué lo voa comparar (en este caso con mi param que estoy dando para la comparacion que es mi category id)

        //si deseo usar limit, acá es donde la ocupo pues forma parte de mi tercer parametro a query de colelctionRef

        const collectionRef = categoryId 
        ? query (collection(firestoreDB, 'products'), where('category', '==', categoryId), limit(1))
        : collection(firestoreDB, 'products')

        //queda sustituido ahora por collectionRef!
        // getDocs(collection(firestoreDB, 'products')).then(response => {
        getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map( doc => {
                // return { id: doc.id, restoCampos: doc.data()}
                //lo anterior, para que yo pueda integrar el id con el resto de los campos lo tengo q esparcir para que no se trate de dos objetos donde los detalles del elemento restoCampos queden en un orden distinto a id... para lograr eso uso spreadoperator
                return { id: doc.id, ...doc.data()}
            })
            console.log(products)
            setProducts(products)
        })
    }, [categoryId])  
   
    useEffect (() => {
        setTimeout(() => {
            setTitle('Tours a tu alcance(2s delay)')
        }, 2000)
    })

    if (products.length === 0) {
        return <h1> No hay productos en esta categoría </h1>
    }

    return (

        <div>
            <h1>{props.greeting}</h1> 
            <h1>{title}</h1>                  
            <ItemList products={products}/>
        </div>

    )
}

export default ItemListContainer

