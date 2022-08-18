import React from 'react';
import { useCart } from "react-use-cart";
import './css.css'
const Card = (props) => {
    const { addItem } = useCart();
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shadow">
                <img class="card-img-top " src={props.img} alt="image" ></img>
                <div class="card-body text-center">
                
                    <h3 class="card-title title">{props.title}</h3>
                    <p class="card-text">{props.description}</p>
                    <p class="card-text bbb">$ {props.price}</p>
                    <button className="btn " onClick={() => addItem(props.item)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
