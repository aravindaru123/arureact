import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./styles.css";
import { CartProvider } from 'react-use-cart';
import Cart from "../cart";

export default class Header extends Component {
    render() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navigation-wrap">
                <div class="container">
                    <a class="navbar-brand" href="/userDetails">
                        <h1>AHL Resto</h1>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fas fa-stream navbar-toggler-icon"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/userDetails">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/userdetails">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/menu">Explore Foods</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/cart">Cart</a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="../order-history/order_history.html">Orders</a>
                            </li> */}

                        </ul>
                            {/* <CartProvider>
                                <Cart path="/cart"/>
                            </CartProvider> */}
                    </div>
                </div>
            </nav>
        </header>

    );
}
}
