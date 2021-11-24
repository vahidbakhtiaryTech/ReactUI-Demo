import React from "react";
import logo from '../assert/img/logo.webp';


const Header = () => {
    return (

            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center justify-content-between">
                    <a href="index.html" class="logo"><img src={logo} alt="" class="img-fluid" /></a>
                    <nav id="navbar" class="navbar">
                        <ul>
                            <li><a class="nav-link scrollto active" href="#home">Home</a></li>
                            <li><a class="nav-link scrollto" href="#about">About</a></li>
                            <li><a class="nav-link scrollto" href="#collection">Collection</a></li>
                            <li><a class="nav-link scrollto " href="#roadmap">Roadmap</a></li>
                            <li><a class="nav-link scrollto" href="#club">Club</a></li>                           
                            <li><a class="nav-link scrollto" href="#faq">Faq</a></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header> 
    );
}

export default Header;

