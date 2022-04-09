import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


const App = () => {  
 
  return (
  <>
    <div className="App">           
      <NavBar />
      <ItemListContainer greeting={"Su lista de opciones"} name={'test'}/>
      <ItemDetailContainer detallesMsg={"Los detalles del producto elegido son:"}/>       
    </div>
  </>
  );
}

export default App