// import { render } from "@testing-library/react";         ***** Chequear funcionalidad
import React from "react";
import './styles.css';

/*** Assets - Img ****/
import img from './assets/Rcu1.jpeg';
import img2 from './assets/Vmr2.jpeg';
import img3 from './assets/Vdr1.jpeg';

// let img = img;
// let img2 = img2;
// let img3 = img3;

/*** Components ****/
import Header from './components/Header.js';
import Cover from './components/CoverPage.js';
import ItemContainer from './components/ItemContainer.js';

function App() {
  return (
    <>
      <Header />
      <div className="mainApp">
        {/* <Cover /> */}
        <h1>Destinos</h1>
        <div className="mainApp__LsItems">
          <ItemContainer
            img = {img}
            name = "Rio Cuarto"
            time = "00:45"
            acft = "Atr 72-600"
          />
          <ItemContainer 
            img = {img2}
            name = "Villa María"
            time = "00:40"
            acft = "Atr 72-600"
          />
          <ItemContainer 
            img = {img3}
            name = "Villa Dolores"
            time = "00:35"
            acft = "Atr 72-600"
          />
        </div>
      </div>
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