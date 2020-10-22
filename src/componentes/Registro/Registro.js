import React, { Component,useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';

import Swal from 'sweetalert2';

import { Link } from 'react-router-dom';

import imagen from './../elementos/img/img-registro.jpg';


const Registro = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const firebase= useFirebaseApp();


    const submit = () =>{
        firebase.auth().createUserWithEmailAndPassword(email,password).then(() => {
            Swal.fire(
                'Cuenta creada',
                'La cuenta se registró correctamente',
                'success'
            )
        }).catch(error => {
            Swal.fire(
                'Error!',
                error.message,
                'error'
            )
        });
    }
    
    return (

        <div className="Registro">
            <div className="contenedor-info">
                <img src={imagen} alt="Imagen registro" />
                <div className="info">
                    <h2>Registro</h2>
                    <p>Registrate para poder comprar y tambien para estar al tanto de nuestras promociones.</p>
                </div>
            </div>

            <h1>Registro</h1>
            <div className="form-cuenta">
                {/* <div className="grupo-inputs">
                    <h3>Datos personales</h3>
                    <input type="text" placeholder="Nombres *" />
                    <input type="text" placeholder="Apellidos *" />
                    <input type="text" placeholder="DUI *" />
                    <input type="date" placeholder="Fecha de nacimiento" />
                    <input type="text" placeholder="Número de teléfono *" />
                </div> */}
                <div className="grupo-inputs">
                    <h3>Datos de usuario</h3>
                    {/* <input type="text" placeholder="Nombre de usuario *" />
                    <input type="email" placeholder="Correo electrónico *" />
                    <input type="password" placeholder="Contraseña *" />
                    <input type="password" placeholder="Repetir contraseña *" /> */}

                    <input type="email" id='email' placeholder="Email" onChange={ (ev) => setEmail(ev.target.value)} />
                    <input type="password" placeholder="Contraseña" onChange={ (ev) => setPassword(ev.target.value)} />
                </div>
                {/* <input type="checkbox" id="aceptarTerminos" /> */}
                {/* <label htmlFor="aceptarTerminos">Acepto los terminos y condiciones</label> */}
                <button class="botonIniciarSesion" onClick ={submit}>Registrarse</button>
            </div>
            <div className="existencia-cuenta">
                <p>¿Ya tienes una cuenta?</p>
                <Link to="/inicioSesion"><button class="botonIrInicioSesion">Iniciar sesión</button></Link>
            </div>
        </div>
    );
}
 
export default Registro;