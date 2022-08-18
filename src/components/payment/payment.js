import React from 'react';
import Footer from '../layout/footer';
import Header from '../layout/header';
import './css.css';
import { CartProvider, useCart } from "react-use-cart";
import img from "./card_img.png"
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';
import { arrow } from '@popperjs/core';
function Payment() {
    const {
        
        emptyCart
      } = useCart();
  
    return (
        <section className = "py-4 container">
          <div><Header/></div>        
                <a class="back-btn" href="/cart" >BACK</a>
                <section class="sec1">
                    <div class="container">
                        <form action="">
                            <div class="row">
                                <div class="col">
                                    <h3 class="title">billing address</h3>

                                    <div class="inputBox">
                                        <span>FULL NAME :</span>
                                        <input type="text" placeholder="Aravind.."></input>
                                    </div>

                                    <div class="inputBox">
                                        <span>EMAIL :</span>
                                        <input type="email" placeholder="****@example.com"></input>
                                    </div>

                                    <div class="inputBox">
                                        <span>ADDRESS :</span>
                                        <input type="text" placeholder="HOUSE:NO - Street"></input>
                                    </div>

                                    <div class="inputBox">
                                        <span>CITY :</span>
                                        <input type="text" placeholder="HYDERABAD"></input>
                                    </div>

                                    <div class="flex">
                                        <div class="inputBox">
                                            <span>STATE :</span>
                                            <input type="text" placeholder="INDIA"></input>
                                        </div>


                                        <div class="inputBox">
                                            <span>ZIP CODE:</span>
                                            <input type="text" placeholder="123456"></input>
                                        </div>

                                    </div>

                                </div>

                                <div class="col">

                                    <h3 class="title">PAYMENT</h3>

                                    <div class="inputBox">
                                        <span>cards accepted :</span>
                                        <img src={img} alt=""></img>
                                    </div>

                                    <div class="inputBox">
                                        <span>name on card :</span>
                                        <input type="text" placeholder="mr. ARAVIND"></input>
                                    </div>

                                    <div class="inputBox">
                                        <span>credit card number :</span>
                                        <input type="number" placeholder="1111-2222-3333-4444"></input>
                                    </div>

                                    <div class="inputBox">
                                        <span>exp month :</span>
                                        <input type="text" placeholder="JANUARY"></input>
                                    </div>

                                    <div class="flex">

                                        <div class="inputBox">
                                            <span>exp year :</span>
                                            <input type="number" placeholder="2022"></input>
                                        </div>

                                        <div class="inputBox">
                                            <span>CVV :</span>
                                            <input type="text" placeholder="123"></input>
                                        </div>

                                    </div>
                                </div>
                        
                            </div>
                        <a className='btn btn-primary arr' href="/exit" onClick={() => emptyCart() } >PAY</a>
                        
                        
                        </form>
                    </div>    
                </section>

          <div><Footer/></div>
        </section>
    );
}

export default Payment;