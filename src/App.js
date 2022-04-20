import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { createContext } from 'react'
import { CartContextProvider } from './components/Context/CartContext'

export const Context = createContext()

const App = () => {    

  
  return (
  <>
    <div className="App">         
      <CartContextProvider>
        <BrowserRouter> 
          <NavBar />        
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />              
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />   
          </Routes>
        </BrowserRouter> 
      </CartContextProvider>       
    </div>
  </>
  );
}

export default App