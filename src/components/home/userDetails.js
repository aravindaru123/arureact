import { Button } from "bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/footer";
import Header from "../layout/header";
import "./assets/css/style.css";
import img1 from "./user1.jpeg";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    fetch("https://restoaru.herokuapp.com/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  render() {
    return (
      <div>
        {/* Email  <h1>{this.state.userData.email}</h1> */}

       <Header/>
        <div class="body1">

  <div class= "sec" id="parallax">
    <h1>Welcome To AHL Resto </h1>
    <h1>“…the best Indian food You’ve ever had”</h1>
    </div>

    <section id="why-us" class="why-us">
        <div class="container">
          <div class="section-title">
            <h2>A effort to  <span>capture the regal heritage</span></h2>
            <p>Do you love spicy food? Try Our Spicy Curry Dishes, We strive to provide the best customer service so please make sure to add notes for any dish if needed!</p>
            <p><center><Link to="/menu"><button type="button" class="btn btn-primary">Explore Food</button></Link></center></p>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <div class="box">
                <span>01</span>
                <h4>Cozy Ambience</h4>
                <p>Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert</p>
              </div>
            </div>

            <div class="col-lg-4 mt-4 mt-lg-0">
              <div class="box">
                <span>02</span>
                <h4>Event Planning</h4>
                <p>Whether is it a first birthday, bachelor party, rehearsal dinner, Christmas party or anniversary we can accommodate you.</p>
              </div>
            </div>

            <div class="col-lg-4 mt-4 mt-lg-0">
              <div class="box">
                <span>03</span>
                <h4> Authentic Street</h4>
                <p>Instant Nostalgia – our street takes you back to your memories of home. Your tastebuds can take a trip to your favourite street cart chow</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
    
    <section class="gradient-custom">
  <div class="container my-5 py-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12">
        <div class="text-center mb-4 pb-2">
          <i class="fas fa-quote-left fa-3x text-white"></i>
        </div>

        <div class="card">
          <div class="card-body px-4 py-5">
          
            <div id="carouselDarkVariant" class="carousel slide carousel-dark" data-mdb-ride="carousel">
              
              <div class="carousel-indicators mb-0">
                <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="1"
                  aria-label="Slide 1"></button>
                <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="2"
                  aria-label="Slide 1"></button>
              </div>

          
              <div class="carousel-inner pb-5">
          
                <div class="carousel-item active">
                  <div class="row d-flex justify-content-center">
                    <div class="col-lg-10 col-xl-8">
                      <div class="row">
                        <div class="col-lg-4 d-flex justify-content-center">
                          <img src= {img1}
                            class="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" width="150"
                            height="150" />
                        </div>
                        <div
                          class="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                          <h4 class="mb-4">Maria Smantha - Local guide</h4>
                          <p class="mb-0 pb-3">
                          One of the Best Place to have delicious indian food. Not only the ambience was excellent but their food as well as their service was amazing. Their entire staff was decent and courteous but we were attend by “Mayur Jadeja”. Very polite and attentive. Overall we had pleasant experience and we are certainly driving an 1 hour for another treat
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

        
                 <div class="carousel-item">
                  <div class="row d-flex justify-content-center">
                    <div class="col-lg-10 col-xl-8">
                      <div class="row">
                        <div class="col-lg-4 d-flex justify-content-center">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                            class="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" width="150"
                            height="150" />
                        </div>
                        <div
                          class="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                          <h4 class="mb-4">Karan Ahuja - Local Guide</h4>
                          <p class="mb-0 pb-3"> I have been there many times and have not found a better place with such nice ambience, food, service, and "Tasty food" .Hot chicken  Tikka is super spicy but worth the burn as flooded with flavors.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
              <button class="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
        
          </div>
        </div>

        <div class="text-center mt-4 pt-2">
          <i class="fas fa-quote-right fa-3x text-white"></i>
        </div>
      </div>
    </div>
  </div>
</section>

    <Footer/>

      </div>
    );
  }
}