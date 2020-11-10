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
// node.js library that concatenates classes (strings)
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
 
  Container,
  Row,
  Col
} from "reactstrap";
import { Route } from "react-router-dom";
// core components
import {
  chartOptions,
  parseOptions} from "variables/charts.js";
import AdminNavbar from "components/Navbars/LandingNavbar.js";
import AdminFooter from "components/Footers/LandingFooter";
import Header from "components/Headers/LandingHeader.js";
import routes from "routes.js";
// import 


class Landingpage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1"
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }

  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.mainContent.scrollTop = 0;
  }

  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };


  render() {
    return (
      <>
      
        <div className="main-content" ref="mainContent">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
           <>
        <Header />
        {/* Page content */}
        <Container style={{paddingBottom:10}}className="mt--5 mb-xl-4  mb-9" fluid>
          <Row className="  justify-content-center   mb-4 mb-xl-0" xl="9">
            <Col className="  justify-content-center   mb-5 mb-xl-0" xl="8">
              <Card className="shadow ">
               
                <CardBody >
                <Row style={{justifyContent:"center",alignItems:"center",alignContent:"center"}}>
              <div >
                <span style={{ fontSize: 18, fontWeight: "bold",height:0 }}className="text-dark ">Our Partner </span>
              </div>
              </Row>
              <Row style={{justifyContent:"center",alignItems:"center",alignContent:"center"}} xl="15">
              <img  style={{paddingLeft:0}} className="justify-content-center  justify-content-center mb-2 mb-xl-2" xl="0"src={require('./../../assets/img/brand/Image1.png')} >
              
              </img>
              <img style={{paddingLeft:0}}className="justify-content-center  justify-content-center mb-0 mb-xl-2" xl="0"  src={require('./../../assets/img/brand/Image2.png')} >
              
              </img>

              <img style={{paddingLeft:0}}className="justify-content-center  justify-content-center mb-0 mb-xl-1" xl="0"  src={require('./../../assets/img/brand/Image3.png')} >
              
              </img>

              <img style={{paddingLeft:0}}className="justify-content-center  justify-content-center mb-2 mb-xl-1" xl="0"  src={require('./../../assets/img/brand/Image4.png')} >
              
              </img>
              </Row>
                  
                </CardBody>
              </Card>
            </Col>
           
          </Row>
          <Row className=" justify-content-center  justify-content-center mb-2 mb-xl-0 mt-5" xl="9" >
            <Col className="mb-5 mb-xl-2" xl="3">
              <Card className="shadow">
                <CardHeader className="border-0">
                <Container  className="mt--5" fluid style={{width:150,height:100,}}>
               

            <img style={{paddingRight:30}}   src={require('./../../assets/img/brand/delivery.png')} >
            </img>
             </Container >      
                <Row className="justify-content-center  justify-content-center mb-0 mb-xl-4" xl="9">
              <div >
                <span style={{ fontSize: 15, fontWeight: "bold",height:0 }}className="text-dark ">Super fast delivery </span>
              </div>
            <Container style={{width:200,height:100,}}>
            <div >
                <span style={{ fontSize: 11, fontWeight: "bold",height:0 }}className="text-dark ">We’ll only need 45-60 minutes to get your product into your customer’s hands  </span>
              </div>
             </Container>   

              </Row>
                </CardHeader>
              
              </Card>
            </Col>
            <Col className="mb-5 mb-xl-0" xl="3">
            <Card className="shadow">
                <CardHeader className="border-0">
                <Container  className="mt--5" fluid style={{width:150,height:100,}}>
               

            <img style={{paddingRight:30}}   src={require('./../../assets/img/brand/navigation.png')} >
            </img>
             </Container >      
                <Row className="justify-content-center  justify-content-center mb-0 mb-xl-4" xl="9">
              <div >
                <span style={{ fontSize: 15, fontWeight: "bold",height:0 }}className="text-dark ">Route optimization </span>
              </div>
            <Container style={{width:200,height:100,}}>
            <div >
                <span style={{ fontSize: 11, fontWeight: "bold",height:0 }}className="text-dark ">Careem’s advanced mapping and dispatching tech finds the fastest, cheapest route for you  </span>
              </div>
             </Container>   

              </Row>
                </CardHeader>
              
              </Card>
            </Col>
            <Col className="mb-5 mb-xl-0" xl="3">
            <Card className="shadow">
                <CardHeader className="border-0">
                <Container  className="mt--5" fluid style={{width:150,height:100,}}>
               

            <img style={{paddingRight:30}}   src={require('./../../assets/img/brand/map.png')} >
            </img>
             </Container >      
                <Row className="justify-content-center  justify-content-center mb-0 mb-xl-4" xl="9">
              <div >
                <span style={{ fontSize: 15, fontWeight: "bold",height:0 }}className="text-dark ">Real-time tracking </span>
              </div>
            <Container style={{width:200,height:100,}}>
            <div >
                <span style={{ fontSize: 11, fontWeight: "bold",height:0 }}className="text-dark ">Check in any time to see where your delivery is and when it’ll reach your customer</span>
              </div>
             </Container>   

              </Row>
                </CardHeader>
              
              </Card>
            </Col>
          </Row>

          <Row className=" justify-content-center  justify-content-center mb-5 mb-xl-0 mt-5" xl="9" >
            <Col className="mb-5 mb-xl-0" xl="3">
            <Card className="shadow">
                <CardHeader className="border-0">
                <Container  className="mt--5" fluid style={{width:150,height:100,}}>
               

            <img style={{paddingRight:30}}   src={require('./../../assets/img/brand/24-hours.png')} >
            </img>
             </Container >      
                <Row className="justify-content-center  justify-content-center mb-0 mb-xl-4" xl="9">
              <div >
                <span style={{ fontSize: 15, fontWeight: "bold",height:0 }}className="text-dark ">On-demand / <br></br>
same-day delivery </span>
              </div>
            <Container style={{width:200,height:75,}}>
            <div >
                <span style={{ fontSize: 11, fontWeight: "bold",height:0 }}className="text-dark ">We’ll only need 45-60 minutes to get your product into your customer’s hands  </span>
              </div>
             </Container>   

              </Row>
                </CardHeader>
              
              </Card>
            </Col>
            <Col className="mb-5 mb-xl-0" xl="3">
            <Card className="shadow">
                <CardHeader className="border-0">
                <Container  className="mt--5" fluid style={{width:150,height:100,}}>
               

            <img style={{paddingRight:30}}   src={require('./../../assets/img/brand/payment.png')} >
            </img>
             </Container >      
                <Row className="justify-content-center  justify-content-center mb-0 mb-xl-4" xl="9">
              <div >
                <span style={{ fontSize: 15, fontWeight: "bold",height:0 }}className="text-dark ">Variable pricing </span>
              </div>
            <Container style={{width:200,height:100,}}>
            <div >
                <span style={{ fontSize: 11, fontWeight: "bold",height:0 }}className="text-dark ">Growing from 30 to 300 deliveries a week? Take advantage of our volume-based discounts</span>
              </div>
             </Container>   

              </Row>
                </CardHeader>
              
              </Card>
            </Col>
            <Col className="mb-5 mb-xl-0" xl="3">
            <Card className="shadow">
                <CardHeader className="border-0">
                <Container  className="mt--5" fluid style={{width:150,height:100,}}>
               

            <img style={{paddingRight:30}}   src={require('./../../assets/img/brand/timer.png')} >
            </img>
             </Container >      
                <Row className="justify-content-center  justify-content-center mb-0 mb-xl-4" xl="9">
              <div >
                <span style={{ fontSize: 15, fontWeight: "bold",height:0 }}className=" text-center text-dark ">Round-the-clock <br></br>
support </span>
              </div>
            <Container style={{width:200,height:75,}}>
            <div >
                <span style={{ fontSize: 9, fontWeight: "bold",height:0 }}className="text-dark ">We’ll only need 45-60 minutes to get your product into your customer’s hands  </span>
              </div>
             </Container>   

              </Row>
                </CardHeader>
              
              </Card>
            </Col>
          </Row>
          <Row className=" justify-content-center  justify-content-center mb-5 mb-xl-0 mt-5" xl="9" >
            <Col className="mb-5 mb-xl-4" xl="5">
              <Card className="shadow">
                <CardHeader className="border-0">
                <Row className="justify-content-center  justify-content-center mb-0 mb-xl-4" xl="9">
              <div >
                <span style={{ fontSize: 18, fontWeight: "bold",height:0 }}className="text-dark ">Download the app </span>
              </div>
              </Row>
              <Row className="justify-content-center  justify-content-center mb-2 mb-xl-4" xl="9">
              <img  style={{paddingLeft:20}}className="justify-content-center  justify-content-center mb-2 mb-xl-4" xl="4"src={require('./../../assets/img/brand/Image9.png')} >
              
              </img>
              <img style={{paddingLeft:20}}className="justify-content-center  justify-content-center mb-2 mb-xl-4" xl="4"  src={require('./../../assets/img/brand/Image10.png')} >
              
              </img>
              </Row>
                </CardHeader>
              
              </Card>
            </Col>
           
            
          </Row>
        </Container>
      </>
            <AdminFooter />
          
        </div>
      </>
    );
  }
}




 

export default Landingpage;
