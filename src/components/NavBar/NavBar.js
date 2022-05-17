
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink} from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import  CartContext from '../Context/CartContext'
import { firestoreDB } from '../../services/firebase'
import { getDocs, collection } from 'firebase/firestore'


const NavBar = () => {
       
    const [categories, setCategories] = useState([])

    useEffect(() => {
       getDocs(collection(firestoreDB, 'categories')).then(response => {
           const categories = response.docs.map( doc => {
               return { id: doc.id, ...doc.data()}
           })
           setCategories(categories)
       })
    }, [])
    
    const {qtyCartWidget} = useContext(CartContext)
    console.log(qtyCartWidget())

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
                    <div className={`${qtyCartWidget() === 0 ? 'noShow' : 'show'}`}>
                        <Link to='/cart'><CartWidget /></Link> 
                    </div>                    
                </nav>          
    )      
}

export default NavBar

