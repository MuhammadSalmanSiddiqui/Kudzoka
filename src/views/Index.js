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
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  CardTitle,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "routes.js";
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1",
      Role:''
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
 

  componentWillMount(){
    this.setState({
      Role:localStorage.getItem('Role'),
    })
    
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1",
        Role:localStorage.setItem('Role'),
    });
  };
  getBrandText = path => {
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
render() {
  return (
    <>
     
     <Header />
         {/* Page content */}
         {this.state.Role == "Admin" ?
         
         <Container className=" white pb-6 pt-5 pt-md-2" fluid>

        
        

         <Row>

           <Col className="mb-5  lg='2' mb-xl-4" xl="6">

         <Row>
           <Col className="mb-5  lg='2' mb-xl-4" xl="8">
                 <Card    style={{ borderRadius:15 ,height:100, width:220 }}className="card-stats   bg-gradient-default shadow">
                   <CardBody>
                     <Row>
                       <div className="col">
                         <CardTitle
                           tag="h6"
                           className=" text-white text-uppercase text-muted mb-0"
                         >
                           Today's Sales
                         </CardTitle>
                         <span className=" text-white h2 font-weight-bold mb-0">
                           350,897
                         </span>
                       </div>
                     </Row>
                   </CardBody>
                 </Card>
                
               </Col>
               <Col className="mb-5  lg='2' mb-xl-4" xl="3">
                 <Card  style={{ borderRadius:15,height:100, width:160 }} className="card-stats bg-gradient-default shadow">
                   <CardBody>
                     <Row>
                       <div className="col">
                         <CardTitle
                           tag="h6"
                           className=" text-white text-uppercase text-muted mb-0"
                         >
                           Order Details
                         </CardTitle>
                         <span className=" text-white h3 font-weight-bold mb-0">
                           10
                             </span>
                       </div>
                     </Row>
                   </CardBody>
                 </Card>
               </Col>
</Row>
<Row>
     <Col lg="5" xl="6">
         <Card    style={{ borderRadius: 20, height:120,width:500,textAlign:"center"}}className="text-center bg-gradient-default shadow">
           <CardBody>
             <Row>
               <div className="col text-center">
                 <CardTitle
                   tag="h5"
                   className=" text-white text-uppercase text-muted mb-0"
                 >
                   Today's Sales
                 </CardTitle>
                 <span className=" text-white h2 font-weight-bold mb-0">
                   350,897
                 </span>
               </div>
               <div className="col text-center">
                 <CardTitle
                   tag="h5"
                   className=" text-white text-uppercase text-muted mb-0"
                 >
                   Today's Sales
                 </CardTitle>
                 <span className=" text-white h2 font-weight-bold mb-0">
                   350,897
                 </span>
               </div>
               <div className="col text-center">
                 <CardTitle
                   tag="h5"
                   className=" text-white text-uppercase text-muted mb-0"
                 >
                   Today's Sales
                 </CardTitle>
                 <span className=" text-white h2 font-weight-bold mb-0">
                   350,897
                 </span>
               </div>
             </Row>
           </CardBody>
         </Card>
        
       </Col>   
 </Row> 
           </Col>
            
           <Col className="mb-5  lg='2' mb-xl-4" xl="6" >
             <Card style ={{borderRadius:15 }}className="bg-gradient-default shadow">
               <CardHeader className="bg-transparent">
                 <Row className="align-items-center">
                   <div className="col">
                     <h6 className="text-uppercase text-light ls-0 mb-0">
                       {this.state.Role}
                     </h6>
                     <h2 className="text-white mb-0">Sales value</h2>
                   </div>
                   <div className="col">
                     <Nav className="justify-content-end" pills>
                       <NavItem>
                         <NavLink
                           className={classnames("py-1 px-1", {
                             active: this.state.activeNav === 1
                           })}
                           href="#pablo"
                           onClick={e => this.toggleNavs(e, 1)}
                         >
                           <span className="d-none d-md-block">Month</span>
                           <span className="d-md-none">M</span>
                         </NavLink>
                       </NavItem>
                       <NavItem>
                         <NavLink
                           className={classnames("py-1 px-1", {
                             active: this.state.activeNav === 2
                           })}
                           data-toggle="tab"
                           href="#pablo"
                           onClick={e => this.toggleNavs(e, 2)}
                         >
                           <span className="d-none d-md-block">Week</span>
                           <span className="d-md-none">W</span>
                         </NavLink>
                       </NavItem>
                     </Nav>
                   </div>
                 </Row>
               </CardHeader>
               <CardBody>
                 {/* Chart */}
                 <div style ={{height:230,borderRadius:15 }}className="chart">
                   <Line
                     data={chartExample1[this.state.chartExample1Data]}
                     options={chartExample1.options}
                     getDatasetAtEvent={e => console.log(e)}
                   />
                 </div>
               </CardBody>
             </Card>
           </Col>
         </Row>


        
       
     
       </Container>
  
    
         : <div></div>
         }
      
       
        <Container fluid>
          <AdminFooter />
        </Container>
      
     
     
      
    </>
  );
}
}


export default Index;
