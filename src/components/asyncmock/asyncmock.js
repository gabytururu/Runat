// import './asyncmock.css'

import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers"

// const products = [
//     {id: 1, name: 'TourA- Nevado de Toluca', price:100, category: 'biking', stock:25, description: 'Tour de 2 días al Nevado de Toluca todo incluido', img: '../images/nevado2.jpg', serviciosBrindados: 'traslado redondo, alimentos, bicicleta y equipo de seguridad requerido por persona', puntoPartida: 'Zócalo CDMX', reserva: 'Máximo 3 días previos a la fecha de salida', fechas: 'primer y tercer viernes de cada mes'},
//     {id: 2, name: 'TourB- Peñoles Chihuahua', price:80, category:  'escalada', stock:10, description: 'Tour de 2 días a Peñoles Chihuahua', img: '../images/peñoles.jpeg', serviciosBrindados: 'equipo de escalada, traslado al sitio y zona de escalada, alimentos, equipo de camping', puntoPartida: 'Centro Histórico de Chihuahua', reserva: '1 semana de antelación', fechas: 'último fin de semana de cada mes'},
//     {id: 3, name: 'TourC Sierra Gorda S.L.P', price:120, category: 'senderismo', stock:15, description: 'Tour de 2 días a Sierra Gorda en S.L.P todo incluido', img: '../images/sierraGorda.jpg', serviciosBrindados: 'traslado redondo a la zona de senderismo, equipo de camping, guía de sendero, bastones, aguay alimentos por persona', puntoPartida: 'centro Histórico de Querétaro', reserva: '3 días de antelación', fechas: 'primer sábado de cada mes'}
// ]


// const categories = [
//     {id: 'biking', description: 'Biking'},
//     {id: 'escalada', description: 'Escalada'},
//     {id: 'senderismo', description: 'Senderismo'}
// ]

// export const getCategories = () => {
//     return new Promise (resolve => {
//         setTimeout(() => {
//             resolve(categories)
//         }, 500)
//     })
// }


// export const getProducts = (categoryId) => {
//     return new Promise (resolve => {
//         setTimeout(() => {
//             resolve(categoryId ? products.filter(prod => prod.category === categoryId ) : products)
//         }, 500)
//     })
// }


// //---------- version Sebas---------//
// export const getItemDetail = (id) => {
//     return new Promise (resolve => {
//         setTimeout(() => {
//             resolve(products.find(prod => prod.id === parseInt(id)))
//         },500)
//     })
// }

// //---------- version Rodrigo---------//
// // export const getItemDetail = (id) => {
// //     return new Promise (resolve => {
// //         setTimeout(() => {
// //             const productoSeleccionado = products.find(producto => producto.id === parseInt(id)) 
// //             console.log("productoSeleccionado", productoSeleccionado) 
// //             resolve(productoSeleccionado)
// //         }, 300)
// //     })
// // }



//     {id: 1, name: 'TourA- Nevado de Toluca', price:100, category: 'biking', stock:25, description: 'Tour de 2 días al Nevado de Toluca todo incluido', img: '../images/nevado2.jpg', serviciosBrindados: 'traslado redondo, alimentos, bicicleta y equipo de seguridad requerido por persona', puntoPartida: 'Zócalo CDMX', reserva: 'Máximo 3 días previos a la fecha de salida', fechas: 'primer y tercer viernes de cada mes'},
//     {id: 2, name: 'TourB- Peñoles Chihuahua', price:80, category:  'escalada', stock:10, description: 'Tour de 2 días a Peñoles Chihuahua', img: '../images/peñoles.jpeg', serviciosBrindados: 'equipo de escalada, traslado al sitio y zona de escalada, alimentos, equipo de camping', puntoPartida: 'Centro Histórico de Chihuahua', reserva: '1 semana de antelación', fechas: 'último fin de semana de cada mes'},
//     {id: 3, name: 'TourC Sierra Gorda S.L.P', price:120, category: 'senderismo', stock:15, description: 'Tour de 2 días a Sierra Gorda en S.L.P todo incluido', img: '../images/sierraGorda.jpg', serviciosBrindados: 'traslado redondo a la zona de senderismo, equipo de camping, guía de sendero, bastones, aguay alimentos por persona', puntoPartida: 'centro Histórico de Querétaro', reserva: '3 días de antelación', fechas: 'primer sábado de cada mes'}
    
// {id:1, name:"Escalada - Los Dínamos CDMX", desc: "Escalada deportiva en roca para intermedios y avzanados en el área natural los dínamos, CDMX.", category:"Es", precio:150, img:"./imagenes/ES_LosDinamosCDMX.jpg"},
// {id:2, name:"BiciTour - Tepoztlán Morelos", desc: "BiciTour en Tepoztlán Morelos para todas las edades, opción de ruta y de montaña en cualquier nivel que estés.", category:"Bi", precio:95, img:"./imagenes/tepoz.jpg"},
// {id:4, name:"Senderismo - Pico de Orizaba Puebla", desc: "Conoce la Montaña más alta de México y camina por sus senderos, nivel principiante e intermedios.", precio:300, img:"./imagenes/picoOrizaba.jpg"},
// {id:5, name:"Senderismo - Huasteca Potosina S.L.P", desc: "Conoce y senderea por los cañones de la reserva natural más pristina de México, todos los niveles.", category:"Se", precio:65, img:"./images/Huasteca800by600.jpg"},
// {id:6, name:"Escalada - Mineral del Chico, Hidalgo", desc: "Escala en este pueblo mágico que te ofrece cientos de rutas tanto estilo deportivo como de bloque",category:"Es", precio:95, img:"./images/mineral.jpg"},
// {id:7, name:"Senderismo - Volcán de Colima, Colima", desc: "Conoce este hermoso volcán y llega a su cima a través de sus múltiples senderos para todos los niveles", category:"Se", precio:110, img:"./images/volcanColima.jpg"},
// {id:9, name:"Escalada - Potrero Chico, N.L", desc: "Escala en la zona más importante de méxico con más de 10 largos de altura, rutas para todos los niveles", category:"Es", precio:135, img:"./images/potrero.jpg"},
// {id:10, name:"BiciTour - San Agustín Etla, Oax", desc: "Conoce una nueva cara de Oaxaca pedaleando por sus paisajes aptos para todos los niveles de experiencia", category:"Bi", precio:120, img:"./images/biciOax800by600.jpg"},
// {id:11, name:"BiciTour - SanJosé del Laurel, Tlayacapan", desc: "Pedalea en medio de la sierra Morelense y conoce los hermosos paisajes nopaleros de la región, opción para todos los niveles", category:"Bi", precio:55, img:"./images/tlayacapan.jpg"},
// {id:13, name:"BiciTour - Nevado de Toluca, EdoMex", desc: "Pedalea por los tracks de media montaña que te ofrece este hermoso volcán, nivel intermedio-técnico, se requiere experiencia",category:"Bi", precio:85, img:"./images/nevado2.jpg"},
// {id:14, name:"Senderismo - Los Dínamos, CDMX", desc: "Camina por los senderos de esta hermosa área natural en el corazón del sur de la ciudad, apto para toda la familia", category:"Se", precio:65, img:"./images/LosDinamos_CDMXb.jpg"},
// {id:15, name:"Escalada - Huasteca Potosina S.L.P", desc: "Escalada en estilo tradicional para los más experimentados en el corazón del País. Sólo nivel avanzado.", category:"Es", precio:110, img:"./images/huastecaPoto.jpg"},
// {id:16, name:"BiciTour - Zapopan Jalisco", desc: "Pedalea por paisajes inolvidables en los tracks de bici de montaña de Zapopan, para todos los niveles.", category:"Bi", precio:200, img:"./images/guadalajara.jpg"},
// {id:17, name:"Escalada - Desierto de los Leones EdoMex",  desc: "Visita la cueva del Chonta en Guerrero y escala como nunca antes, niveles intermedios y avanzados.", category:"Es", precio:65, img:"./images/chonta.jpg"},
// {id:18, name:"BiciTour - Desierto de los Leones EdoMex", desc: "Pedalea por las decenas de senderos para todas las edades de esta reserva natural .", category:"Bi", precio:55, img:"./images/desiertoLeones.jpg"},   

