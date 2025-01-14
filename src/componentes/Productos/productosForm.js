//importaciones de librerias y de componentes
import React, { useState, useEffect, useContext } from "react";
import { db } from "../../firebase";
import Swal from "sweetalert2";

const ProductosForm = (props) => {
  
  
  const initialStateValues = {
    nombre: "",
    descripcion: "",
    precio: "",
    promo: "",
    cantidad: 1,
    idUsuario:"",
    foto: "",
    descuento: "",
  };

  const [values, setValues] = useState(initialStateValues);
  


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.nombre != "" && values.descripcion != "" && values.precio !="" && values.foto !="" && values.promo !=""){

    props.addOrEditProducto(values);
    setValues({ ...initialStateValues });
    }else{
    Swal.fire({
      title: 'Llena todos los campos',
      text: "Te hace falta llenar campos revisa por favor",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'ok',
  })}
  };

  const getProductoById = async (id) => {
    const doc = await db.collection("Productos").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      //https://stackoverflow.com/questions/56059127/how-to-fix-this-error-function-collectionreference-doc
      if (props.currentId !== null && props.currentId !== undefined) {
        getProductoById(props.currentId);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentId]);

  return (
    <form onSubmit={handleSubmit} className="card card-body border-primary">
      
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
        <i class="las la-tags"></i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese nombre del producto"
          value={values.nombre }
          name="nombre"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">assignment</i>
        </div>
        <textarea
          rows = "3"
          value={values.descripcion}
          name="descripcion"
          placeholder="Describe el producto"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">exposure</i>
        </div>
        <input
          type="number"
          value={values.precio}
          name="precio"
          placeholder="Ingresa el precio del producto"
          className="form-control"
          onChange={handleInputChange}
        />
        <input 
        type="number"
        readonly="readonly"
        value={values.descuento = values.precio*0.50}
        name = "descuento"
        className="form-control"
        onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
        <i class="las la-photo-video"></i>
        </div>
        <input
          type="text"
          value={values.foto}
          name="foto"
          placeholder="Ingresa el link de tu foto"
          className="form-control"
          onChange={handleInputChange}
        />
        </div>
        <div className="form-group input-group">
        <div className="input-group-text bg-light">
        <i class="las la-city"></i>
        </div>
           <select className='form-control'  name = "promo" value={values.promo} onChange={handleInputChange}>
          <option >..selecciona una respuesta</option>
          <option >Si</option>
          <option >No</option>
        </select>
      </div>
      
     
      <button className="btn btn-primary btn-block">
        {props.currentId === "" ? "Guardar" : "Actualizar"}
      </button>
    </form>
  );
};

export default ProductosForm;