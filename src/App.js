import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useState, createContext } from 'react'


export const Context = createContext()

const App = () => {   

  const [cart, setCart] = useState([])   
  console.log(cart)
  
  return (
  <>
    <div className="App">  
      {/* <Context.Provider value={123}> */}
      <Context.Provider value={{ cart, setCart }}>
        <BrowserRouter> 
          <NavBar />        
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route path="/detail/:productId" element={<ItemDetailContainer/>} />  
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />        
          </Routes>
        </BrowserRouter>  
      </Context.Provider>    
    </div>
  </>
  );
}

export default App