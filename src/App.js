import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

// --------------- Modificada Runat -----------------//
const App = () => {
  
  const styles  = {
    color: 'aqua',
    backgroundColor: 'black',
    borderRadius: '25%',
    fontSize: '55px'
    }


  //etiqueta header modificada - de englobar toda la app a englobar solo el navBar + estilos de class App-header "comentados" para que no apliquen por ahora. 
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
        <h1 style={{color:'black'}}>Bienvenidx a RumboNaturaleza</h1>   
        <h2>Conoce Las Ofertas de la Semana...</h2>     
        <img src={logo} className="App-logo" alt="logo" />
        <p style={styles}>Desafío 2 - Creando La NavBar</p>        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    
    </div>
  );
}

// ----------------Original ---------------------//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 style={{color:'green'}}>Bienvenidx a RumboNaturaleza</h1>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Desafío 2 - Creando La NavBar</p>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>        
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
