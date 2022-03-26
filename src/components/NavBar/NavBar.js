import './NavBar.css'

const NavBar = () => {

    return(
        <nav className="NavBar">  
            <div className="backLinkA">
                <a className="linkA" href=""> RUNAT | Inicio</a>
            </div>         
            <ul>            
                <li><a className="link" href="">Senderismo</a></li>
                <li><a className="link" href="">Escalada</a></li>
                <li><a className="link" href="">EcoTurismo</a></li>               
            </ul>                       
        </nav>
    )

}

export default NavBar