import React from 'react';
import { Link } from 'react-router-dom';

import './BarraCarrito.css';

function BarraCarrito() {
    return ( 
        <div className="carritoBar">
            <Link to="/carrito">
                <span>0 items -</span><span>$0.00 <i class="las la-shopping-cart"></i></span>
            </Link>
        </div>
    );
}
 
export default BarraCarrito;