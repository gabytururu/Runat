import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Form from './components/Form/Form'


const App = () => {  
 
  return (
  <>
    <div className="App">  
      <BrowserRouter> 
      <NavBar />   
      {/* <Link to='/form' className='botonActive'>Form </Link>  */}
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/detail/:productId" element={<ItemDetailContainer />} />  
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        {/* <Route path="/form" element={<Form />}/> */}
      </Routes>
      </BrowserRouter>      
    </div>
  </>
  );
}

export default App