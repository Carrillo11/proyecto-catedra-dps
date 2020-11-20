import React, { useEffect, useState } from 'react';
import { db } from "../../firebase";

//Importamos la imagen de la pagina
import imagen from '../elementos/img/menu.jpg';

const Menu = () => {
   const [menu, setMenu] = useState([]);
   const [carrito, setCarrito] = useState([]);

   //Aqui obtenemos lo que esta en la base de firebase
   const getProductos = async () => {
       db.collection("Productos").onSnapshot((querySnapshot) =>{
           const docs = [];
           querySnapshot.forEach((doc) => {
               docs.push({...doc.data(), id:doc.id})
              
           });
           setMenu(docs);
       });
   };

    const AddCars = async (id) => {
        console.log(menu, id)

        

      /*  db.collection("Productos").onSnapshot((querySnapshot) =>{
            const car = [];
            querySnapshot.forEach((doc) => {
                if(doc.data().id == id){
                    car.push({...doc.data(), id:doc.id})
                }
            });
            setCarrito(car);
        })


        db.collection("Carrito").doc().set(carrito);
          
        */
      };

   
   useEffect(() => {
       getProductos();
   }, []);
   
        return (
            
            <div className="ComoComprar">
                <div className="contenedor-info">
                    <img src={imagen} alt="Imagen registro" />
                    <div className = "info">
                        <h2>Menu</h2>
                        <p>Descubre los mejores platillos creados con el mejor sazon casero</p>
                    </div>
                </div>

                <h1>Menu</h1>

                        {menu.map(men => {
                        return   <div className="grupos-pasos" key={men.id}>
                               <div className="pasos">
                               <h4>{men.nombre}</h4>
                                <img src={men.foto} alt="" />
                                <p>{men.descripcion}</p>
                                </div>
                                <div className="price">
                            <div>
                                <h4>Precio:</h4>
                            </div>
                            <div>
                                <h4 className="ahora">${men.precio}</h4>
                            </div>
                        </div>
                        
                        <div className="cars">
                            <div>
                            
                            <input type="number" className="form-control" min="1" value={men.cantidad} />
                           
                            </div>
                            <button className="butto" onClick={() => AddCars(men.id)}><i className="material-icons">add_shopping_cart</i> Agregar al carrito</button>
                        </div>
                               </div>
               
                        })}
                    </div>
        );
}

export default Menu;