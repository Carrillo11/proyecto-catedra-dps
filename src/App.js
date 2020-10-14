import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

// Elementos de la pagina
import BarraCarrito from './componentes/elementos/BarraCarrito/BarraCarrito';
import BarraNav from './componentes/elementos/BarraNav/BarraNav';
import Footer from './componentes//elementos/Footer/Footer';

// Paginas del sitio
import Inicio from './componentes/Inicio/Inicio';
import ComoComprar from './componentes/ComoComprar/ComoComprar';
import Faq from './componentes/PreguntasFrecuentes/PregunstasFrecuentes';
import QuienesSomos from './componentes/QuienesSomos/QuienesSomos';

// Paginas de inicio de sesion y registro
import InicioSesion from './componentes/InicioSesion/InicioSesion';
import Registro from './componentes/Registro/Registro';

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <BarraCarrito />
            <BarraNav />
          </header>

          <Switch>

            <Route path="/comoComprar">
              <ComoComprar />
            </Route>

            <Route path="/faq">
              <Faq />
            </Route>

            <Route path="/quienesSomos">
              <QuienesSomos />
            </Route>

            {/* Paginas de inicio de sesion y registro */}

            <Route path="/inicioSesion">
              <InicioSesion />
            </Route>

            <Route path="/registro">
              <Registro />
            </Route>

            {/* Ruta de la pagina de inicio (Ruta raiz) */}
            <Route path="/">
              <Inicio />
            </Route>

          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
