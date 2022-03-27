import './NavBar.css'

const NavBar = () => {

    return(                             
               <nav className="NavBar">  
                
                <img src="./images/largoDoble (2).png" className="marca"/>
                    <ul>            
                        <li><a className="link" href="">Senderismo</a></li>
                        <li><a className="link" href="">Escalada</a></li>
                        <li><a className="link" href="">EcoTurismo</a></li>               
                    </ul>                       
                </nav>
          
    )
        

}

export default NavBar