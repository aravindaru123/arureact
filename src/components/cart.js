import React from 'react';
// import Header from '../layout/header'
import { CartProvider, useCart } from "react-use-cart";
import Footer from './layout/footer';
import Header from './layout/header';
import './ui.css';

function Cart() {
    const {
      isEmpty,
      totalUniqueItems,
      totalItems,
      items,
      updateItemQuantity,
      removeItem,
      cartTotal,
      emptyCart
    } = useCart();

    if (isEmpty) return (
        <div>
            <div><Header/></div>
            <div className='emptycart'>
                <p>Your cart is empty</p>
            </div>
            <div><Footer/></div>

        </div>
    );

    return (
      <section className = "py-4 container">
        <div><Header/></div>
        <div className='row justify-content-center'>
            <div className='col-12'>
                <h3>
                    Cart ({totalUniqueItems}) Total Items: ({totalItems})
                </h3>

                <table className='table table-light table-hover m-0'>
                    <tbody>
                        {items.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>
                                        <img src={item.img} style={{height: '6rem'}}>
                                        </img>

                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>Quantity ({item.quantity})</td>
                                    <td>
                                    <button className="btn btn-primary btn-sm btn-info" onClick={() => updateItemQuantity(item.id, item.quantity - 1 ) }>
                                        -
                                        </button>
                                        <button className="btn btn-primary btn-sm btn-info" onClick={() => updateItemQuantity(item.id, item.quantity + 1) }>
                                        +
                                        </button>
                                        <button className="btn btn-primary btn-sm btn-info" onClick={() => removeItem(item.id) }>
                                        Remove
                                        </button>
                                    </td>


                                </tr>

                            )
                        })}
                    </tbody>

                </table>
                <h3>Total Price :$ {cartTotal}</h3>
                <button className="btn btn-primary btn-sm btn-info" onClick={() => emptyCart() }>
                                        Clear cart
                                        </button>
            </div>
            <a className="abc text-center" aria-current="page" href="/payment">Pay Now</a>

        </div>
        <div><Footer/></div>
      </section>



    );
  }

  export default Cart;
