import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import imagen from './../elementos/img/img-registro.jpg';

class Registro extends Component {
    render() { 
        return (
            <div className="Registro">
                <div className="contenedor-info">
                    <img src={imagen} alt="Imagen registro"/>
                    <div className="info">
                        <h2>Registro</h2>
                        <p>Registrate para poder comprar y tambien para estar al tanto de nuestras promociones.</p>
                    </div>
                </div>

                <h1>Registro</h1>
                <div className="form-cuenta">
                    <div className="grupo-inputs">
                        <h3>Datos personales</h3>
                        <input type="text" placeholder="Nombres *" />
                        <input type="text" placeholder="Apellidos *" />
                        <input type="text" placeholder="DUI *" />
                        <input type="date" placeholder="Fecha de nacimiento" />
                        <input type="text" placeholder="Número de teléfono *" />
                    </div>
                    <div className="grupo-inputs">
                        <h3>Datos de usuario</h3>
                        <input type="text" placeholder="Nombre de usuario *" />
                        <input type="email" placeholder="Correo electrónico *" />
                        <input type="password" placeholder="Contraseña *" />
                        <input type="password" placeholder="Repetir contraseña *" />
                    </div>
                    <input type="checkbox" id="aceptarTerminos" />
                    <label htmlFor="aceptarTerminos">Acepto los terminos y condiciones</label>
                    <button class="botonRegistrarse">Registrarse</button>
                </div>
                <div className="existencia-cuenta">
                    <p>¿Ya tienes una cuenta?</p>
                    <Link to="/inicioSesion"><button class="botonIrInicioSesion">Iniciar sesión</button></Link>
                </div>
            </div>
        );
    }
}
 
export default Registro;