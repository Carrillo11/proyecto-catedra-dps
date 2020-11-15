import React, { Component } from 'react';

import imagen from './../elementos/img/img-faq.jpg';

class PreguntasFrecuentes extends Component {
    render() { 
        return (
            <div className="PreguntasFrecuentes">
                <div className="contenedor-info">
                    <img src={imagen} alt="Imagen registro" />
                    <div className="info">
                        <h2>Preguntas frecuentes</h2>
                        <p>Resuelve tus dudas más importantes en esta sección.</p>
                    </div>
                </div>

                <h1>Preguntas frecuentes</h1>
                <div className="grupo-preguntas">
                    <div className="pregunta">
                        {/* <i class="las la-angle-right"></i> */}
                        <h3>Pregunta 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, aliquid dolorem obcaecati itaque ad tenetur vero impedit accusantium aut modi atque eum quod, ducimus eos numquam error iusto, quisquam incidunt.</p>
                    </div>

                    <div className="pregunta">
                        <h3>Pregunta 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, aliquid dolorem obcaecati itaque ad tenetur vero impedit accusantium aut modi atque eum quod, ducimus eos numquam error iusto, quisquam incidunt.</p>
                    </div>

                    <div className="pregunta">
                        <h3>Pregunta 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, aliquid dolorem obcaecati itaque ad tenetur vero impedit accusantium aut modi atque eum quod, ducimus eos numquam error iusto, quisquam incidunt.</p>
                    </div>

                    <div className="pregunta">
                        <h3>Pregunta 4</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, aliquid dolorem obcaecati itaque ad tenetur vero impedit accusantium aut modi atque eum quod, ducimus eos numquam error iusto, quisquam incidunt.</p>
                    </div>

                    <div className="pregunta">
                        <h3>Pregunta 5</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, aliquid dolorem obcaecati itaque ad tenetur vero impedit accusantium aut modi atque eum quod, ducimus eos numquam error iusto, quisquam incidunt.</p>
                    </div>

                    <div className="pregunta">
                        <h3>Pregunta 6</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, aliquid dolorem obcaecati itaque ad tenetur vero impedit accusantium aut modi atque eum quod, ducimus eos numquam error iusto, quisquam incidunt.</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PreguntasFrecuentes;