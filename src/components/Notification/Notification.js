import './Notification.css'
import { useState, createContext, useContext } from 'react'


// // una vez que está TODO ESTO ESTRUCTURADO yo debo ir a App e insertar el NOTIFICATION PROVIDER para que pueda ser utilizada desde la app y entonces todo lo aquí determinado realmente aplique .


// //cuando yo inserto el componente notification aca mismo en el Notification context, yo ya puedo eliminar los valores de message y severity de acá, porque estos valores van a ser pisados y sustituidos por lo que le mande el contexto ... lo cual será simplemente el resultado del estado o del seteo de estado que yo vaya haciendo en lso componentes donde decida consumirlo así que por eso, borro estos valores de aca
// const Notification = ({ message = 'Esto es un mensaje', severity = 'success', otherClass = 'Mensaje' }) => {

 const Notification = ({ message , severity , otherClass = 'Mensaje' }) => {
    const notificationStyles = {
        position: 'absolute',
        top: 100,
        right: severity === 'sucess' ? 5 : 0,      
        // color: 'black',
        // backgroundColor: severity === 'success' ? 'green': 'red',
        padding: '10px 20px 10px 20px',
        width: 'auto',
        height: 'auto',
    }
    
//     //y acá al final puedo condicionar también si el mensaje regresa un string vacio que entonces ni siquiera salga la cajita de color que contiene al mensaje // y termina siendo un early return también. esto tmb se podría lograr con un display none en el style o el css eh.. 

    if (message === ''){
      return null
    }
//     //aca yo puedo condicionar la aplicacion del estilo, mientras al calce diga true, aplica el estilo y sale la notificacion, si dice false... BOOOM ya no sale nada, desaparece..! o se va al estilo inicial hasta arriba vaya sin detalles de estilo, sin css ni colorictos ni nada
    const config = true ?
    {
      style: notificationStyles,
      className: `${severity === 'success' ? 'Success' : 'Error'} ${otherClass || ''}`
    } : {}

//     // NOTAS: 
//       // duda : pq es necesario poner el ternario en un string template y no solo directo?
//       // duda 2 - pq la clase ternaria va en temp strings, mensaje sin strings, pero leugo otherclass tmb en template strings? que criterio uso para saber si va en template string o no
//       //duda 3 - cuando uso las llaves en la definicion del componente pues entiendo que estoy declarando las props cierto? .. pero cuando las escribo en el return... 
//       //duda 4 - a que se refiere el profe cuando dice que algo 'es en linea' o 'no es en linea'?? osa a la linea de codigo o como?o algo mas tecnico (ej 44.00m)
//       //acá estoy pasando la clase "error" (o success), y laclase message directo. 
//       //posteriormente estoy metiendo la "otherClass" arriba y llamandola acá abajo... si solo la llamo directo, y no la he definido pues me sale undefined, y por eso debo poner siempre el operador OR para evitar errores de modo que si es undefined me mande string vacio....
              //   return (
              //     <div style={notificationStyles} className={`${severity === 'success' ? 'Success' : 'Error'} Mensaje ${otherClass || ''}`}>
              //       {message}
              //     </div>
              //   )
              // }

//       // y luego de ultima si quiero pasarle el valor de una clas por props por ejemplo también puedo  -- por ej aca podría también simplemente igualar el valor de "otherClass" al valor de la clase Mensaje (en la parte de arriba donde decido las props, y listo, aunque acá abaho no incluyera la calase mensaje en el style, otehrclass aplicaría esa clase porque la recibe por props:)
//       // SI QUIERO eliminar el notification styles de arriba y del style de aqui y quedarme solocon el classname pues paso todo a css y ya esta lo manejo con classname
//       //
     
    return (
        // acá basicamente sustituyo los detalles de style y classname, por un spread operator de la variable de arriba que me permite asignar exactamente los mismos valores de estilo al div pero a traves del codigo condicional 

        <div {...config}
          //  style={notificationStyles} className={`${severity === 'success' ? 'Success' : 'Error'} ${otherClass || ''}`}
          >        
          {message}
        </div>
      )
    }

//     //creo la burbuja  y tengo que proveer aquellos componentes que quieran usar el context, con su provider. 
   const NotificationContext = createContext()

//   //ademas tengo que crear un estado para el mensaje, y otro estado para la determinación de si es success o error. el provider, es el que va a envolver toda la aplicacion que quiere o donde quiere aplicarse. envuelve a todos los hijos... estos hijos yo los voy atener todos referidos en {children}

export const NotificationProvider = ({ children }) => {

    const [ message, setMessage] = useState('')
    const [ severity, setSeverity] = useState ('success')

    const setNotification = (sev, msg) => {
      setMessage(msg)
      setSeverity(sev)
      setTimeout(() => {
        setMessage('')
      }, 2000)
    }

  
//     //yo al incluir la funcion  setnotification en las props del context, basicamente hago pública esta funcion a todos los hijos
//     //duda 6 -- cuales serian los hijos de notification?? pq va a ca y no por ej en app o un componente de mayor orden=
//     // duda 7 - pq prima en prioridad el Notification del return, que el Notification cuando es creado (const notification).. que parte establece quien le manda a quien en las props o donde queda eso conectado o claro
/// porque y cuando SI Y CUANDO NO USAR DOBLE LLAVE... por ej en este ejemplo que me rompio la cabeza... SETNOTIFICATION LA FUNCION PORQUÉ VA EN DOBLE LLAVE???? MISMA DUDA PARA CHILDREN
    return (
    <NotificationContext.Provider value = {{ setNotification}}>
      <Notification message= { message } severity = { severity } />
      { children }  
    </NotificationContext.Provider>
    )
  }

  //elimino la exportacion de Notificiation cuando decido traermela para ser consumida acá mismo -- y al consumirla acá puedo simplemente agregarle los estados de message y severity directo al return como props del componente, lo cual va apisar las consideraciones de props que yo puse cuando cree el componente -- ¿pq lo pisa? le estoy pasando props del componente de abajo al de arriba -- qué donde o cuando estamos determinando eso. 
  // export default Notification

//   // aunque elimino esta exportacion default, ahora entonces debo asegurarme de si exportar el provider donde queda todo establecido -- y debo exportar tambien LA REFERENCIA al context

//por ultimo, si no quiero estar importando el useContext en otras ventanas distintas (eg ItemDetail) una opcion es eliminar este export defaul NotificationContext y sustituirlo por una función que INCLUYA este notificationcontext directo en el llamado de useContext (q hasta ahora no lo ocupo acá sino en el componente ItemDetail), y si yo hago esto lo que ocurre es que en lugar de desglosar o llamar este useContext desde alla, ahora solo tendre que llamar o consumir esta nuevafuncion de useNotification en cualquier lugar donde quiera también integrar este componente
//  export default NotificationContext

export const useNotification = () => {
  return useContext (NotificationContext)
}

//y luego de hacer esto es FUNDAMENTAL sustituir la importacion que tenia yo en itemDetail del default de NotificationContext, por la importacion simplemente de esta funcion entre llaves p evitar q arroje error