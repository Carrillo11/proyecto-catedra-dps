import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

// Barra de navegacion
import BarraNav from './componentes/elementos/BarraNav/BarraNav';

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

          <Switch>

            <Route path="/comoComprar">
              <BarraNav />

              <h1>Pagina Como Comprar</h1>
            </Route>

            <Route path="/faq">
              <BarraNav />

              <h1>Pagina de Preguntas Frecuentes</h1>
            </Route>

            <Route path="/quienesSomos">
              <BarraNav />

              <h1>Pagina de Quienes Somos</h1>
            </Route>

            {/* Paginas de inicio de sesion y registro */}

            <Route path="/inicioSesion">
              <BarraNav />

              <h1>Pagina de Inicio de Sesion</h1>
            </Route>

            <Route path="/registro">
              <BarraNav />

              <h1>Pagina de Registro</h1>
            </Route>

            {/* Ruta de la pagina de inicio (Ruta raiz) */}
            <Route path="/">
              <BarraNav />
              
              <Inicio />
            </Route>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
