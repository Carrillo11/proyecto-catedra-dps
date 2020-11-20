import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Inicio extends Component {
    render() { 
        return (
            <div className="Inicio">
                <h1>Mira lo que tenemos para ti 👀 </h1>
                <div class="row">
                <div class="col-sm-6 p-2">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Menu 😋 </h5>
                        <img class="card-img-top" src="https://qpasa.com/wp-content/uploads/2019/12/19bb88e9cca1b95fd2533377ce40e206-696x392.jpg" alt="Card image cap"></img>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <button  type="button" class="btn btn-light"> 
                        <Link to="/menu"><i class="las la-utensils"></i> Menú </Link>
                        </button>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6 p-2">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Promociones 👀</h5>
                        <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR70LoZKoHsHl76CyN2EiDSCEzjBiFCFeC88g&usqp=CAU" height='392px' alt="Card image cap"></img>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <button  type="button" class="btn btn-light"> 
                        <Link to="/promo"><i class="las la-shopping-bag"></i>Promociones </Link>
                        </button>
                    </div>
                    </div>
                </div>
                </div>
                
            </div>
        );
    }
}
 
export default Inicio;