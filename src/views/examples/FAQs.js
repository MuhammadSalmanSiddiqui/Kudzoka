


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
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  CardBody,
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
class FAQs extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
         
          {/* Dark table */}
          <Row className="mt-5">
            <div className="col">
              <Card className=" shadow">
               

                <CardBody>
                <div className=" icon-examples">
                                        <Row>
                                            <Col style={{ width: 500, }} className="mb-5  lg='2' mb-xl-4" xl="6">
                                            <h3 className="text-black mb-0">FAQs List</h3>
                                            </Col>
                                            <Col style={{ width: 500, textAlign: 'end', }} className="mb-5  lg='2' mb-xl-4" xl="6">
                                                
                                                <Button style={{ width: 140,height:40, textAlign: 'center' }} color="info">Add FAQ</Button>{' '}
                                            </Col>
                                        </Row>
                                    </div>
                                    <Row className=" icon-examples">


                                        <div className="container">
                                            <div className="row">
                                            <Col className="col-md-12">
                                                    
                                                    <div style={{ borderRadius: 0, backgroundColor: "",paddingBottom:0 }} className="input-group mb-0"></div>
                                                    <div >
                                                        <Select  options={techCompanies} />
                                                    </div>
                                                    <div >
                                                        <span className="text-darker text-sm"> </span>
                                                    </div>
                                                    <div >
                                                        <h6  style={{paddingTop:50}}className="text-black mb-0 ">Filter By Category</h6>
                                                    </div>
                                                </Col>
                                                
                                               
                                            </div>
                                        </div>
                                    </Row>
                                    <Row className=" icon-examples">


                                        <div className="container">
                                            <div className="row">
                                            <Col className="col-md-12">
                                                    
                                                    <div style={{ borderRadius: 0, backgroundColor: "",paddingBottom:0 }} className="input-group mb-0"></div>
                                                    <div >
                                                        <Select  options={techCompanies} />
                                                    </div>
                                                    <div >
                                                        <span className="text-darker text-sm"> </span>
                                                    </div>
                                                    <div >
                                                        <h6  style={{paddingTop:50}}className="text-black mb-0 ">Filter By Category</h6>
                                                    </div>
                                                </Col>
                                                
                                               
                                            </div>
                                        </div>
                                    </Row>
                                </CardBody>
               
               
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default FAQs;
