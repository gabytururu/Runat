import './ItemListContainer.css'

const ItemListContainer = (props) => {

    return (
    <div>
    <h1 className="itemslistcontainer">{props.greeting}</h1>
    <h3 className="text">{props.intro}</h3>
    </div>
    )
}


export default ItemListContainer