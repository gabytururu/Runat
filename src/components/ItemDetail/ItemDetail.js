import './ItemDetail.css'

const Details = ({prodDetails}) => {

    return(

        <section className="boxID">
            <div className="cardID">
                <div className="detallesID">
                    <h3>{prodDetails[0].name}</h3>
                    <p>{prodDetails[0].category}</p>
                    <p>{prodDetails[0].description}</p>
                </div>
                <picture>
                    <img src={prodDetails[0].img} alt={prodDetails[0].name} className="imgID"/>
                </picture>
                <div className="detallesID">
                    <p>{prodDetails[0].serviciosBrindados}</p>
                    <p>{prodDetails[0].precio}</p>
                    <p>{prodDetails[0].puntoPartida}</p>
                    <p>{prodDetails[0].fechas}</p>
                    <p>{prodDetails[0].reserva}</p>
                    <button className="botonCompraID">COMPRAR</button>
                </div>         
            </div>
        </section>

    )

}

export default Details