import React from 'react';
import Card from './card'
import products from './products'
import Header from '../layout/header'
import Footer from '../layout/footer';
import './css.css'
const Menu = () => {
    console.warn(products.dataproduct);
    return (
        <div className='arr'>
            <div><Header/></div>


                <section className="py-4 container">
                        <h3 class="sub-heading"> our dishes </h3>
                        <h1 class="heading"> popular dishes </h1>
                    <div className="row justify-content-center">


                            {products.dataproduct.map((item, index)=>{
                                return(
                                    <Card img={item.img} title={item.title} description={item.description}  price= {item.price} item={item} key={index}/>
                                )
                            })}


                    </div>

                </section>

                <section className="py-4 container" id='specialdiv'>
                    <h1 className='text-center'>SPECIAL DISHES</h1>
                    <div className="row justify-content-center" id='specialdiv'>


                            {products.specialdata.map((item, index)=>{
                                return(
                                    <Card img={item.img} title={item.title} description={item.description} price= {item.price} item={item} key={index}/>
                                )
                            })}


                    </div>

                </section>


                {/* <div class="box">

                    <div class="image">
                        <img src="images/menu-1.jpg" alt=""></img>
                        <a href="#" class="fas fa-heart"></a>
                    </div>

                    <div class="content">

                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <h3>delicious food</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                        <a href="#" class="btn">add to cart</a>
                        <span class="price">$12.99</span>

                    </div>

                </div> */}


                <div><Footer/></div>
        </div>

    );
};

export default Menu;
