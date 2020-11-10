
/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {   Container, Row,Button,  } from "reactstrap";

class LandingHeader extends React.Component {
  render() {
    return (
      <>
        <div style={{background:'linear-gradient(to right, #92278F, #25AAE1)'}}className=" pb-7 pt-8 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row className="justify-content-center  justify-content-center mb-0 mb-xl-0" xl="9">
              <div >
                <span style={{ fontSize: 20, fontWeight: "bold",height:0 }}className="text-light ">You sell it </span>
              </div>
              </Row>
              <Row className="justify-content-center  justify-content-center mb-0 mb-xl-0" xl="9">
              <div >
                <span style={{ fontSize: 20, fontWeight: "bold",height:0 }}className="text-light ">We deliver it .</span>
              </div>
              </Row>
              <Row className="justify-content-center  justify-content-center mb-0 mb-xl-0" xl="9">
              <div >
                <span style={{ fontSize: 10, fontWeight: "bold",height:0 }}className="text-light ">Leave the logistics to us while you focus on your </span>
              </div>
              </Row>
              <Row className="justify-content-center  justify-content-center mb-0 mb-xl-4" xl="9">
              <div >
                <span style={{ fontSize: 10, fontWeight: "bold",height:0 }}className="text-light ">customers and your products. </span>
              </div>
              </Row>
              <Row className="justify-content-center  justify-content-center mb-0 mb-xl-0" xl="9">
              <div >
              <Button style={{ width: 100, textAlign: 'center', borderRadius: 2 }} color="light">JoinUs</Button>{' '}
              </div>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default LandingHeader;
