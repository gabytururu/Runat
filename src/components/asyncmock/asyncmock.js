import './asyncmock.css'

const products = [
    {id: 1, name: 'TourA- Nevado de Toluca', price:100, category: 'biking', stock:25, description: 'Tour de 2 días al Nevado de Toluca todo incluido', img: '../images/nevado2.jpg', serviciosBrindados: 'traslado redondo, alimentos, bicicleta y equipo de seguridad requerido por persona', puntoPartida: 'Zócalo CDMX', reserva: 'Máximo 3 días previos a la fecha de salida', fechas: 'primer y tercer viernes de cada mes'},
    {id: 2, name: 'TourB- Peñoles Chihuahua', price:80, category:  'escalada', stock:10, description: 'Tour de 2 días a Peñoles Chihuahua', img: '../images/peñoles.jpeg', serviciosBrindados: 'equipo de escalada, traslado al sitio y zona de escalada, alimentos, equipo de camping', puntoPartida: 'Centro Histórico de Chihuahua', reserva: '1 semana de antelación', fechas: 'último fin de semana de cada mes'},
    {id: 3, name: 'TourC Sierra Gorda S.L.P', price:120, category: 'senderismo', stock:15, description: 'Tour de 2 días a Sierra Gorda en S.L.P todo incluido', img: '../images/sierraGorda.jpg', serviciosBrindados: 'traslado redondo a la zona de senderismo, equipo de camping, guía de sendero, bastones, aguay alimentos por persona', puntoPartida: 'centro Histórico de Querétaro', reserva: '3 días de antelación', fechas: 'primer sábado de cada mes'}
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}


export const getItemDetail = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 4000)
    })
}


