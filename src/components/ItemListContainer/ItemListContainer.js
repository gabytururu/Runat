// -- Clase 4 -------------------------------------
//se conecta con app.js


const ItemListContainer = (props) => {
    console.log(props)
    console.log(props.greeting)


    return (

        <div>
        <h1>{props.greeting}</h1>
        {props.children.map( c => <div>{c}</div>)}
        </div>
    )
}

export default ItemListContainer