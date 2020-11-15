import React from 'react';

import './SplashScreen.css';
import logo from '../img/logo.png';

function SplashScreen() {
    return ( 
        <div className="SplashScreen">
            <div className="contenedor">
                <figure>
                    <img src={logo} alt="Logotipo"/>
                </figure>
                <div class="cargador"></div>
            </div>
        </div>
    );
}
 
export default SplashScreen;