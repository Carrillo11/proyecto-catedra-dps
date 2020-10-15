import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class InicioSesion extends Component {
    render() { 
        return (
            <div className="InicioSesion">
                <h1>Iniciar sesión</h1>
                <div className="form-cuenta">
                    <div className="grupo-inputs">
                        <input type="text" placeholder="Nombre de usuario" />
                        <input type="password" placeholder="Contraseña" />
                    </div>
                    <button class="botonIniciarSesion">Iniciar sesión</button>
                    <button class="botonIniciarSesion botonGoogle"><i class="lab la-google"></i> Iniciar sesión con Google</button>
                </div>
                <div className="existencia-cuenta">
                    <p>¿No tienes cuenta?</p>
                    <Link to="/registro"><button class="botonIrRegistro">Regístrate</button></Link>
                </div>
            </div>
        );
    }
}
 
export default InicioSesion;