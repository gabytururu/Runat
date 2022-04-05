


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