
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

