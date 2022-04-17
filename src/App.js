import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


const App = () => {  
 
  return (
  <>
    <div className="App">  
      <BrowserRouter> 

      <NavBar />
      {/* <div>
        <Link to='/list'> List </Link>
        <Link to='/detail'> Detalle </Link>
      </div> */}
      <Routes>
        {/* <Route path='/' element={<h1>HOME</h1>} />
        <Route path='/list' element={<ItemListContainer/>} />
        <Route path='/detail' element={<ItemDetailContainer/>} />
        <Route path='*' element={<h1>NOT FOUND 404</h1>} /> */}
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/detail/:productId" element={<ItemDetailContainer />} />
        {/* <Route path="*" element={<h1>NOT FOUND 404</h1>}/>  */}
      </Routes>
      </BrowserRouter>
      {/* <ItemListContainer greeting={"Su lista de opciones"} />
      <ItemDetailContainer detallesMsg={"Los detalles del producto elegido son:"}/>*/} 
    </div>
  </>
  );
}

export default App