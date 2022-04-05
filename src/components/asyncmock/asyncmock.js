import './asyncmock.css'

const products = [
    {id: 1, name: 'TourA- Nevado de Toluca', price:100, category: 'biking', stock:25, description: 'Tour de 2 días al Nevado de Toluca todo incluido', img: '../images/nevado2.jpg'},
    {id: 2, name: 'TourB- Peñoles Chihuahua', price:80, category:  'escalada', stock:10, description: 'Tour de 2 días a Peñoles Chihuahua', img: '../images/peñoles.jpeg'},
    {id: 3, name: 'TourC Sierra Gorda S.L.P', price:120, category: 'senderismo', stock:15, description: 'Tour de 2 días a Sierra Gorda en S.L.P todo incluido', img: '../images/sierraGorda.jpg'}
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

