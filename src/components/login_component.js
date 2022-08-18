import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./css.css/signin.css"
import Header from "./layout/header";
import Footer from "./layout/footer";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        console.log(email, password);
        fetch("https://restoaru.herokuapp.com/login-user", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
        
            if (data.status == "ok") {
              alert("login successful");
              window.localStorage.setItem("token", data.data);
              window.location.href = "./userDetails";
            }
          });
      }


  render() {
    return (  
        
        <div class="signtop">
            {/* <div><Header/></div> */}
          <div class ="container" id="con">
              <div class ="row">
                  <div class="mt-4 col-md-12 text-center"><h2 class="title">The flavors of life are just a bite away</h2></div>
                  <div class="mt-2 border p-4 col-md-6 ltc"></div>
      
                  <div class ="col-md-6">
                      <div class="signin-form">

                          <form onSubmit={this.handleSubmit} class="mt-5 border p-4 bg-light shadow custom-fix">
                              <h3 class="mb-4 ">Sign-In</h3>
                              <div class="row">
                                  <div class="mb-3 col-md-6">
                                      <label for="email">E-mail address</label>
                                      <input type ="email" id="email" 
                                                name="email" class="form-control" 
                                                placeholder="Enter email "
                                                onChange={(e) => this.setState({ email: e.target.value })}>

                                       </input>
                                  </div>
                                  
                                  <div class="mb-3 col-md-12">
                                      <label>Password</label>
                                      <input type ="password" 
                                                name="password" class="form-control" 
                                                placeholder="Enter Password"
                                                onChange={(e) => this.setState({ password: e.target.value })}
                                       ></input>
                                  </div>
      
                                  <div class="mb-1 col-md-12 text-center">
                                      <button type="submit" class="btn btn-primary">Sign In</button>
                                  </div>

                                  <div class="mb-1 col-md-12 text-center">
                                      <a href="/sign-up">SignUp</a>
                                  </div>
                                
                              </div>
                          </form>
                      </div>
                  </div>
                </div>
          </div>
          {/* <div class="footer"><Footer/></div> */}
        </div>
        
   
    );
  }
}