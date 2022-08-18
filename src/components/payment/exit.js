import React from 'react';
import Footer from '../layout/footer';
import Header from '../layout/header';
import './css.css';
import img from "./Paymentsuccessfull.png"
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';
import { arrow } from '@popperjs/core';
function Exit() {
    return (
        <section className = "py-4 container">
          <div><Header/></div>        
                <a class="back-btn" href="/userdetails" >Home</a>
                <div className='arv'>
                    <img src={img} alt=""></img>
                </div>
                

          <div><Footer/></div>
        </section>
    );
}

export default Exit;