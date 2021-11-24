/*** React ****/
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/*** Context ****/
import { StateProvider } from "./StateContext";

/*** Styles ****/
import './styles.css';

/*** Components ****/
import Header from './components/Header.js';

/*** Views ****/
import Home from "./views/Home";
import Us from "./views/Us";
import Cities from "./views/Cities";
import Contact from "./views/Contact";
import CitiesDitail from "./views/CitiesDitail";
import FlightCart from "./views/FlightCart";
import PurchFlightSelec from "./views/PurchFlightSelec";
import FlightPax from "./views/FlightPax";
import FlightPayment from "./views/FlightPayment";
import Confirm from "./views/Confirm";


function App() {
  return (
    <StateProvider>
      <Router>
        <Header />

        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/Nosotros" component={Us} />
          <Route path="/Destinos" component={Cities} />
          <Route path="/Contacto" component={Contact} />
          <Route path="/Detalle/:id" component={CitiesDitail} />
          <Route path="/SelecciónDeVuelos" component={PurchFlightSelec} />
          <Route path="/CarritoDeVuelos" component={FlightCart} />
          <Route path="/Pasajeros" component={FlightPax}/>
          <Route path="/Pago" component={FlightPayment} />
          <Route path="/ConfirmacionPago" component={Confirm} />


        </Switch>
    
      </Router>
    </StateProvider>
  );
}


export default App;