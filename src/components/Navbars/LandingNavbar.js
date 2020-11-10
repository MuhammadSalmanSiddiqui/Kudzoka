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
import {
 
  Navbar,
  Nav,
  Row,
  Container,
  
} from "reactstrap";

import {createBrowserHistory} from "history";


const history = createBrowserHistory();

class LandingNavbar extends React.Component {

  constructor(props) {
    super(props);
   this.setState = {
    navExpanded: false
   }

    this.onLoginClick = this.onLoginClick.bind(this);
    this.onAdminLoginClick = this.onAdminLoginClick.bind(this);
    this.onAdminLoginClick = this.onAdminLoginClick.bind(this);
    this.onAdminLoginClick = this.onAdminLoginClick.bind(this);
  }
  onLoginClick(){
    console.log('clicked');
    history.push('/login');
    history.go(0);
  }
  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  }

  setNavClose = () => {
    this.setState({ navExpanded: false });
  }
  onAdminLoginClick(){
    console.log('clicked');
    history.push('/AdminLogin');
    history.go(0);
  }
  render() {
    return (

      
      <>

<nav class="navbar navbar-expand-lg navbar-top navbar-dark">
<a class="navbar-brand" href="#">
    <img src={require('./../../assets/img/brand/logo.png')}style={{marginLeft:10,paddingTop:0,}}  width="80" height="80" class="d-inline-block align-top" alt="">
    </img>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav ml-auto">
      <li class="text active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-text">
        <a class="nav-link" href="#">Services</a>
      </li>
      <li class="nav-text">
        <a class="nav-link" href="#">AboutUs</a>
      </li>
      <li class="nav-text">
        <a class="nav-link" href="#">HelpCenter</a>
      </li>
      <form class="form-inline my-2 my-lg-0">
     
      <button onClick={this.onLoginClick} style={{ marginRight:30,height: '30px',width : '70px',  color:"white",borderRadius:5,backgroundColor:"transparent", borderColor:"white",paddingRight:0,fontSize:12}}  >LogIn</button>
   </form>
    </ul>
   
    {/* <span class="navbar-text">
      Navbar text with an inline element
    </span> */}
  </div>
</nav>

        {/* <Navbar className="navbar-top navbar-dark navbar navbar-expand-lg "  id="navbar-main">
          <Container fluid>
          <img  className="h4 mb-0 text-white text-uppercase  d-lg-inline-block"  style={{paddingLeft:0,paddingTop:20,height:80}} className="justify-content-center   mb-2 mb-xl-2" xl="0"src={require('./../../assets/img/brand/logo.png')} >
              
              </img>
           
            <Nav className="align-items-center  d-md-flex  d-lg-inline-block" navbar>
            <Row>
            <div >
                <span style={{ fontSize: 12, fontWeight: "bold",height:0,marginRight:10 }}className="text-light " >Home </span>
              </div>
              <div >
                <span style={{ fontSize: 12, fontWeight: "bold",height:0,marginRight:10 }}className="text-light " >Services </span>
              </div>
              <div >
                <span style={{ fontSize: 12, fontWeight: "bold",height:0,marginRight:10 }}className="text-light " >AboutUs </span>
              </div>
              <div >
                <span style={{ fontSize: 12, fontWeight: "bold",height:0,marginRight:10 }}className="text-light " >Help Center </span>
              </div>
              <div>
              <button onClick={this.onLoginClick} style={{ marginRight:30,height: '30px',width : '70px',  color:"white",borderRadius:5,backgroundColor:"transparent", borderColor:"white",paddingRight:0,fontSize:12}}  >LogIn</button>
              </div>
             
            </Row>
            </Nav>
           
        
          </Container>
        </Navbar> */}
      </>
    );
  }
}

export default LandingNavbar;
