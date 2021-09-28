// import { render } from "@testing-library/react";         ***** Chequear funcionalidad
// import React from "react";         ***** Import para trabajar con Componentes de Clase 
import './styles.css';


/*** Components ****/
import Header from './components/Header.js';
import Cover from './components/CoverPage.js';

function App() {
  return (
    <>
      <Header />
      <Cover />
    </>
  );
}


export default App;

/*                     Modelo de Componente de Clase 
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Coder React Proyect - Lucas Romero</h1>
        <div className="groupInfo">
          <p><strong>Docente: </strong>Di Salvo, Daniel</p>
          <p><strong>Tutora: </strong>Nakaganeku, Ailín</p>
          <p><strong>Alumno: </strong>Romero, Lucas José Gabriel</p>
          <p><strong>Camada: </strong>RJ-19740</p>
        </div>
      </div>
    );
  }
}
*/

/*                    Modelo de Componente Funcional
  function App() {
  return (
    <div className="App">
      <h1>Coder React Proyect - Lucas Romero</h1>
      <div className="groupInfo">
        <p><strong>Docente: </strong>Di Salvo, Daniel</p>
        <p><strong>Tutora: </strong>Nakaganeku, Ailín</p>
        <p><strong>Alumno: </strong>Romero, Lucas José Gabriel</p>
        <p><strong>Camada: </strong>RJ-19740</p>
      </div>
    </div>
  );
}
*/