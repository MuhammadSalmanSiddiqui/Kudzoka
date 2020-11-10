
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, Navbar, NavLink } from "reactstrap";

class LandingFooter extends React.Component {
    render() {
        return (
          <>
            <Navbar style={{backgroundColor:'#2E2D2E'}}className="navbar-bottom navbar-dark" expand="md" id="navbar-main">
              <Container fluid>
              <img  style={{paddingLeft:0,paddingTop:5,height:80}} className="justify-content-center   mb-2 mb-xl-2" xl="0"src={require('./../../assets/img/brand/logo.png')} >
                  
                  </img>
               
                <Nav >
                <Row style={{justifyContent:"space-evenly",alignContent:"space-evenly"}}>
                <div >
                <img  style={{paddingLeft:20,paddingTop:20,height:44,}} className=" mb-2 mb-xl-2" xl="0"src={require('./../../assets/img/brand/facebook.png')} >
                  
                  </img>
                  </div>
                  <div >
                  <img  style={{paddingLeft:20,paddingTop:20,height:44}} className="justify-content-center   mb-2 mb-xl-2" xl="0"src={require('./../../assets/img/brand/instagram.png')} >
                  
                  </img>
                  </div>
                  <div >
                  <img  style={{paddingLeft:20,paddingTop:20,height:44}} className="justify-content-center   mb-2 mb-xl-2" xl="0"src={require('./../../assets/img/brand/whatsapp.png')} >
                  
                  </img>
                  </div>
                
                 
                  
                </Row>
                </Nav>
               
            
              </Container>
            </Navbar>
          </>
        );
      }
    }
  


export default LandingFooter;
