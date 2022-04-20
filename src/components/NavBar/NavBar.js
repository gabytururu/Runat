
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../asyncmock/asyncmock'

const NavBar = () => {
    
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])

    return(                             
               <nav className="NavBar">
                    <div>                   
                        <Link to='/'>  
                            <img src="../images/logoRunat.png" className="marca" alt="logo Runat"/>                            
                        </Link>
                    </div>
                    <div>
                        {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className= {({isActive}) => isActive ? 'botonActive' : 'botonInactive'}>{cat.description}</NavLink>)}
                    </div>                    
                    <Link to='/'>
                        <CartWidget/>
                    </Link>
                </nav>          
    )      
}

export default NavBar

