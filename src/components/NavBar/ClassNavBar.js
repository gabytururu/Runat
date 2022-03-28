
// ---------- Paso 4 - APLICANDO PROPS EN COMPONENTES BASADOS EN CLASES ------------------------//
// CONECTA CON App.js

// en los componentes basados en clases, el return en realidad es un método render

// en los componentes basados en clases, yo no tengo parámetros para recibir información, por lo que en estos casos, yo tengo, dentro del objeto "this" que poseen los componentes, tengo la posibilidad de acceder a esas props

//OJO Cosita curiosa, en los componentes basados en CLASES, la sintaxis me obliga a llamar las props con la composición "this.props" .. sin embargo en los componentes basados en funciones -que pues son una evolución de esto - en realidad yo podría llamarle props al parametro, o llamarle pepito si yo quiero, pq como en toda función yo estoy nomas asignando el nombre de mi parametro. Por convención pues le ponemos props pq en teoría son una representación de lo que solían ser las props acá en las clases.. pero pues nada.. si le llamo distinto, igual funcionará eh 

import { Component } from 'react';

class ClassNavBar extends Component {
    render () {
        return (
            <nav className="NavBar">  
            <img src="./images/largoDoble (2).png" className="marca" alt="logo Runat"/>
            <h2 className="title">{this.props.name}</h2>
            <ul>            
                        <li><a className="link" href="">Senderismo</a></li>
                        <li><a className="link" href="">Escalada</a></li>
                        <li><a className="link" href="">EcoTurismo</a></li>               
                    </ul>                                                   
        </nav>
        )
    }
}

export default ClassNavBar