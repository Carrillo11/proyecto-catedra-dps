import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './BarraCarrito.css';

class BarraCarrito extends Component {
    render() { 
        return ( 
            <div className="carritoBar">
                <span>0 items -</span>
                <span>$0.00 <i class="las la-shopping-cart"></i></span>
            </div>
         );
    }
}
 
export default BarraCarrito;