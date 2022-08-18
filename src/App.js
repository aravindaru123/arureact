import React from "react";
// import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/home/userDetails";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Menu from "./components/menu/menu_component";
import { CartProvider } from 'react-use-cart';
import Cart from "./components/cart";
import Payment from "./components/payment/payment";
import Exit from "./components/payment/exit";


function App() {
  return (
    <>
    
     <CartProvider>
      <Router>
       <div className="App">
         <div className="auth-wrapper">
           <div className="auth-inner">
           
             <Routes>
            
                  <Route exact path="/" element={<Login />} />
                  
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/userDetails" element={<UserDetails />} />
                  <Route path="/menu" element={<Menu />} />
                 <Route path="/cart" element={<Cart />} />
                 <Route path="/payment" element={<Payment />} />
                 <Route path="/exit" element={<Exit />} />
                 
             </Routes>
          
            
           </div>
         </div>
       </div>
    </Router>
                  
                    
                                {/* <Cart path="/cart"/> */}
                    
                  </CartProvider>
    </>
    
  );
}

export default App;
