// import { render } from "@testing-library/react";         ***** Chequear funcionalidad
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/*** Styles ****/
import './styles.css';

/*** Components ****/
import Header from './components/Header.js';
import Cover from './components/CoverPage.js';
// import TravelSeeker from "./components/TravelSeeker";
// import ListCards from "./components/ListCards";

/*** Views ****/
import Home from "./Views/Home";
import Us from "./Views/Us";
import Cities from "./Views/Cities";
import Contact from "./Views/Contact";
import CitiesDitail from "./Views/CitiesDitail";
import FlightCart from "./Views/FlightCart";


function App() {
  return (
    <Router>
      <Header />

      <Switch>
        
        <Route path="/" exact component={Home} />
        <Route path="/Nosotros" component={Us} />
        <Route path="/Destinos" component={Cities} />
        <Route path="/Contacto" component={Contact} />
        <Route path="/Detalle/:id" component={CitiesDitail} />
        <Route path="/Carrito" component={FlightCart} />
        
      </Switch>
  
      {/* <div className="mainApp">

        <TravelSeeker
          title = "Viajamos?"
          origin = "Origen"
          destiny = "Destino"
        />

        <ListCards
          title = "Destinos"
        />

      </div> */}
    </Router>
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