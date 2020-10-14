import React from 'react';
import { Link } from 'react-router-dom';

import './BarraNav.css';
import logo from './../img/logo.png'

class BarraNav extends React.Component {
    cambioMenu() {
        const menu = document.getElementById('navMenu'),
              boton = document.getElementById('botonMenu'); 
        
        menu.classList.toggle('menu-activo');

        if(boton.classList.contains('la-bars')) {
            boton.classList.remove('la-bars');
            boton.classList.add('la-times');
        }
        else {
            boton.classList.remove('la-times');
            boton.classList.add('la-bars');
        }
    }

    cambioMenuUsuario() {
        const menuUsuario = document.getElementById('navMenuUsuario');
        
        menuUsuario.classList.toggle('menu-usuario-activo');
    }

    render() {
        return(
            <div className="navbar-contenedor">
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
                <nav className="navbar-usuario">
                    <figure onClick={this.cambioMenuUsuario}>
                        <i className="las la-user-circle"></i>
                    </figure>

                    <ul id="navMenuUsuario">
                        <li>
                            <Link to="/inicioSesion">Cerrar sesion <i className="las la-sign-out-alt"></i></Link>                            
                        </li>                       
                    </ul>
                </nav>
            </div>
        );
    }
}

export default BarraNav;