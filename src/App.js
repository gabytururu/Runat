import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/itemCount';

const App = () => {
  
  const totalProds = (qty) => {
    console.log(`Usted ha agregado un total de ${qty} productos a su carrito`)
  }
  return (
  <>
    <div className="App">      
     
      <NavBar />
      <ItemListContainer greeting={"Su carrito de Compras"}/>
      <ItemCount header={'Cantidad de Productos en su Carrito'} stock={15} init={0} onAdd={totalProds}/>
      {/* <Counter/> */}
       
    </div>
  </>
  );
}

export default App