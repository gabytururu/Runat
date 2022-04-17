
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../asyncmock/asyncmock'

const NavBar = (props) => {
    
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])

    return(                             
               <nav className="NavBar">
                    <Link to='/'>  
                        <img src="./images/largoDoble (2).png" className="marca" alt="logo Runat"/>
                        <h2 className="title">{props.name}</h2>
                    </Link>
                    <div>
                        {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className= {({isActive}) => isActive ? 'botonActive' : ''}>{cat.description}</NavLink>)}
                    </div>
                    <div>
                        <CartWidget/>
                    </div>


                    {/* <ul>            
                        <li><a className="link" href="">Senderismo</a></li>
                        <li><a className="link" href="">Escalada</a></li>
                        <li><a className="link" href="">EcoTurismo</a></li>               
                    </ul>                        */}

                    {/* <Link to='/list' className='botonCompra'>List</Link>
                    <Link to='/detail' className='botonCompra'>Detail</Link>
                    <Link to='/nowhere' className='botonCompra'>Otro</Link> */}

                </nav>          
    )      
}

export default NavBar

