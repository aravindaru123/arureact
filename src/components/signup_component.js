import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import "./css.css/signin.css"
// import axios from 'axios';

export default class SignUp extends Component {

        constructor(props) {
          super(props);
          this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
          };
          this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleSubmit(e) {
          e.preventDefault();
          const { fname, lname, email, password } = this.state;
          console.log(fname, lname, email, password);
          fetch("https://restoaru.herokuapp.com/register", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              fname,
              email,
              lname,
              password,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data, "userRegister");
            });

          // const reg = {
          //   fname: this.state.fname,
          //   lname: this.state.lname,
          //   email: this.state.email,
          //   password: this.state.password
          // }
          // axios.post("http://localhost:5000/register",reg)
          //   .then(response => console.log(response.data));
        }

  render() {
    return (
       <div class="container">
          <div class="row">
              <div class="mt-4 col-md-12 text-center"><h2 class="title">The flavors of life are just a bite away</h2></div>
              <div class="mt-2 border p-4 col-md-6 ltc"></div>

                  <div class="col-md-6">
                      <div class="signup-form">


                        <form onSubmit={this.handleSubmit} class="mt-2 border p-4 bg-light shadow custom-fix needs-validation" novalidate>
                              <h3 class="mb-4 ">Create Your Account</h3>
                              <div class="row">
                                  <div class="mb-3 col-md-6">
                                      <label for="validationFirstName">First Name</label>
                                      <input id="validationFirstName" 
                                             type="text" name="fname" 
                                             class="form-control" 
                                             required placeholder="Enter First Name"
                                             onChange={(e) => this.setState({ fname: e.target.value})}></input>
                                      
                                      <div class="invalid-feedback">
                                        Please choose a first name.
                                      </div>
                                      <div class="valid-feedback">
                                        Looks good!
                                      </div>
                                  </div>

                                  <div class="mb-3 col-md-6">
                                      <label for="validationLastName">Last Name</label>
                                      <input id="validationLastName" type="text" 
                                              name="lname" class="form-control" 
                                              required placeholder="Enter Last Name"
                                              onChange={(e) =>this.setState({ lname: e.target.value})}></input>
                                      <div class="invalid-feedback">
                                        Please choose a last name.
                                      </div>
                                      <div class="valid-feedback">
                                        Looks good!
                                      </div>
                                  </div>

                                  <div class="mb-3 col-md-12">
                                      <label for="validationLastName">Email</label>
                                      <input id="validationEmail" type="email" 
                                              name="email" class="form-control" 
                                              required placeholder="Enter your email"
                                              onChange={e=>this.setState({ email: e.target.value})}></input>
                                      <div class="invalid-feedback">
                                        Please choose a email.
                                      </div>
                                      <div class="valid-feedback">
                                        Looks good!
                                      </div>
                                  </div>

                                  <div class="mb-3 col-md-12">
                                      <label for="validationPassword">Password</label>
                                      <input id="validationPassword" type="password" 
                                              name="password" class="form-control" 
                                              required placeholder="Enter Password"
                                              onChange={(e) =>this.setState({ password: e.target.value})}></input>
                                      <div class="invalid-feedback">
                                        Please choose a password.
                                      </div>
                                      <div class="valid-feedback">
                                        Looks good!
                                      </div>
                                  </div>
                                  <div class="mb-1 col-md-12 text-center">
                                      <button class="btn btn-primary">Sign Up</button>
                                  </div>
                                  <div class="mb-1 col-md-12 text-center">
                                      <a href="/sign-in">Sign In</a>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
          </div>
       </div>
    );
  }
}
