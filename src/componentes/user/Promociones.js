import React, { useEffect, useState } from 'react';
import { db } from "../../firebase";

//Importamos la imagen de la pagina
import imagen from '../elementos/img/menu.jpg';

const Promociones = () => {
   const [promo, setPromo] = useState([]);

   //Aqui obtenemos lo que esta en la base de firebase
   const getProductos = async () => {
       db.collection("Productos").onSnapshot((querySnapshot) =>{
           const docs = [];
           querySnapshot.forEach((doc) => {
               if(doc.data().promo == "Si"){
               docs.push({...doc.data(), id:doc.id})
               }
           });
           setPromo(docs);
       });
   };
   
   useEffect(() => {
       getProductos();
   }, []);
   
        return (
            
            <div className="ComoComprar">
                <div className="contenedor-info">
                    <img src={imagen} alt="Imagen registro" />
                    <div className = "info">
                        <h2>Promociones</h2>
                        <p>Descubre las mejores promociones en nuestros productos</p>
                    </div>
                </div>

                <h1>Promociones</h1>

                
                        {promo.map(men => {
                        return   <div class="grupos-pasos" key={men.id}>
                                <div class="pasos">
                                <h4>{"Promo "+men.nombre}</h4>
                                <img src={men.foto} alt="" />
                                <p>{men.descripcion}</p>
                            </div>
                        <div className="price">
                            <div>
                                <h4>Precio:</h4>
                            </div>
                            <div>
                                <h4 className = "antes">${men.precio}</h4>
                            </div>
                            <div>
                                <h4 className="ahora">${(men.descuento).toFixed(2)}</h4>
                            </div>
                        </div>
                        
                        <div className="cars">
                            <div>
                            
                            <input type="number" className="form-control" min="1" />
                           
                            </div>
                            <button class="butto"><i className="material-icons">add_shopping_cart</i> Agregar al carrito</button>
                        </div>
                               </div>
               
                        })}
                    
            </div>
        );
}

export default Promociones;