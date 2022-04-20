import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useState, createContext } from 'react'


export const Context = createContext()

const App = () => {  

  //NOTAS:
    //creo un estado si quiero poder guardar y pasar un valor de padres a varios hijos, en este caso de app a navbar y a itemdetailcontainer - ya que quiero pder pasar el valor del carrito/carwidget... el cual se crea en el componente carwidget pero luego quiero poder guardarlo y visualizarlo y que pueda ser sujeto de modificaciones y que siempre esa versión final se pase a los componentes en los que los necesito. Por eso creo un estado:

  const [cart, setCart] = useState([])
  //NOTAS:     
    //esta instruccion me permite ir viendo como aumenta mi lista de objetos agregados al carrito, aunque por una razon ... no funcionó la variable quantity
  console.log(cart)

  //NOTAS:
    // y paso la info a los componentes donde la necesito por conducto de props:
    // paso tambien la info que necesito por context (en el primer ejemplo testeo con un simple value 123 que llega al componente item... y despues ya comparto lo asociado a cart yset cart para poder usarlo en itemdetail container). OJO -- Cart y set cart los comparto como un OBJETO Por lo que debo envolverlo entre llaves (adicional a las llaves de la estructura de value), y la razon de compartirlo como objeto es que podré luego manipular el uso de este objeto a partir de su key y acceder a este via item detail
    // el context provider ser pone envolviendo los componentes que quiero que impacte acá voy a envolver todo, pero al final en la realidad puedo tener la burbuja al rededor SOLO de donde necesite, o tener varios context providers operando a la vez y envolviendo solo lo que corresponde
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
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />  
            {/* <Route path="/detail/:productId" element={<ItemDetailContainer setCart={setCart} cart={cart} />} />  --- elimino para ej de setcontext pa no combinar tecnicas */}
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />        
          </Routes>
        </BrowserRouter>  
      </Context.Provider>    
    </div>
  </>
  );
}

export default App