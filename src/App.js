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

// Pagina inicio
import Inicio from './componentes/Inicio/Inicio';

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
              <h1>Pagina Como Comprar</h1>
            </Route>

            <Route path="/faq">
              <h1>Pagina de Preguntas Frecuentes</h1>
            </Route>

            <Route path="/quienesSomos">
              <h1>Pagina de Quienes Somos</h1>
            </Route>

            {/* Paginas de inicio de sesion y registro */}

            <Route path="/inicioSesion">
              <h1>Pagina de Inicio de Sesion</h1>
            </Route>

            <Route path="/registro">
              <h1>Pagina de Registro</h1>
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
