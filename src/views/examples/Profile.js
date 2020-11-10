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
  CardFooter,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  ButtonGroup,
  Button,
  Table,
  Container,
  Row,
  Modal, ModalHeader, ModalBody, ModalFooter,

} from "reactstrap";
import {
  getAllRider,
  getRiderStatus,
 } from '../../api config/RiderDetails';
 import {getAllVendors,getVendorsStatus} from "../../api config/VendorDetails"
// core components
import Header from "components/Headers/Header.js";
import appstore from "./Assets/app-store-badge.png";





class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
     Riders:[],
     Vendors:[],
     modalRider:false,
     temp:[],
      riderfDriveLicense: '',
      riderBDriveLicense: '',
      riderSelfieDriveLicense: '',
      vendorPicture:''
    };


    // this.getAllRiders = this.getAllRiders.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.getTempData= this.getTempData.bind(this);
  }

  modalClose() {

    this.setState({modalRider: false});
}


getTempData =(VendorData) => {
   console.log(VendorData)
  if(VendorData.hasOwnProperty('Profile_Img')){
    this.setState({
      riderSelfieDriveLicense:"http://35.246.116.99" +VendorData.Profile_Img
    })
  } if(VendorData.hasOwnProperty('Front_Img')){
    this.setState({
      riderfDriveLicense:"http://35.246.116.99" +VendorData.Front_Img
    })
  }if(VendorData.hasOwnProperty('Back_Img')){
    this.setState({
      riderbDriveLicense:"http://35.246.116.99" +VendorData.Back_Img
    })
  }
  if(VendorData.hasOwnProperty('Imagepath')) {
    this.setState({
      riderSelfieDriveLicense: "http://35.246.116.99" + VendorData.Imagepath
    })
  }


  this.setState({
    temp:VendorData,
    modalRider:true
  })
}

  getAllRiders = () => {
    getAllRider()
    .then(response => {
      console.log(response);
      this.setState({
        Riders: response.data,
      });


    })
    .catch(err => {


      console.log(err);


    });

  }

  getAllVendors = () => {
    getAllVendors()
    .then(response => {
      console.log(response);
      this.setState({
        Vendors: response.data,
      });


    })
    .catch(err => {


      console.log(err);


    });

  }


  getRiderStatus = (Rider) => {

if(Rider.Status == "In-Active"){
    var Status ={
       email: Rider.Email,
       status: true
    }
  }
    else{
      var Status ={
        email: Rider.Email,
        status: false,
     }
    }
    getRiderStatus(Status)
    .then(response => {
      console.log(response);
      this.getAllRiders();


    })
    .catch(err => {


      console.log(err);


    });

  }




  getVendorStatus = (Vendor) => {

    if(Vendor.Status == "In-Active"){
        var Status ={
           email: Vendor.Email,
           status: true
        }
      }
        else{
          var Status ={
            email: Vendor.Email,
            status: false,
         }
        }
        getVendorsStatus(Status)
        .then(response => {
          console.log(response);
          this.getAllVendors();


        })
        .catch(err => {


          console.log(err);


        });

      }


  componentDidMount() {
    console.log('masjid page did mount======');

    this.getAllRiders();
    this.getAllVendors();
  }



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
                <Table
                  className="align-items-center  table-flush"
                  responsive
                >
                  <thead className="thead-light">
                    <tr>


                      <th scope="col">Rider ID</th>
                      <th scope="col">Rider Name</th>
                      <th scope="col">Phoneno</th>
                      <th scope="col">Status</th>
                      <th scope="col"></th>
                      <th scope="col">Actions</th>

                    </tr>
                  </thead>
                  <tbody>
                  {this.state.Riders &&
                        this.state.Riders.map(Rider => {
                          return (
                            <tr>
                            <th scope="row">
                              <Media className="align-items-center">

                                <Media>
                                  <span className="mb-0 text-sm">
                                    {Rider.Email}
                                  </span>
                                </Media>
                              </Media>
                            </th>
                            <td>{Rider.Name}</td>
                            <td>
                              <Badge color="" className="">
                                <i className="bg-warning" />
                                {Rider.MobileNo}
                              </Badge>
                            </td>
                            <td>{Rider.Status}</td>
                            <td>
                              <div className="d-flex align-items-center">

                                <div>

                                </div>
                              </div>
                            </td>
                            <td>
                                <ButtonGroup size="sm">
                                   <Button
                                    color="primary"
                                    onClick={this.getTempData.bind(this, Rider)}
                                  >
                                    View
                                  </Button>
                                  {/* <Button
                                    color="success"
                                    // onClick={this.updateMasjid.bind(
                                    //   this,
                                    //   masjid,
                                    // )}
                                  >
                                    Update
                                  </Button>  */}
                                  <Button
                                    color="danger"
                                    onClick={this.getRiderStatus.bind(
                                      this,
                                      Rider,
                                    )}
                                  >
                                   {Rider.Status == "Active" ? ("NonApproved"):("Approved")}
                                  </Button>
                                </ButtonGroup>
                              </td>

                          </tr>

                          );

                        })}





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

        <Container className="mt--4" fluid>
          {/* Table */}

          {/* Dark table */}
          <Row className="mt-5">
            <div className="col">
              <Card className=" shadow">
                <Table
                  className="align-items-center  table-flush"
                  responsive
                >
                  <thead className="thead-light">


                    <tr>


                      <th scope="col">Vendor ID</th>
                      <th scope="col">Vendor Name</th>
                      <th scope="col">Mobile Number</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>

                    </tr>
                  </thead>
                  <tbody>
                  {this.state.Vendors &&
                        this.state.Vendors.map(Vendor => {
                          return (
                            <tr>
                            <th scope="row">
                              <Media className="align-items-center">

                                <Media>
                                  <span className="mb-0 text-sm">
                          {Vendor.STOREID}
                                  </span>
                                </Media>
                              </Media>
                            </th>
                          <td>{Vendor.StoreName}</td>
                            <td>
                              <Badge color="" className="">
                                <i className="bg-warning" />
                                {Vendor.MobileNo}
                              </Badge>
                            </td>
                            <th scope="row">
                              <Media className="align-items-center">

                                <Media>
                                  <span className="mb-0 text-sm">
                          {Vendor.Email}
                                  </span>
                                </Media>
                              </Media>
                            </th>
                            <td>{Vendor.Status}</td>


                            <td>
                                <ButtonGroup size="sm">
                                <Button
                                    color="primary"
                                    onClick={this.getTempData.bind(this, Vendor)}
                                  >
                                    View
                                  </Button>
                                  {/* <Button
                                    color="success"
                                    // onClick={this.updateMasjid.bind(
                                    //   this,
                                    //   masjid,
                                    // )}
                                  >
                                    Update
                                  </Button> */}
                                  <Button
                                    color="danger"
                                    onClick={this.getVendorStatus.bind(
                                      this,
                                      Vendor,
                                    )}
                                  >
                                    {Vendor.Status == "Active" ? ("NonApproved"):("Approved")}

                                  </Button>
                                </ButtonGroup>
                              </td>

                          </tr>
                          );
                        })}

                   {this.state.modalRider?
     <div>
<Modal isOpen={true} >
        <ModalHeader >congratulations</ModalHeader>
        <ModalBody>
       <div>
       <div >
         <Row>
         <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:5,paddingLeft:20 }}className="text-dark "  xl="3">Email:</span>
         <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:20 }}className="text-dark "  xl="3">{this.state.temp['Email']} </span>
         </Row>
         <Row>
         <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:5,paddingLeft:20 }}className="text-dark "  xl="3">Mobile No: </span>
         <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:20  }}className="text-dark "  xl="3">{this.state.temp['MobileNo']} </span>
         </Row>
         <Row>
         <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:5,paddingLeft:20 }}className="text-dark "  xl="3">Name: </span>
         <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:20  }}className="text-dark "  xl="3">{this.state.temp['Name']} </span>
         </Row>
         {this.state.temp.hasOwnProperty('Address')?<Row>
           <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:5,paddingLeft:20 }}className="text-dark "  xl="3">Address: </span>
           <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:20  }}className="text-dark "  xl="3">{this.state.temp['Address']} </span>
         </Row>:""}
         {this.state.temp.hasOwnProperty('Area')?<Row>
           <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:5,paddingLeft:20 }}className="text-dark "  xl="3">Area: </span>
           <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:20  }}className="text-dark "  xl="3">{this.state.temp['Area']} </span>
         </Row>:""}
         {this.state.temp.hasOwnProperty('BusinessRegNo')?<Row>
           <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:5,paddingLeft:20 }}className="text-dark "  xl="3">BusinessRegNo: </span>
           <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:20  }}className="text-dark "  xl="3">{this.state.temp['BusinessRegNo']} </span>
         </Row>:""}

         <Row>
         <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:5,paddingLeft:20 }}className="text-dark "  xl="3">City: </span>
         <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:20 }}className="text-dark "  xl="3">{this.state.temp['City']} </span>
         </Row>

         <Row>
         <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:5,paddingLeft:20 }}className="text-dark "  xl="3">PhoneNo :</span>
         <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:20  }}className="text-dark "  xl="3">{this.state.temp['PhoneNo']} </span>
         </Row>

         {this.state.temp.hasOwnProperty('StoreName')?<Row>
           <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:5,paddingLeft:20 }}className="text-dark "  xl="3">StoreName: </span>
           <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:20 }}className="text-dark "  xl="3">{this.state.temp['StoreName']} </span>
         </Row>:""}

         {this.state.temp.hasOwnProperty('StoreAddress')?<Row>
           <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:5,paddingLeft:20 }}className="text-dark "  xl="3">StoreAddress: </span>
           <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:20 }}className="text-dark "  xl="3">{this.state.temp['StoreAddress']} </span>
         </Row>:""}


         <Row>
         <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingBottom:5,paddingRight:20,paddingLeft:20 }}className="text-dark "  xl="3">Status: </span>
         <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingRight:20 ,paddingBottom:30 }}className="text-dark "  xl="3">{this.state.temp['Status']} </span>
         </Row>
         <Row>
         <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingBottom:5,paddingRight:20,paddingLeft:20 }} className="text-dark "  xl="3">Profile Image: </span>
         <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingRight:20 ,paddingBottom:30}}className="text-dark "  xl="3">
                                       <a href={this.state.riderSelfieDriveLicense} target="_blank"><img src={this.state.riderSelfieDriveLicense} alt="" width="120px" height="120"/></a><br/></span>
         </Row>
         <br/><br/><br/><br/>
         {this.state.temp.hasOwnProperty('Front_Img')?<Row>
           <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingBottom:5,paddingRight:20,paddingLeft:20 }} className="text-dark "  xl="3">Front Image: </span>
           <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingRight:20 ,paddingBottom:30}}className="text-dark "  xl="3">
             <a href={this.state.riderfDriveLicense} target="_blank"><img src={this.state.riderfDriveLicense} alt="" width="120px" height="120"/></a><br/></span>
         </Row>:""}
         <br/><br/><br/><br/>
         {this.state.temp.hasOwnProperty('Back_Img')?<Row>
           <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingTop:30,paddingBottom:5,paddingRight:20,paddingLeft:20 }} className="text-dark "  xl="3">Back Image: </span>
           <span style={{ fontSize: 15, fontWeight: "bold",height:0,paddingRight:20 ,paddingBottom:30}}className="text-dark "  xl="3">
             <a href={this.state.riderbDriveLicense} target="_blank"><img src={this.state.riderbDriveLicense} alt="" width="120px" height="120"/></a><br/></span>
         </Row>:""}
         <br/>
         <br/>
         <br/>
       </div>

       </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={this.modalClose} color="primary">close</Button>{' '}
        </ModalFooter>
      </Modal>
     </div>:null}



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

export default Profile;
