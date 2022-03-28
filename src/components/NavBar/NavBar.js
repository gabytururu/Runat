
//-----------------CLASE 3 - Components I - Paso 3.B Renderizando Props (VER app.js) -----------// 

//para renderizar el props que yo inserté debo incluirlo dentro de mi codigo JSX que será retornado (y eventualmente renderizado), y para hacer esto, lo hago a manera de objeto porque al final, en react native los props son un objeto (recuerdas?) mientras los children son un array

import './NavBar.css'

const NavBar = (props) => {

    console.log(props)

    return(                             
               <nav className="NavBar">  
                    <img src="./images/largoDoble (2).png" className="marca" alt="logo Runat"/>
                    <h2 className="title">{props.name}</h2>
                    <ul>            
                        <li><a className="link" href="">Senderismo</a></li>
                        <li><a className="link" href="">Escalada</a></li>
                        <li><a className="link" href="">EcoTurismo</a></li>               
                    </ul>                       
                </nav>          
    )      
}

export default NavBar

//-----------------CLASE 3 - Components I - Paso 3.A Creando Props (VER app.js) -----------// 

// const NavBar = (props) => {

//     // ojo aquí yo al intentar consolelogear las props, lo que me sale es el título de e-commerce. y me salen dos lineas de props diferentes una como  objeto sin children (la q escribi directo en jsx en la js.app) y otra con children (la que escribí en react native pq deje los corchetes del array vacio)
//     console.log(props)

//     return(                             
//                <nav className="NavBar">  
                
//                 <img src="./images/largoDoble (2).png" className="marca" alt="logo Runat"/>
//                     <ul>            
//                         <li><a className="link" href="">Senderismo</a></li>
//                         <li><a className="link" href="">Escalada</a></li>
//                         <li><a className="link" href="">EcoTurismo</a></li>               
//                     </ul>                       
//                 </nav>
          
//     )
        

// }

// export default NavBar