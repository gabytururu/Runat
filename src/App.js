import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/itemCount';

const App = () => {
  

  return (
  <>
    <div className="App">      
     
      <NavBar />
      <ItemListContainer greeting={"Su carrito de Compras"}/>
      <ItemCount header={'Cantidad de Productos en su Carrito'} stock={15} init={0}/>
      {/* <Counter/> */}
       
    </div>
  </>
  );
}

export default App