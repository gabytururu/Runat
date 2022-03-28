
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



// --------------- Modificada Runat -----------------//
const App = () => {
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>                 
          <ItemListContainer greeting={'Bienvenidx a RumboNaturaleza'} intro={'Conoce las ofertas del día...'}/>                        
    </div>
  )   
} 


export default App
