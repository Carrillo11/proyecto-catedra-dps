import React, { Component } from 'react';

//Importamos la imagen de la pagina
import imagen from '../elementos/img/como-comprar.jpg';
import imagen1 from '../elementos/img/paso1.PNG';

class ComoComprar extends Component {
    render() { 
        return (
            <div class="ComoComprar">
                <div class="contenedor-info">
                    <img src={imagen} alt="Imagen registro " />
                    <div class="info">
                        <h2>¿Como comprar?</h2>
                        <p>Ahora hacer tus pedidos esta a un solo click de distancia </p>
                    </div>
                </div>

                <h1>PROCESO DE COMPRA</h1>
            <div class="descrip"> 
                <h3>Para poder comprar sin problema los productos de nuestra tienda, sigue los pasos a continuacion</h3>
                  
            </div>
            <div class="grupos-pasos">
                <div class="pasos">
                <h3>PASO 1:</h3>
                <img src={imagen1} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, aliquid dolorem obcaecati itaque ad tenetur vero impedit accusantium aut modi atque eum quod, ducimus eos numquam error iusto, quisquam incidunt.</p>
                </div>

                <div class="pasos">
                <h3>PASO 2:</h3>
                <img src={imagen1} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, aliquid dolorem obcaecati itaque ad tenetur vero impedit accusantium aut modi atque eum quod, ducimus eos numquam error iusto, quisquam incidunt.</p>
                </div>


                <div class="pasos">
                <h3>PASO 3:</h3>
                <img src={imagen1} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, aliquid dolorem obcaecati itaque ad tenetur vero impedit accusantium aut modi atque eum quod, ducimus eos numquam error iusto, quisquam incidunt.</p>
                </div>

            </div>
            
    


            </div>
        );
    }
}
 
export default ComoComprar;