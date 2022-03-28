import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {

    return(                             
               <nav className="NavBar">  
                    <div>
                        <img src="./images/largoDoble (2).png" className="marca" alt="logo Runat"/>
                    </div>
                    <div>
                        <ul>            
                            <li><a className="link" href="">Senderismo</a></li>
                            <li><a className="link" href="">Escalada</a></li>
                            <li><a className="link" href="">EcoTurismo</a></li>               
                        </ul>
                    </div>                       
                    <div>
                        <CartWidget />
                    </div>
                </nav>
          
    )       
}
export default NavBar