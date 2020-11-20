import React, { useState, useContext } from 'react';
import { fire, db } from './../../firebase';

import Swal from 'sweetalert2';

//Importamos la imagen de la pagina
import imagen from '../elementos/img/carrito.jpg';

// Importar el contexto
import { UserContext } from './../../Contexto/Contexto';

function Carrito() {
    let { carrito } = useContext(UserContext);

    const cambiarCantidad = async (valorNuevo, id) => {
        const producto = carrito.filter(producto => producto.id === id);

        const infoProducto = {
            nombre: producto[0].nombre,
            descripcion: producto[0].descripcion,
            precio: producto[0].precio,
            cantidad: valorNuevo,
            idUsuario: producto[0].idUsuario
        }

        await db.collection("Carrito").doc(id).update(infoProducto);
    };

    const eliminarProducto = id => {
        Swal.fire({
            title: '¿Está seguro?',
            text: "Se eliminará el producto del carrito",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                db.collection("Carrito").doc(id).delete()
                .then(() => {
                    Swal.fire('Producto eliminado del carrito', 'El producto se eliminó correctamente', 'success')
                })
                .catch(error => {
                    Swal.fire('Error', error.message, 'error')
                });
            }
        })
    };

    return (
        <div className="Carrito">
            <div class="contenedor-info">
                <img src={imagen} alt="Imagen registro " />
                <div class="info">
                    <h2>Carrito de compras</h2>
                    <p>Aquí puedes ver los productos que has agregado al carrito y finalizar tu compra.</p>
                </div>
            </div>
            <h1>Carrito</h1>
            <div className="contenedor-carrito">
                {
                    carrito.map(producto => (
                        <div className="producto" key={producto.id}>
                            <header>
                                <i class="las la-times" onClick={() => eliminarProducto(producto.id)}></i>
                            </header>
                            <div className="contenido">
                                <p>Producto:</p>
                                <p>{producto.nombre}</p>
                            </div>
                            <div className="contenido">
                                <p>Descripcion:</p>
                                <p>{producto.descripcion}</p>
                            </div>
                            <div className="contenido">
                                <p>Precio:</p>
                                <p>${(producto.precio)}</p>
                            </div>
                            <div className="contenido">
                                <p>Cantidad:</p>
                                <input type="number" min="1" value={producto.cantidad} onChange={e => { cambiarCantidad(e.target.value, producto.id) }} />
                            </div>
                            <div className="contenido">
                                <p>TOTAL:</p>
                                <p class="total">${(producto.precio * producto.cantidad).toFixed(2)}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h3>Total de carrito:</h3>
            <div className="contenedor-carrito">
                <div className="total-compra">
                    <div className="contenido">
                        <p>SUBTOTAL</p>
                        <p>${(carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0)).toFixed(2)}</p>
                    </div>
                    <div className="contenido">
                        <p>TOTAL</p>
                        <p>${((carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0)) * 1.13).toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <div className="contenedor-boton-compra">
                <button class="boton-compra">Finalizar compra</button>
            </div>
        </div>
    );
}
 
export default Carrito;