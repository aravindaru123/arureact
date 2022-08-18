import { Button } from "bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/footer";
import Header from "../layout/header";
import "./assets/css/style.css"

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
            <h2>An effort to  <span>capture the regal heritage</span></h2>
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
    <Footer/>

      </div>
    );
  }
}