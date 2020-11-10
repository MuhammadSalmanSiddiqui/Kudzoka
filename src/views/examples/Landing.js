import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import dman from "./Assets/dman.png";
import footer from "./Assets/footer1.png";
import whatsapp from "./Assets/whatsapp.png";
import insta from "./Assets/insta.png";
import left from "./Assets/left.png";
import mid from "./Assets/middle.png";
import right from "./Assets/right.png";
import uleft from "./Assets/uleft.png";
import umid from "./Assets/umid.png";
import uright from "./Assets/uright.png";
import apple from "./Assets/apple.PNG";
import playstore from "./Assets/playstore.PNG";
import facebook from "./Assets/facebook-notRounded.png";
import kud from "./Assets/kud.png";
import Logo from "./Assets/argon-react.png";
import "../../assets/css/landingPage.css";

const Landing = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <div>
      <Navbar
        expand="lg"
        className="navbar py-2 py-md-3 py-lg-4 py-sm-2 px-2 px-md-4 px-lg-3 px-sm-2  upper-body"
      >
        <Navbar.Brand href="#home" className="app_logo">
          <img src={Logo} style={{ width: "230px" }} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setToggle(!toggle)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link className="navItem">
              Home <hr className="active-un" />{" "}
            </Nav.Link>
            <Nav.Link className="navItem">Services</Nav.Link>
            <Nav.Link className="navItem">About Us</Nav.Link>
            <Nav.Link className="navItem">Help Center</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <Link to="/login" className="login-btn text-decoration-none">
            Login / Signup
          </Link>
        </Form>
      </Navbar>

      <div style={{ backgroundColor: "#fff" }}>
        <img src={dman} style={{ width: "100%" }} />
        <div
          className={`divText ${
            toggle ? "topdivText" : ""
          } title__box  p-2 p-xl-5 p-lg-4 p-md-3 p-sm-2`}
        >
          <h1 class="title py-2 py-lg-4 py-md-3 py-sm-2">
            You Sell
            <span className="title__second"> it We</span>
            <span className="deliver"> Deliver it</span>
          </h1>
          <p className="subTitle">
            Leave the logistics to us, while you focus  on your customers &amp; Products.
          </p>
        </div>
      </div>

      <Row className="bodydiv">
        <Col xs={12} sm={4} lg={4} className="text-center" className="uleft">
          <img src={uleft} alt="" className="w-50 feature__image" />
          <div className={`feature`}>
            <h5 className="text-dark feature__title">Super Fast Delivery</h5>
            <p className="feature__desc">
              We only need 45-60 minutes to <br /> get your product into your{" "}
              <br /> costumer's hands.
            </p>
          </div>
          <img src={kud} className="kudimg" alt="" />
        </Col>
        <Col xs={12} sm={4} lg={4} className="text-center" className="umid">
          <img src={umid} alt="" className="w-50 feature__image" />

          <div className={`feature`}>
            <h5 className="text-dark feature__title">Real Time Tracking</h5>
            <p className="feature__desc">
              We only need 45-60 minutes to <br /> get your product into your{" "}
              <br /> costumer hands.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={4} lg={4} className="thirdbox ">
          <img src={uright} alt="" className="thirdimg" />
          <div className={`feature`}>
            <h5 className="text-dark feature__title">Discounts</h5>
            <p className="feature__desc">
              We only need 45-60 minutes to <br /> get your product into your{" "}
              <br /> costumer hands.
            </p>
          </div>
        </Col>
        <Col  xs={12}>
        <img src={kud} className="kudimg2" alt="" />
        </Col>

        {/* <Container>
          <Row> */}
        {/* <Col className="text-center row">
              <div className="mr-2 mr-xl-5 mr-lg-4 mr-md-3 uright1">
                <img src={kud} alt="" className="buis_img w-100" />
              </div>
            </Col> */}

        {/* <Col className="text-center row">
              <div className="ml-auto uright">
                <img src={uright} alt="" className="feature__image w-50" />
                <div className={`feature`}>
                  <h5 className="text-dark feature__title">Discounts</h5>
                  <p className="feature__desc">
                    We only need 45-60 minutes to <br /> get your product into
                    your <br /> costumer hands.
                  </p>
                </div>
              </div>
            </Col> */}
        {/* </Row>
        </Container> */}
      </Row>

      <Row className="bg-white">
        <Col xs={12} sm={4} lg={4} className="nnleft">
          <img src={left} alt="" className="left3rdimg" />
        </Col>
        <Col className="nnmid" xs={12} sm={4} lg={4}>
          <img src={mid} alt="" className="mid3rdimg" />
          <div className={`stats__info`}>
            <h3 className="stats__title">Round the Clock Support</h3>
            <p className="stats__desc">
              We only need 45-60 minutes to <br /> get your product into your{" "}
              <br /> costumer's hands.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={4} lg={4} className="nnright ">
          <img src={right} alt="" className="right3rdimg" />
        </Col>
      </Row>

      <div>
        <img src={footer} className="pictwobody" />

        <div  className="bg-white w-100 position-relative">
          <div className="py-3 px-5 foot-text">
            <div className="p-2 foot-section-1">
              <div className="downoad__sources">
                <div class="download__box">
                  <img
                    src={apple}
                    className="download__source-img curson-pointer"
                    alt=""
                  />
                  <div>
                    <div class="download__text">Download on</div>
                    <div class="download__source-name curson-pointer">
                      App Store
                    </div>
                  </div>
                </div>
                <div class="download__box">
                  <img
                    src={playstore}
                    className="download__source-img curson-pointer"
                    alt=""
                  />
                  <div className="pr-2">
                    <div class="download__text">Download on</div>
                    <div class="download__source-name curson-pointer">
                      PlayStore
                    </div>
                  </div>
                </div>
              </div>
              <Row >
                <Col xs={1}>
                  <img
                    src={insta}
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",

                    }}
                    alt=""
                  />
                </Col>
                <Col xs={1}>
                  <img
                    src={whatsapp}
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",
                    }}
                    alt=""
                  />
                </Col>
                <Col xs={1}>
                  <img
                    src={facebook}
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",
                    }}
                    alt=""
                  />
                </Col>
              </Row>
              <Row style={{marginTop:'1rem'}}>
                <Col xs={12} sm={3}>
                  <a>
                    <p className="footerlinks">Home</p>
                  </a>
                </Col>
                <Col xs={12} sm={3}>
                  <a>
                    <p className="footerlinks">Services</p>
                  </a>
                </Col>
                <Col xs={12} sm={3}>
                  <a>
                    <p className="footerlinks">About Us</p>
                  </a>
                </Col>
                <Col xs={12} sm={3}>
                  <a>
                    <p className="footerlinks">Help Center</p>
                  </a>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
