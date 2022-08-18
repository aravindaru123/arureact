import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./styles.css";

export default class Footer extends Component {
render() {
    return (  
        <footer id="footer">
            <div class="container">
                <h3>AHL Resto</h3>
                <p>Run by the professional chefs chosen from all over india.</p>
                {/* <div class="social-links">
                    <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                    <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                    <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                </div> */}
                <div class="copyright">
                    &copy; Copyright <strong><span>AHL group</span></strong>. All Rights Reserved
                </div>
                <div class="credits">
                    <a> Designed by AHL group</a>
                </div>
            </div>
        </footer>
    );
  }
}