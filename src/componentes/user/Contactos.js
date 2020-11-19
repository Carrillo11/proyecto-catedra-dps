import React, { Component } from 'react';

import imagen from './../elementos/img/img-faq.jpg';
import {
withScriptjs,
withGoogleMap,
GoogleMap,
Marker,
} from "react-google-maps";

class Contactos extends Component {
    render() { 
        const MapWithAMarker=withScriptjs(withGoogleMap(props =>
            <GoogleMap
            defaultZoom={17}
            defaultCenter={{lat: 13.7828, lng: -89.1744}}
>
<Marker
position={{lat: 13.7828, lng: -89.1744}}
/>
</GoogleMap>
));
        return (
     
            <div className="Contacto">
                <div className="contenedor-info">
                    <img src={imagen} alt="Imagen registro" />
                    <div className="info">
                        <h2>Contacto</h2>
                        <p>Si quieres contactarte directamente con nosotros usa los siguientes motodos.</p>
                    </div>
                </div>
                
                <h1>CONTÁCTANOS</h1>
            <div class="dscrp"> 
                <h2>Número de atención al cliente para pedidos en línea</h2>
                <div class="tel">
               <a href="tel:+50322733333"><h2>+503 2273-3333</h2></a> 
                </div>
            </div>
            <div class="coment">
                <h2>Comentario</h2>
            <p>En caso de que tengas un comentario acerca de nuestros servicios o productos, puedes enviarnos un mensaje con el siguiente formulario.</p>
            </div>
            
            <div className="form-comentarios">
                <div className="grupo-inputs">
                    <input type="text" placeholder="Nombres"/>
                    <input type="text" placeholder="Apellidos"/>
                    <input type="email" placeholder="Correo electónico*"/>
                    <div>
                    <textarea name="message" class="form-control" id="message" cols="40" rows="5" placeholder="Mensaje*"></textarea>
                    </div>
                </div>
                <button class="botonEnviarComentario">ENVIAR COMENTARIO</button>
            </div>

            <div class="ubicacion">
            <h2>Ubicación</h2>
             <div class="direccion">
                <h2>Col. Santa Marta, Apopa, San Salvador, El Salvador</h2>
             </div>
            </div>

            <div class="mapa">
            <MapWithAMarker 
     googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC44CyWrABi21BcFsPpv5Vu0Nql35ZJDCY&v=3.exp&libraries=geometry"
     loadingElement={<div style={{height: '100%'}}/>}
     containerElement={<div style={{height: '296px'}}/>}
     mapElement={<div style={{height: '100%'}}/>}
     />
            </div>

            </div>
        );
    }
}
 
export default Contactos;