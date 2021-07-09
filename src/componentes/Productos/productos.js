//importamos las librerias a utilizar
import React, { useEffect, useState } from "react";
import ProductosForm from "./productosForm";

import { db } from "../../firebase";
import { toast } from "react-toastify";
// creacion del componenete 
const Productos = () => {
  const [Productos, setProductos] = useState([]);
  const [currentId, setCurrentId] = useState("");
 
// Obtenemos los id de cada Producto
  const getProductos = async () => {
    db.collection("Productos").onSnapshot((querySnapshot) => {
      const docs = [];
      //Se guarda dicho query
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductos(docs);
    });
  };

  //Funcion para eliminar dicho registro
  const onDeleteProducto = async (id) => {
    //Si si respuesta es confirmada el producto se elimina
    if (window.confirm("Estas seguro de eliminar este producto?")) {
      await db.collection("Productos").doc(id).delete();
      toast("Se elimino un Producto", {
        type: "error",
        //autoClose: 2000
      });
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  // Se agrega o edita un producto por lo cual se le esta creando una funcion
  const addOrEditProducto = async (ProductoObject) => {
    //intentamos encontrar un error en dado caso el programa no funcione o no encuentre conexion a la base de datos
    try {
      if (currentId === "") {
        await db.collection("Productos").doc().set(ProductoObject);
        toast("Se agrego un Producto", {
          type: "success",
        });
      } else {
        await db.collection("Productos").doc(currentId).update(ProductoObject);
        toast("Se actualizo un Producto", {
          type: "info",
        });
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };
//Creamos los formularios de como queremos que se presente la informacion
  return (
    <>    
      <div className="col-md-4 p-2">
        <h2>Agrega Nuevos Productos</h2>
        <ProductosForm {...{ addOrEditProducto, currentId, Productos }} />
      </div>

      <div className="col-md-8 p-2">
        <div class="container">
          <h2>Lista de Productos</h2>
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Promocion</th>
                <th>Aciones</th>
              </tr>
            </thead>
            <tbody>
              {Productos.map((Producto) => (
                <tr key={Producto.id}>
                  <td>{Producto.nombre}</td>
                  <td>{Producto.descripcion}</td>
                  <td>{Producto.precio}</td>
                  <td>{Producto.promo}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => setCurrentId(Producto.id)}>Editar</button>
                    &nbsp;
                    &nbsp;
                    <button className="btn btn-danger" onClick={() => onDeleteProducto(Producto.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

//Con export nos ayuda a poder utilizar su contenido de dicho componente 
export default Productos;
