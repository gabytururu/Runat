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
    
// {id:1, nombre:"Escalada - Los Dínamos CDMX", desc: "Escalada deportiva en roca para intermedios y avzanados en el área natural los dínamos, CDMX.", tipo:"Es", precio:150, img:"./imagenes/ES_LosDinamosCDMX.jpg"},
// {id:2, nombre:"BiciTour - Tepoztlán Morelos", desc: "BiciTour en Tepoztlán Morelos para todas las edades, opción de ruta y de montaña en cualquier nivel que estés.", tipo:"Bi", precio:95, img:"./imagenes/tepoz.jpg"},
// {id:3, nombre:"Escalada - Peñoles Chihuahua", desc: "Escalada en bloque en el desierto de Peñoles en Chihuahua, actividad para todos los niveles.", tipo:"Es", precio:250, img:"./imagenes/peñoles.jpeg"},
// {id:4, nombre:"Senderismo - Pico de Orizaba Puebla", desc: "Conoce la Montaña más alta de México y camina por sus senderos, nivel principiante e intermedios.", precio:300, img:"./imagenes/picoOrizaba.jpg"},
// {id:5, nombre:"Senderismo - Huasteca Potosina S.L.P", desc: "Conoce y senderea por los cañones de la reserva natural más pristina de México, todos los niveles.", tipo:"Se", precio:65, img:"./imagenes/Huasteca800by600.jpg"},
// {id:6, nombre:"Escalada - Mineral del Chico, Hidalgo", desc: "Escala en este pueblo mágico que te ofrece cientos de rutas tanto estilo deportivo como de bloque", tipo:"Es", precio:95, img:"./imagenes/mineral.jpg"},
// {id:7, nombre:"Senderismo - Volcán de Colima, Colima", desc: "Conoce este hermoso volcán y llega a su cima a través de sus múltiples senderos para todos los niveles", tipo:"Se", precio:110, img:"./imagenes/volcanColima.jpg"},
// {id:8, nombre:"Senderismo - Sierra Gorda, Queretaro", desc: "Conoce esta hermosa área natural que te permitirá, sin importar tu experiencia, disfrutar la naturaleza al máximo", tipo:"Se", precio:95, img:"./imagenes/sierraGorda.jpg"},
// {id:9, nombre:"Escalada - Potrero Chico, N.L", desc: "Escala en la zona más importante de méxico con más de 10 largos de altura, rutas para todos los niveles", tipo:"Es", precio:135, img:"./imagenes/potrero.jpg"},
// {id:10, nombre:"BiciTour - San Agustín, Oaxaca", desc: "Conoce una nueva cara de Oaxaca pedaleando por sus paisajes aptos para todos los niveles de experiencia", tipo:"Bi", precio:120, img:"./imagenes/biciOax800by600.jpg"},
// {id:11, nombre:"BiciTour - SanJosé del Laurel, Tlayacapan", desc: "Pedalea en medio de la sierra Morelense y conoce los hermosos paisajes nopaleros de la región, opción para todos los niveles", tipo:"Bi", precio:55, img:"./imagenes/tlayacapan.jpg"},
// {id:12, nombre:"Senderismo - Nevado de Toluca, EdoMex", desc: "Pon tu condición física a prueba subiendo este hermoso volcán y caminando por su glaciar, nivel avanzado", tipo:"Se", precio:89, img:"./imagenes/nevadoToluca.jpg"},
// {id:13, nombre:"BiciTour - Nevado de Toluca, EdoMex", desc: "Pedalea por los tracks de media montaña que te ofrece este hermoso volcán, nivel intermedio-técnico, se requiere experiencia",tipo:"Bi", precio:85, img:"./imagenes/nevado2.jpg"},
// {id:14, nombre:"Senderismo - Los Dínamos, CDMX", desc: "Camina por los senderos de esta hermosa área natural en el corazón del sur de la ciudad, apto para toda la familia", tipo:"Se", precio:65, img:"./imagenes/LosDinamos_CDMXb.jpg"},
// {id:15, nombre:"Escalada - Huasteca Potosina S.L.P", desc: "Escalada en estilo tradicional para los más experimentados en el corazón del País. Sólo nivel avanzado.", tipo:"Es", precio:110, img:"./imagenes/huastecaPoto.jpg"},
// {id:16, nombre:"BiciTour - Zapopan Jalisco", desc: "Pedalea por paisajes inolvidables en los tracks de bici de montaña de Zapopan, para todos los niveles.", tipo:"Bi", precio:200, img:"./imagenes/guadalajara.jpg"},
// {id:17, nombre:"Escalada - Desierto de los Leones EdoMex",  desc: "Visita la cueva del Chonta en Guerrero y escala como nunca antes, niveles intermedios y avanzados.", tipo:"Es", precio:65, img:"./imagenes/chonta.jpg"},
// {id:18, nombre:"BiciTour - Desierto de los Leones EdoMex", desc: "Pedalea por las decenas de senderos para todas las edades de esta reserva natural .", tipo:"Bi", precio:55, img:"./imagenes/desiertoLeones.jpg"},   

