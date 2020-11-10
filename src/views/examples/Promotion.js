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
class Promotion extends React.Component {
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
                <CardHeader className="bg-transparent">
                 

                  <div className=" icon-examples">
                                        <Row>
                                            <Col style={{ width: 500, }} className="mb-5  lg='2' mb-xl-4" xl="6">
                                            <h3 className="text-black mb-0">Promotion List</h3>
                                            </Col>
                                            <Col style={{ width: 500, textAlign: 'end', }} className="mb-5  lg='2' mb-xl-4" xl="6">
                                                
                                                <Button style={{ width: 120,height:40, textAlign: 'center' }} color="info">New Promo</Button>{' '}
                                            </Col>
                                        </Row>
                                    </div>
                </CardHeader>

                <CardBody>
                                    <Row className=" icon-examples">


                                        <div className="container">
                                            <div className="row">
                                            <Col className="col-md-4">
                                                    
                                                    <div style={{ borderRadius: 0, backgroundColor: "",paddingBottom:0 }} className="input-group mb-0"></div>
                                                    <div >
                                                        <Select options={techCompanies} />
                                                    </div>
                                                    <div >
                                                        <span className="text-darker text-sm"> </span>
                                                    </div>
                                                    <div >
                                                        <span style={{paddingBottom:10}} className="text-darker text-sm ">Filter By Category</span>
                                                    </div>
                                                </Col>
                                                <Col className="col-md-4">
  <FormGroup>
                                                        <InputGroup style={{ borderRadius: 0, borderBlockColor: "black", border: 0,}} className="input-group mb-3">

                                                            <Input placeholder="Snack" type="email" autoComplete="new-email" />
                                                        </InputGroup>
                                                    </FormGroup>
                                                    
                                                </Col>
                                               
                                            </div>
                                        </div>
                                    </Row>
                                </CardBody>
                <Table
                  className="align-items-center  table-flush"
                  responsive
                >
                  <thead className="thead-light">
                    <tr>
                   
                      
                      <th scope="col">ID</th>
                      <th scope="col">Promotion Name</th>
                      <th scope="col">Mobile</th>
                      <th scope="col">Promo Code Discount(%)</th>
                      <th scope="col">Status</th>
                      <th scope="col">Type</th>
                      <th scope="col">Actions</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                         
                          <Media>
                            <span className="mb-0 text-sm">
                              1
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>Lays</td>
                      <td>
                        <Badge color="" className="">
                          <i className="bg-warning" />
                          Snaks
                        </Badge>
                      </td>
                      <td>
                        <Badge color="" className="d-flex align-items-center">
                          <i className="bg-warning" />
                          bilalsheraz96@gmail.com
                        </Badge>
                      </td>
                     
                      <td>
                        <div className="avatar-group">
                        <Button style={{backgroundColor:"transparent",color:"red",height:30,width:120,fontSize:11,borderRadius:20,borderColor:"transparent"}} >Warning</Button>{' '}
                         
                        </div>
                      </td>

                      <td>
                        <Badge color="" className="badge-dot">
                          <i className="bg-info" />
                          on schedule
                        </Badge>
                      </td>
                      <td className="text-left">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-dark"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Edit
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                             Delete
                            </DropdownItem>
                            
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          
                          <Media>
                            <span className="mb-0 text-sm">
                              2
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>Surf Excel</td>
                      <td>
                        <Badge color="" className="">
                          <i className="bg-success" />
                          Laundry
                        </Badge>
                      </td>
                      <td>
                        <Badge color="" className="d-flex align-items-center">
                          <i className="bg-warning" />
                          bilalsheraz96@gmail.com
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                        <Button style={{backgroundColor:"transparent",color:"red",height:30,width:120,fontSize:11,borderRadius:20,borderColor:"transparent"}} >Warning</Button>{' '}
                         
                        </div>
                      </td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className="bg-info" />
                          on schedule
                        </Badge>
                      </td>
                      <td className="text-left">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-dark"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Edit
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                             Delete
                            </DropdownItem>
                            
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                         
                          <Media>
                            <span className="mb-0 text-sm">
                              3
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>Apple</td>
                      <td>
                        <Badge color="" className="">
                          <i className="bg-danger" />
                          Fruit
                        </Badge>
                      </td>

                      <td>
                        <Badge color="" className="d-flex align-items-center">
                          <i className="bg-warning" />
                          bilalsheraz96@gmail.com
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                        <Button style={{backgroundColor:"transparent",color:"red",height:30,width:120,fontSize:11,borderRadius:20,borderColor:"transparent"}} >Warning</Button>{' '}
                         
                        </div>
                      </td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className="bg-info" />
                          on schedule
                        </Badge>
                      </td>
                      <td className="text-left">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-dark"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Edit
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                             Delete
                            </DropdownItem>
                            
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                         
                          <Media>
                            <span className="mb-0 text-sm">
                              4
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>Pringles</td>
                      <td>
                        <Badge color="" className="">
                          <i className="bg-info" />
                          Snacks
                        </Badge>
                      </td>
                      <td>
                        <Badge color="" className="d-flex align-items-center">
                          <i className="bg-warning" />
                          bilalsheraz96@gmail.com
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                        <Button style={{backgroundColor:"transparent",color:"red",height:30,width:120,fontSize:11,borderRadius:20,borderColor:"transparent"}} >Warning</Button>{' '}
                         
                        </div>
                      </td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className="bg-info" />
                          on schedule
                        </Badge>
                      </td>
                      <td className="text-left">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-dark"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Edit
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                             Delete
                            </DropdownItem>
                           
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                         
                          <Media>
                            <span className="mb-0 text-sm">
                              5
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>Grapes</td>
                      <td>
                        <Badge color="" className="">
                          <i className="bg-success" />
                          Fruits
                        </Badge>
                      </td>

                      <td>
                        <Badge color="" className="d-flex align-items-center">
                          <i className="bg-warning" />
                          bilalsheraz96@gmail.com
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                        <Button style={{backgroundColor:"transparent",elevation:0,color:"red",height:30,width:120,fontSize:11,borderRadius:20,borderColor:"transparent"}} >Warning</Button>{' '}
                         
                        </div>
                      </td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className="bg-info" />
                          on schedule
                        </Badge>
                      </td>
                      <td className="text-left">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-dark"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              EDIT
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Delete
                            </DropdownItem>
                            
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Promotion;
