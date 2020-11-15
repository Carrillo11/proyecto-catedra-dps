import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import insignia from './../img/insigniaGooglePlay.png';

function Footer() {
    return ( 
        <div className="footer-contenedor">
            <div className="footer">
                <div className="enlacesInteres">
                    <h3>Enlaces de interes</h3>
                    <ul>
                        <li><Link to="/comoComprar">¿Cómo comprar?</Link></li>
                        <li><Link to="/quienesSomos">¿Quiénes somos?</Link></li>
                        <li><Link to="/carrito">Carrito de compras</Link></li>
                    </ul>
                </div>
                <div className="servicioCliente">
                    <h3>Servicio al cliente</h3>
                    <ul>
                        <li><Link to="/faq">Preguntas frecuentes</Link></li>
                        <li><Link to="/contactos">Contactos</Link></li>
                    </ul>
                </div>
                <div className="redesSociales">
                    <h3>Redes sociales</h3>
                    <ul>
                        <li><a href="#" target="_blank"><i class="lab la-facebook-f"></i></a></li>
                        <li><a href="#" target="_blank"><i class="lab la-twitter"></i></a></li>
                        <li><a href="#" target="_blank"><i class="lab la-instagram"></i></a></li>
                        <li><a href="#" target="_blank"><i class="lab la-youtube"></i></a></li>
                    </ul>
                </div>
                {/* <div className="movil">
                    <h3>Aplicacion movil</h3>
                    <a href="#"><img src={insignia} alt="Aplicacion de Google Play"/></a>
                </div> */}
            </div>
            <div className="copyright">
                <small>&copy; Pupuseria Serpas. Todos los derechos reservados</small>
            </div>
        </div>
    );
}
 
export default Footer;