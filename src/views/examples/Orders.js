
import React from "react";

// reactstrap components
import {
    Badge,
    Card,
    Nav, NavItem, NavLink,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
 
    CardBody,
   CardTitle,
   CardText,
    FormGroup,
    InputGroup,
    Input,

    Col,
    Button,
    Table,
    Container,
    Row,
    UncontrolledTooltip
} from "reactstrap";
// core components
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import Header from "components/Headers/Header.js";
const techCompanies = [
    { label: "Apple", value: 1 },
    { label: "Facebook", value: 2 },
    { label: "Netflix", value: 3 },
    { label: "Tesla", value: 4 },
    { label: "Amazon", value: 5 },
    { label: "Alphabet", value: 6 },
];
class Orders extends React.Component {
    render() {
        return (
            <>
                <Header />
                {/* Page content */}
                <Container className="mt--7" fluid>
                   

                   
                    <Row className="mt-5">
                        <div className="col">
                        <Card style={{   }}>
  <CardHeader>
    <Nav variant="pills" defaultActiveKey="#first">
      <NavItem>
        <NavLink href="#first">Active</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#link">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#disabled" disabled>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  </CardHeader>
  <CardBody>
  <Card style={{ width:500 }} className=" shadow">
                                <CardHeader className="  bg-transparent">


                                    <div >
                                        <Row style={{justifyContent:"space-evenly"}}>
                                        <Row style={{justifyContent:"space-evenly"}}>
                                                <span style={{ fontSize: 12, }}>ORDER ID- </span>
                                                <span style={{ fontSize: 12,fontWeight:"bold" }}>023453458 </span>
                                                </Row>
                                           <Button style={{ borderRadius: 8, width:80,backgroundColor:"transparent",color:"black",fontSize:12  }}  color= "primary"   size="sm" block>Login</Button>
                                                <Row style={{justifyContent:"space-evenly"}}>
                                                <span style={{ fontSize: 12, }} className="text-darker ">ORDER DATE- </span>
                                                <span style={{ fontSize: 12,fontWeight:"bold" }} className="text-darker ">AUG 15,2020.02:44 AM </span>
                                                </Row>
                                            </Row>
                                    </div>
                                    <div >
                                        <Row style={{justifyContent:"space-around",marginTop:20}}>
                                        <Row style={{}}>
                                                <span style={{ fontSize: 12, }}>ORDER ID- </span>
                                                <span style={{ fontSize: 12,fontWeight:"bold" }}>Rice x 2 more </span>
                                                </Row>
                                          
                                                <Row style={{width:300,alignContent:"flex-end",textAlign:"end",alignItems:"flex-end",justifyContent:"flex-end",justifySelf:"flex-end"}} >
                                                
                                                <span style={{ fontSize: 12,fontWeight:"bold",textAlign:"end" }} className="text-darker ">Payment-Cash </span>
                                                </Row>
                                            </Row>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <Row >


                                        <div className="container">
                                            <div className="row">

                                                <Col className="col-md-4">
                                                    <div >
                                                    <span style={{ fontSize: 12, }}>Organic </span>
                                                <span style={{ fontSize: 12,fontWeight:"bold" }}>chandigarh, </span>
                                                    </div>
                                                </Col>
                                                
                                               
                                            </div>
                                            <div className="row">

                                                <Col className="col-md-4">
                                                    <div >
                                                    <span style={{ fontSize: 12, }}>OrderPrice </span>
                                                <span style={{ fontSize: 12,fontWeight:"bold" }}>622.80, </span>
                                                    </div>
                                                </Col>
                                                
                                               
                                            </div>

                                            <div className="row">

                                                <Col className="col-md-4">
                                                    <div >
                                                    <span style={{ fontSize: 12, }}>Organic </span>
                                                <span style={{ fontSize: 12,fontWeight:"bold" }}>chandigarh, </span>
                                                    </div>
                                                </Col>
                                                
                                               
                                            </div>
                                            <div className="row">

                                                <Col className="col-md-4">
                                                    <div >
                                                    <span style={{ fontSize: 12, }}>Organic </span>
                                                <span style={{ fontSize: 12,fontWeight:"bold" }}>chandigarh, </span>
                                                    </div>
                                                </Col>
                                                
                                               
                                            </div>
                                            
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
  </CardBody>
</Card>
                        </div>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Orders;
