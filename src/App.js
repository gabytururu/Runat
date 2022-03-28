// --------------- Clase 3 Components-----------------//

// ---------- Paso 5 -- Trabajando con PATRONES (De presentación y de Contenedor) -------------------------------//
// Conecta con Counter.js, con Button.js y con ClassCounter.js

import './App.css';
import NavBar from './components/NavBar/NavBar'
import ClassNavBar from './components/NavBar/ClassNavBar'
import Counter from './components/Counter/Counter'
import Button from './components/Button/Button';
import ClassCounter from './components/ClassCounter/ClassCounter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
  
  const title = "Ecommerce"

  const myFunction = () => {

    console.log("hice click en el boton")

  }

  return (
  <>
    <div className="App">      
      <NavBar name={title}/>  
      <ClassNavBar name="EjemploClassNavBar" />    
      <h1>Clase 3 - Componentes I</h1>
      <Counter />
      <ClassCounter />
      <Button callback={myFunction} Label="Mi Boton"/>
      <ItemListContainer greeting={"hola mundo"} />
    </div>
  </>
  );
}

export default App;


// ---------- Paso 4 - APLICANDO PROPS EN COMPONENTES BASADOS EN CLASES ------------------------//
// CONECTA CON ClassNavBar.js
// import './App.css';
// import NavBar from './components/NavBar/NavBar'
// import ClassNavBar from './components/NavBar/ClassNavBar'


// const App = () => {
  
//   const title = "Ecommerce"

//   return (
//   <>
//     <div className="App">      
//       <NavBar name={title}/>  
//       <ClassNavBar name="EjemploClassNavBar" />    
//       <h1>Clase 3 - Componentes I</h1>
//     </div>
//   </>
//   );
// }

// export default App;


// ---------- Paso 3.B  - Practicando implementación de PROPS de forma UNIDIRECCIONAL -A. INSERTANDO LA PROP AL DOM ------------------------//

// conecta con NAVBAR.JS para verificar como luego de insertar las props acá, ya puedo ocuparla/reciclarla desde mi componente navbar

// import './App.css';
// import NavBar from './components/NavBar/NavBar'

// //**SOLO INSERTADO para ejemplificar sintaxis con react native
// import React from 'react'

// const App = () => {
  
//   const title = "Ecommerce"

//   return (
//   <>
//     <div className="App">
      
//       <NavBar name={title}/>
//       {React.createElement(NavBar, {name: title}, [])}
//       <h1>Clase 3 - Componentes I</h1>
//     </div>
//   </>
//   );
// }

// export default App;





// ---------- Paso 3.A  - Practicando implementación de PROPS de forma UNIDIRECCIONAL -A. MOSTRANDO LO COMO OPERA LA PROPS ------------------------//

// import './App.css';
// import NavBar from './components/NavBar/NavBar'

// // ojo, solo lo inserto para hacer la representación visual del elemento React.CreateElement al calce -- para ayudar a mostrar que las PROPS son simplemente el segundo parametro de la funcion en react native
// import React from 'react'

// const App = () => {

//   //OJO aquí, Sebas indica que este title podría venir de donde sea, acá pal ejemplo pues lo creo directo acá mismo
//   const title = "Ecommerce"


//   // ojo, aquí no es necesario poner AMBAS SINTAXIS (NavBar directo, o Navbar creation con create element... sino solo la primera, pero para fines del ejemplo, y de entender lo que esta significa en react native, ponemos ambas - lo que como resultado duplicará la inserción del navbar y título en la app en producción) - el ejemplo es para mostrar que las props son el segundo parametro de la funcion

//   //entonces, a quí ya inserté un PROP que es title de la APP a la NavBar... y si voy a la NavBar e instruyo consologuear la props, en la consola me saldrá en realidad el objeto o la prop desplegada !! (VER NavBar.JS)
//   return (
//   <>
//     <div className="App">
      
//       <NavBar name={title}/>
//       {React.createElement(NavBar, {name: title}, [])}
//       <h1>Clase 3 - Componentes I</h1>
//     </div>
//   </>
//   );
// }

// export default App;




// ------------ Paso 2 - Eliminar Inportacion de React y uso de funciones para estar acorde a la convención actual --------------------------//

// OJO - Actualmente importar React COMO LIBRERÍA ES MALA PRACTICA, no se importa la librería React en los archivos -- POR Lo que, al no importarla, pues no ocupo tampoco funciones de la librería react en mi código JSX- (por ej React.Fragment). Es decir, aunque hacerlo es funcional, también es obsoleto.

//Por ende como solución a lo anterior, lo que se hace ahora es que no hay importación de REACT pero tampoco se ponen las funciones de react, en el caso de ReactFragment, este fue sustituido por apertura y cierre de etiquetas VACIAS

//AL FINAL lo importante es ser correctos tecnicamente y saber qué usar y cuanod. por ej.. si yo REQUIERO ver un DIV, pues uso DIV!! , Si en cambio requiero ver el React.Fragment pues lo ocupo también. Pero si no requiero ver nada de eso, pues ocupo la convención vigente que es las etiquetas vacias, evitando importar la librería de React

//hAY QUE TENER PRESENTE QUE -- teniendo en cuenta que SIEMPRE ES MALA PRACTICA importar REACT completo!! DO NOT DO - porque en el bundle, webpack empieza a insertar codigo que no necesitamos y demás

// import './App.css';

// const App = () => {

//   return (
//   <>
//     <div className="App">
//       <h1> Clase3 - Components I </h1>
//     </div>
//     <div>
//       <h2>Otro título XXXADFAS</h2>
//     </div>
//   </>
//   );
// }

// export default App;





//------------- Paso 1 - Testeando la creación de 1 solo componente, usando React.Fragment como sustitución al DIV ----------------------//

// import './App.css';
// import React from 'react';

// const App = () => {

//   return (
//   <React.Fragment>
//     <div className="App">
//       <h1> Clase3 - Components I </h1>
//     </div>
//     <div>
//       <h2>Otro título XXXADFAS</h2>
//     </div>
//   </React.Fragment>
//   );
// }

// export default App;

// --------------- Modificada DESAFIO 2 - NavBar -----------------//


// import logo from './logo.svg';
// import './App.css';
// import NavBar from './components/NavBar/NavBar';
// import React from 'react';


// const App = () => {
  
//   const styles  = {
//     color: 'aqua',
//     backgroundColor: 'black',
//     borderRadius: '25%',
//     fontSize: '55px'
//     }


//   //etiqueta header modificada - de englobar toda la app a englobar solo el navBar + estilos de class App-header "comentados" para que no apliquen por ahora. 
//   return (
//     <div className="App">
//       <header className="App-header">
//         <NavBar />
//       </header>
//         <h1 style={{color:'black'}}>Bienvenidx a RumboNaturaleza</h1>   
//         <h2>Conoce Las Ofertas de la Semana...</h2>     
//         <img src={logo} className="App-logo" alt="logo" />
//         <p style={styles}>Desafío 2 - Creando La NavBar</p>        
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
    
//     </div>
//   );
// }

// // ----------------Original ---------------------//
// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <h1 style={{color:'green'}}>Bienvenidx a RumboNaturaleza</h1>
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>Desafío 2 - Creando La NavBar</p>
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>        
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// export default App;
