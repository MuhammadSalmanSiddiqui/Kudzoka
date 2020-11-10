import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bg4 from './Assets/family.png';
import logo from './Assets/k final-01[2251].png';
import TOP from "./Assets/top corner-01.png"
import footer from "./Assets/top waves transparent-01[2271].png"
import footer2 from "./Assets/bottom  waves-01[2266].png"
import bg2 from "./Assets/trolly-01[2275].png"
import superfast from "./Assets/super.png"
import route from "./Assets/route.png"
import real from "./Assets/real (1).png"
import demand from "./Assets/demand (1).png"
import variable from "./Assets/variable.png"
import round from "./Assets/round.png"
import appstore from "./Assets/app-store-badge.png"
import playstore from "./Assets/en_badge_web_generic.png"
import fb from "./Assets/facebook.png"
import what from "./Assets/whatsapp.png"
import insta from "./Assets/insta.png"




import './landingStyle.css';

import axios from "axios";


export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            displayPurple:false
        };
    }

    componentDidMount() {
        // window.onscroll = function() {
        //     if(window.pageYOffset === 0) {
        //         document.getElementById('header').classList.remove("scrolled");
        //     }
        //     else{
        //         document.getElementById('header').classList.add("scrolled");
        //     }
        // };
    }

    render() {
        return (
          <div>
              <header>
                  <nav id="header" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                      <div className="container-fluid">
                          <a className="navbar-brand" href="#"><img src={logo} alt="" width="250px"
                                                                    width="260px"/></a>
                          <button className="navbar-toggler" type="button" data-toggle="collapse"
                                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                  aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                          </button>

                          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav ml-lg-auto">
                                  <li className="nav-item ">
                                      <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link">Services</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link">About Us</a>
                                  </li>

                                  <li className="nav-item">
                                      <a className="nav-link">Help Center</a>
                                  </li>
                                  <li className="nav-item">
                                      <Link to="/login" className="nav-link text-info bg-light">Login</Link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </nav>
              </header>
              <div className="jumbotron jumbotron-fluid height100p banner" id="home">
                  <div className="container h100">
                      <div className="contentbox h100">
                          <div>
                              <div className="col-lg-6"></div>
                              <div className="col-lg-10 offset-lg-5 " style={{position: "relative", top: "-30px"}}>
                                  <h3 data-aos="fade-up" data-aos-duration="1000"
                                      data-aos-delay="0" className="text-primary" style={{fontSize: "3em"}}><strong>You
                                      Sell it We Deliver It.</strong></h3>
                                  <p data-aos="fade-up" data-aos-duration="1000"
                                     data-aos-delay="0" className="text-primary">Leave the logistics to us while you
                                      focus on your customers and your products</p></div>
                          </div>
                      </div>
                  </div>
              </div>
              <section className="sec2" id="about us">

              </section>
              <section className="sec4 my-5" id="services">

              </section>
              <section className="sec5" id="contact">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-6 offset-lg-4 my-5">
                              <h1 style={{color: "purple"}}>Download the app</h1>
                              <img src={appstore} alt="" width="360px" height="120"/><br/>
                              <img src={playstore} alt="" width="360px" height="120"/>
                          </div>
                      </div>
                  </div>
              </section>


          </div>
        );
    }
}

