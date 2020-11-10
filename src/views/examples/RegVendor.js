
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  
  CardBody,
  FormGroup,
  Form,
  Input,
  Alert ,
  InputGroup,
  Row,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Col,
  Container
} from "reactstrap";
import {
  authenticateVendor,
 } from '../../api config/AuthServices';
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import Select from 'react-select';


const techCompanies = [
  { label: "Harare", value: 1 },
  { label: "Bulawayo", value: 2 },
  { label: "Chitungwiza", value: 3 },
  { label: "Mutare", value: 4 },
  { label: "Epworth", value: 5 },
  { label: "Gweru", value: 6 },
  { label: "Kwekwe", value: 7 },
  { label: "Kadoma", value: 8 },
  { label: "Masvingo", value: 9 },
  { label: "Chinhoyi", value: 10 },
];

class RegVendor extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      Name: '',
      StoreName:'',
      StoreAddress:'',
      City:'',
      Email:'',
      PhoneNumber:'',
      MobileNumber:'',
      BusinessRegistrationNumber:'',
      Image:'',
      Password:'',
      ConfirmPassword:'',
      hide:false,
      errors: [],
      modal:true,
      image: null,
  }
  this.onImageChange = this.onImageChange.bind(this);
  this.handleNameChange = this.handleNameChange.bind(this);
  this.clicked = this.clicked.bind(this);
  this.handleStoreNameChange = this.handleStoreNameChange.bind(this);
  this.handleStoreAddressChange = this.handleStoreAddressChange.bind(this);
  this.handleCityChange = this.handleCityChange.bind(this);
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
  this.handleMobileNumberChange = this.handleMobileNumberChange.bind(this);
  this.handleBusinessRegistrationNumberChange = this.handleBusinessRegistrationNumberChange.bind(this);
  this.handlePasswordChange = this.handlePasswordChange.bind(this);
  this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.modalClose = this.modalClose.bind(this);
  

}


  componentDidMount() {
    document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }
  handleNameChange(evt) {
    this.setState({
      Name: evt.target.value,
    });
  };
  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };
  handleStoreNameChange(evt) {
    this.setState({
      StoreName: evt.target.value,
    });
  };
  handleStoreAddressChange(evt) {
    this.setState({
      StoreAddress: evt.target.value,
    });
  };

  handleCityChange(evt) {
    this.setState({
      City: evt.target.value,
    });
  };
  handleEmailChange(evt) {
    this.setState({
      Email: evt.target.value,
    });
  };
  handlePhoneNumberChange(evt) {
    this.setState({
      PhoneNumber: evt.target.value,
    });
  };

  handleMobileNumberChange(evt) {
    this.setState({
      MobileNumber: evt.target.value,
    });
  };

  handleBusinessRegistrationNumberChange(evt) {
    this.setState({
      BusinessRegistrationNumber: evt.target.value,
    });
  };


 

  handlePasswordChange(evt) {
    this.setState({
      Password: evt.target.value,
    });
  };

  handleConfirmPasswordChange(evt) {
    this.setState({
      ConfirmPassword: evt.target.value,
    });
    
  };

  clicked(){
    console.log("hello");
    this.setState({
      hide: true
    });
}



isFormValid = () => {

  console.log("=====================>");
  let errors = [];
  let error;
  // console.log(this.isFormEmpty(this.state))
  if (this.isFormEmpty(this.state)) {
    
    error = {message: 'Fill in all fields  or password lenght is less than seven'};
    console.log(error);
    this.setState({
      errors: errors.concat(error),
      isLoading: false,
    });
    setTimeout(() => {
      this.setState({errors: []});
    }, 3000);
    return false;
  } else if (this.state.Password != this.state.ConfirmPassword) {
    
    error = {message: 'Both Passwords should match'};
    console.log(error);
    this.setState({
      errors: errors.concat(error),
      isLoading: false,
    });
    setTimeout(() => {
      this.setState({errors: []});
    }, 3000);
  }else if (this.state.Email !== "undefined") {
          
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(this.state.Email)) {
      
      error = {message: 'Please enter valid email address.'};
      this.setState({
        errors: errors.concat(error),
        isLoading: false,
      });
    }
    else{
      return true;
    }
  }
  else {
    return true;
  }
};

isFormEmpty = ({Password,ConfirmPassword,MobileNumber,image,Name,StoreName,StoreAddress,BusinessRegistrationNumber,Email}) => {
  
  return Password.length < 7 || ConfirmPassword.length < 7 || !MobileNumber.length || !image.length || !Name.length || !StoreName.length || !StoreAddress.length || !BusinessRegistrationNumber.length ||!Email.length;

  
};
validateEmail = email => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};
displayErrors = errors =>
  errors.map((error, i) => (
    <span style={{color: 'black'}} key={i}>
      {error.message}
    </span>
  ));




  handleSubmit (){
    console.log(this.state.MobileNumber);
    const Vendor = {
      
      Email: this.state.Email,
      Password:this.state.Password,
      Name: this.state.Name,
      StoreName: this.state.StoreName,
      City: this.state.City,
      PhoneNo: this.state.PhoneNumber,
      MobileNo: this.state.MobileNumber,
      StoreAddress: this.state.StoreAddress,
      BusinessRegNo: this.state.BusinessRegistrationNumber,
      Imagepath: this.state.image,
      Country: "string",
      Area: "string",
      HolidayMode: true,
      CNIC: "string"    
  };
  console.log(Vendor);

    this.setState({
            modal:true
          })
    
    // if( this.isFormValid()==true){
     
    // authenticateVendor(Vendor)
    // .then(response => {
    //       this.setState({
    //         modal:true
    //       })
    //      console.log(response) 
    //   console.log("wtf");
    // })
    // .catch(err => {
    //   console.log(err.response);
    // });
    // }
   
  };
  modalClose() {
   
    this.setState({modal: false});
}

  render() {
    return (
      <>
        <div className="main-content">
          <AuthNavbar />
          <div className="header py-4 py-lg-4">
            <Container>
              <div className="header-body text-center mb-9">
                <Row className="justify-content-center">
                  <Col lg="5" md="6">
                  <img alt="..." src={require("assets/img/brand/logo.png")} />
                  </Col>
                </Row>
              </div>
            </Container>
            
          </div>
          {/* Page content */}
          <Container className="mt--8 pb-5">
            <Row className="justify-content-center">
            <>
        <Col lg="7" md="7">
          <Card style={{ borderRadius: 0, }} color="light" className="bg-secondary shadow border-5">
    
            <CardBody className="px-lg-6 py-lg-6">
              <Form role="form">
             
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                  
                    <Input placeholder="Name *" type="text" value={this.state.Name} onChange={this.handleNameChange} />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                  
                    <Input placeholder="Store name *" type="text" value={this.state.StoreName} onChange={this.handleStoreNameChange} />
                  </InputGroup>
                </FormGroup>


                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                  
                    <Input placeholder="Store address *" type="text" value={this.state.StoreAddress} onChange={this.handleStoreAddressChange}/>
                  </InputGroup>
                </FormGroup>


                <div  className="input-group-alternative mb-3">
                  <div >
                    <Select options={techCompanies} />
                    </div>
                    <div >
                    <span className="text-darker text-sm"> </span>
                    </div>
                  </div>

                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                  
                    <Input placeholder="Email *" type="email" value ={this.state.Email} onChange ={this.handleEmailChange} />
                  </InputGroup>
                </FormGroup>



                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                   
                    <Input placeholder="Phone number" type="text" value={this.state.PhoneNumber} onChange={this.handlePhoneNumberChange} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    
                    <Input placeholder="Mobile number *" type="text" value={this.state.MobileNumber} onChange={this.handleMobileNumberChange}/>
                  </InputGroup>
                </FormGroup>


                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    
                    <Input placeholder="Business Registration Number *" type="text" value={this.state.BusinessRegistrationNumber} onChange={this.handleBusinessRegistrationNumberChange}/>
                  </InputGroup>
                </FormGroup>


                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    
                    <input type = "file" name="logoImage"  onChange={this.onImageChange}/>
                  </InputGroup>
                </FormGroup>


                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    
                    <Input placeholder="Password *" type="password" value={this.state.Password} onChange={this.handlePasswordChange}/>
                  </InputGroup>
                </FormGroup>



                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    
                    <Input placeholder="Confirm password *" type="password" value={this.state.ConfirmPassword} onChange={this.handleConfirmPasswordChange}/>
                  </InputGroup>
                </FormGroup>
                {this.state.errors.length > 0 && (
              <div
                >
                  <span className="text-dark">  {this.displayErrors(this.state.errors)}</span>
               
              </div>
                 )}

                {/* <ModalDialog>
  <ModalHeader closeButton>
    <ModalTitle>Modal title</ModalTitle>
  </ModalHeader>

  <ModalBody>
    <p>Modal body text goes here.</p>
  </ModalBody>

  <ModalFooter>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </ModalFooter>
</ModalDialog> */}


               
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                <Button onClick={ this.handleSubmit} className="my-4" color="primary" size="lg" block>
                SignUp As Vendor
               </Button>


               {
          this.state.hide? 
              <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">Required PopUp </div>
              : null
        }
                </div>

                <div>
     {this.state.modal?
     <div>
<Modal isOpen={true} >
        <ModalHeader >congratulations</ModalHeader>
        <ModalBody>
        Thanks for Signing Up. We are reviewing your Profile. You'll receive Email once your Profile is Approved
        </ModalBody>
        <ModalFooter>
          <Button onClick={this.modalClose} color="primary">close</Button>{' '}
         
        </ModalFooter>
      </Modal>
     </div>:null}
      
    </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
            </Row>
          </Container>
        </div>
        <AuthFooter />
      </>
    );
  }
}

export default RegVendor;
