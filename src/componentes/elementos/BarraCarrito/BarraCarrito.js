import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './BarraCarrito.css';

// Importar el contexto
import { UserContext } from './../../../Contexto/Contexto';

function BarraCarrito() {
    let { carrito } = useContext(UserContext);

    return ( 
        <div className="carritoBar">
            <Link to="/carrito">
                <span>{carrito.length} items -</span><span>${(carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0)).toFixed(2)} <i class="las la-shopping-cart"></i></span>
            </Link>
        </div>
    );
}
 
export default BarraCarrito;