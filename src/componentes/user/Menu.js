import React, { useEffect, useState, useContext  } from 'react';
import { db } from "../../firebase";
import Swal from "sweetalert2";
import { UserContext } from "../../Contexto/Contexto";

//Importamos la imagen de la pagina
import imagen from '../elementos/img/menu.jpg';

const Menu = () => {
   const [menu, setMenu] = useState([]);
   let { user } = useContext(UserContext);


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
//En dado caso se actuaize un nuevo pedido, crearemos una funcion para que este pendiente de los camnios
   const cambiarCantidad = async (valorNuevo, id) => {
    const producto = menu.filter(producto => producto.id === id);

    const infoProducto = {
        nombre: producto[0].nombre,
        descripcion: producto[0].descripcion,
        precio: producto[0].precio,
        cantidad: valorNuevo,
        foto: producto[0].foto
    }

    await db.collection("Productos").doc(id).update(infoProducto);
};

    const AddCars = async (id) => {
        const producto = menu.filter(producto => producto.id === id);

        const infoProducto = {
        nombre: producto[0].nombre,
        descripcion: producto[0].descripcion,
        precio: producto[0].precio,
        cantidad: producto[0].cantidad,
        idUsuario: user.uid,
        foto: producto[0].foto
    }
             db.collection("Carrito").doc().set(infoProducto);
        Swal.fire({
            text: "Se agrego exitosamente!"
        })
        

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
                            
                            <input type="number" className="form-control" min="1" value={men.cantidad} onChange={e => { cambiarCantidad(e.target.value, men.id) }} />
                           
                            </div>
                            <button className="butto" onClick={() => AddCars(men.id)}><i className="material-icons">add_shopping_cart</i> Agregar al carrito</button>
                        </div>
                               </div>
               
                        })}
                    </div>
        );
}

export default Menu;