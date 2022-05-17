import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { createContext } from 'react'
import { CartContextProvider } from './components/Context/CartContext'
import { NotificationProvider } from './components/Notification/Notification'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

const App = () => {    

  return (
  <>
    <div className="App">         
      <NotificationProvider>
        <CartContextProvider>
          {/* <Notification /> */}
          <BrowserRouter> 
            <NavBar />        
            <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/category/:categoryId" element={<ItemListContainer/>} />
              <Route path="/detail/:productId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart/>} /> 
              <Route path="/checkout" element={<Checkout/>} />                         
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />   
            </Routes>
          </BrowserRouter> 
        </CartContextProvider>     
      </NotificationProvider>  
    </div>
  </>
  );
}

export default App