import './ItemDetail.css'
import ItemDetailCard from '../ItemDetailCard/ItemDetailCard'


const Details = ({prodDetails}) => {

    return(

        <div>         
            {prodDetails.filter(prod => <ItemDetailCard {...prod.id ===2}/>)}
        </div>
    )
}

export default Details



  /*  prodDetails.filter((prod => prod.id===2) <ItemDetailCard/>) */
 /*  prodDetails.filter(prod => <ItemDetailCard {prod.id ===2}/>) */
