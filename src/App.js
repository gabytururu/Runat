
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
          <h1 className="itemslistcontainer" greetings="Bienvenidx a RumboNaturaleza"></h1>          
          <h2>Desafío 3 - Creando Landing (CartWidget + ItemsListContainer)</h2> 
    </div>
  )   
} 


export default App
