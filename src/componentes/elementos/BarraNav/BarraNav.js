import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

import './BarraNav.css';
import logo from './../img/logo.png'

class BarraNav extends React.Component {
    cambioMenu() {
        const menu = document.getElementById('navMenu'); 
        
        menu.classList.toggle('menu-activo');
    }

    render() {
        return(
            <Router>
                <div className="navbar-container">
                    <nav className="navbar">
                        <figure>
                            <Link to="/"><img src={logo} alt="Logo" title="Logotipo Pupuseria Serpas" /></Link>
                        </figure>

                        <i className="las la-bars" id="botonMenu" onClick={this.cambioMenu}></i>
                        
                        <ul id="navMenu">
                            <li>
                                <Link to="/"><i className="las la-home"></i> Inicio</Link>
                            </li>
                            <li>
                                <Link to="/comoComprar"><i className="las la-credit-card"></i> Como comprar</Link>
                            </li>
                            <li>
                                <Link to="/quienesSomos"><i className="las la-users"></i> Quienes Somos</Link>
                            </li>
                            <li>
                                <Link to="/faq"><i className="las la-question-circle"></i> Preguntas Frecuentes</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className="navbar-user">
                        <figure>
                            <i className="las la-user-circle"></i>
                            <i className="las la-angle-down"></i>
                        </figure>
                    </nav>
                </div>
            </Router>
        );
    }
}

export default BarraNav;