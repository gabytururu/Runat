import './ItemDetail.css'



const Details = ({prodDetails}) => {

    return(

        <section className="boxID">
            <div className="cardID">
                <div className="detallesID">
                    <h3>{prodDetails.name}</h3>
                    <p>{prodDetails.category}</p>
                    <p>{prodDetails.description}</p>
                </div>
                <picture>
                    <img src={prodDetails.img} alt={prodDetails.name} className="imgID"/>
                </picture>
                <div className="detallesID">
                    <p>{prodDetails.serviciosBrindados}</p>
                    <p>{prodDetails.precio}</p>
                    <p>{prodDetails.puntoPartida}</p>
                    <p>{prodDetails.fechas}</p>
                    <p>{prodDetails.reserva}</p>
                    <button className="botonCompraID">COMPRAR</button>
                </div>         
            </div>
        </section>
    )
}

export default Details

