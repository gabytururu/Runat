
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

                            {/* lo borro pq no esta ya haciendo nada, venia por props (eg---> const NavBar =(props) => { xxx} pero claramente es d una version vieja pq ya no trae nada porque el prop name no está siendo brindado en el componente padre) */}
                            {/* <h2 className="title">{props.name}</h2> */}
                            
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

