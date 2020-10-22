import React, { Component, useState } from 'react';
import { useFirebaseApp, useUser } from 'reactfire';
import 'firebase/auth';

import Swal from 'sweetalert2';

import { Link } from 'react-router-dom';


const InicioSesion = () => {
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();
    const user= useUser();

    const submitGoogle = () => {
        firebase.auth().signInWithPopup().then(resultado => {
            // console.log(resultado);
            user = resultado.user;
        });
    }

    const submit = () => {
        firebase.auth().signInWithEmailAndPassword(email,password).then(resultado => {
            Swal.fire(
                'Inicio de sesion exitoso',
                `Bienvenido ${resultado.user.email}`,
                'success'
            );

            console.log(resultado);
        }).catch(error => {
            Swal.fire(
                'Error!',
                error.message,
                'error'
            )
        });
    }

    const logout = async () => {
        await firebase.auth().signOut();
    }
    
    return (
        <div className="InicioSesion">
            <h1>Iniciar sesión</h1>
            <h2>Bienvenido {!user ? "Anonimo" : user.email}</h2>
            <div className="form-cuenta">
                <div className="grupo-inputs">
                    <input type="email" id='email' placeholder="Email" onChange={ (ev)=> setEmail(ev.target.value)} />
                    <input type="password" placeholder="Contraseña" onChange={ (ev)=> setPassword(ev.target.value)}/>
                </div>
                <button class="botonIniciarSesion" onClick ={submit}>Iniciar sesión</button>
                <button class="botonIniciarSesion botonGoogle" onClick ={submitGoogle}><i class="lab la-google"></i> Iniciar sesión con Google</button>
            </div>
            <div className="existencia-cuenta">
                <p>¿No tienes cuenta?</p>
                <Link to="/registro"><button class="botonIrRegistro">Regístrate</button></Link>
            </div>
        </div>
    );
}
 
export default InicioSesion;