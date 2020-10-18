import React, { Component } from 'react';

//Importamos la imagen de quienes somos
import imagen from '../elementos/img/quienes-somos.jpg';
import imagen1 from '../elementos/img/historia.jpg';
import imagen2 from '../elementos/img/objetivo.jpg';
import imagen3 from '../elementos/img/users.png';

class QuienesSomos extends Component {
    render() { 
        return (
            <div class="ComoComprar">
                <div class="contenedor-info">
                    <img src={imagen} alt="Imagen registro " />
                    <div class="info">
                        <h2>¿Quienes somos?</h2>
                        <p>Descubre mas sobre nosotros y de nuestro trabajo</p>
                    </div>
                </div>
            <div class="Nosotros">
                <h1>Nuestra Historia</h1>
                <img class="textura" src={imagen1}/>
                <p>Un día la estimada Serpas citó a su amigo Javier para comentarle que quería abrir un restaurante, una de esas asignaturas pendientes. Para ello necesitaba un socio en el que confiase ciegamente y allí en un sofá de su casa, cerveza en mano, se empezó a forjar la idea. No tardaron en empezar a hablar de una de sus pasiones, la hamburguesa, e hicieron un recorrido por las mejores hamburgueserías de Chicago, NY, Londres, Berlín… y llegaron a una conclusión: no hay hamburgueserías que traten su producto desde un punto de vista estrictamente gourmet.
                </p>
            </div>
            <div class="Nosotros">
                <h1>Nuestros Objetivos</h1>
                <img class="textura" src={imagen2}/>
                <div class="lista">
                <ul>
                   <li>Ofrecer la mejor atención a nuestros clientes de forma atenta y confiable.</li>
                   <li>Darle importancia a cada uno de nuestros clientes pues de ellos depende nuestro éxito.</li>
                   <li>Elaborar los platos gastronómicos llenos de sabores y sensaciones más placenteras para el paladar de nuestros clientes</li>
                   <li>Crear programas de oferta donde podamos involucrar a nuestros clientes cautivos.</li>
                </ul>
                </div>
            </div>

            <div class="Nosotros">
                <h1>Nuestro Equipo</h1>
            <div class="rejilla">
                <div>
                    <img class="users" src={imagen3}/>
                    <p>Manuel Hernandez </p>
                </div>
                <div>
                    <img class="users" src={imagen3}/>
                    <p>Rene Carrillo </p>
                </div>
                <div>
                    <img class="users" src={imagen3}/>
                    <p>Jaime Navarrete</p>
                </div>
                <div>
                    <img class="users" src={imagen3}/>
                    <p>Irvin Castro</p>
                </div>
                <div>
                    <img class="users" src={imagen3}/>
                    <p>Daniel Benavides</p>
                </div>
                <div>
                    <img class="users" src={imagen3}/>
                    <p>Cesar Ventura</p>
                </div>
                
            </div>
            </div>
        </div>





            
        );
    }
}
 
export default QuienesSomos;