import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { createContext } from 'react'
import { CartContextProvider } from './components/Context/CartContext'
//creo q esto ya ni era necesario... no está haciendo nada 
// export const Context = createContext()
// import Notification from './components/Notification/Notification'
import { NotificationProvider } from './components/Notification/Notification'


// ya que creé todo en Notification.js vengo acá a consumirlo (en especifico a consumir el provider)


const App = () => {    


  //elimino Notification cuando decido mejor consumirlo en el return mismo de notificationcontextprovider (en notification.js)
  //DEBIDO a que el state inicial del message es un string vacio primero me sale eso.. solo el cuadrito vacio.. pero eso cambia cuando yo
  //vinculo y consumo la notificacion en otro componente, donde activo el cambio de estado para que aparezca el mensaje que yo quiera... 
  // eso lo logro desde itemDetail que es donde finalmente decido consumir este context y la funcion que setea los estados que es setNotification 

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