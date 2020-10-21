import React, { Component,useState } from 'react';
import { useFirebaseApp,useUser } from 'reactfire';
import 'firebase/auth';

import { Link } from 'react-router-dom';


const InicioSesion = ()=>{
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');
    const firebase= useFirebaseApp();
    const user= useUser();
    

    const submit = async ()=>{
       await firebase.auth().signInWithEmailAndPassword(email,password);
    }
    
        return (
            
            <div className="InicioSesion">
        <h1>Iniciar sesión</h1>
        <div className="form">
            <div className="grupo-inputs">
                <input type="email" id='email' placeholder="Email" onChange={ (ev)=> setEmail(ev.target.value)} />
                <input type="password" placeholder="Contraseña" onChange={ (ev)=> setPassword(ev.target.value)}/>
            </div>
            <button class="botonIniciarSesion" onClick ={submit}>Iniciar sesión</button>
        </div>
        <div className="sin-cuenta">
            <p>¿No tienes cuenta?</p>
            <Link to="/registro"><button class="botonIrRegistro">Regístrate</button></Link>
        
        </div>
    </div>
        );
}
 
export default InicioSesion;