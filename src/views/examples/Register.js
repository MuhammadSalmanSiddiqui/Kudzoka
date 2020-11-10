
  import React from "react";

  // reactstrap components
  import {
    Button,
    Card,
    TextInput,
    CardBody,
    FormGroup,
    Form,
    Alert,
    Input,
    InputGroup,
    Row,
    Container,
    Col,
    Modal, ModalHeader, ModalBody, ModalFooter,

  } from "reactstrap";
  import axios from 'axios';
  import Select from 'react-select';
  import {
  authenticateRider,
  } from '../../api config/AuthServices';

  // core components
  import AuthNavbar from "components/Navbars/AuthNavbar.js";
  import AuthFooter from "components/Footers/AuthFooter.js";

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




  class Register extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        Name: '',
        Address:'',
        City:'',
        Email:'',
        PhoneNumber:'',
        MobileNumber:'',
        Password:'',
        hide:false,
        errors: [],
        modal:false,
        ConfirmPassword:''
    }

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleMobileNumberChange = this.handleMobileNumberChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.clicked = this.clicked.bind(this);
    }

    componentDidMount() {
      document.body.classList.add("bg-default");
    }
    componentWillUnmount() {
      document.body.classList.remove("bg-default");
    }

    handleSignUP() {

      // let username = this.refs.input.value
      console.log(this.state.Name)
      // this.props.onSignUP(username)
    }


    handleUserChange(evt) {
      this.setState({
        Name: evt.target.value,
      });
    };

    handleAddressChange(evt) {
      this.setState({
        Address: evt.target.value,
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


    isFormValid = () => {

      console.log("=====================>");
      let errors = [];
      let error;
      // console.log(this.isFormEmpty(this.state))
      if (this.isFormEmpty(this.state)) {

        error = {message: 'Fill in all fields or password lenght is less than seven'};
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
      }
      else if (this.state.Email !== "undefined") {

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(this.state.Email)) {

          error = {message: 'Please enter valid email address.'};
          this.setState({
            errors: errors.concat(error),

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


    isFormEmpty = ({Email, Password,Name,PhoneNumber,MobileNumber,Address}) => {

      return Password.length < 7 || !MobileNumber.length || !Name.length  || !Email.length || !PhoneNumber.length || !Address.length  ;


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

    clicked(){
      console.log("hello");
      this.setState({
        hide: true
      });
  }


    handleSubmit (){
      console.log("hello world")
      console.log(this.isFormValid())
      if(this.isFormValid() == true){
        const Rider = {
          Email: this.state.Email,
          Password:this.state.Password,
          Name: this.state.Name,
          City: this.state.City,
          PhoneNo: this.state.PhoneNumber,
          MobileNo: this.state.MobileNumber,
          Address: this.state.Address,


      };
        console.log(JSON.stringify(Rider))
        axios.post(`http://35.246.116.99/`, { Rider })
            .then(res => {
              debugger
              console.log(res);
              console.log(res.data);
            })
        }
        else{
          console.log('hello')
        }

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

                      <Input placeholder="Name *" type="text" value={this.state.Name} onChange={this.handleUserChange}/>
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">

                      <Input placeholder="Address *" type="text" value={this.state.Address} onChange={this.handleAddressChange} />
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

                      <Input placeholder="Phone Number " type="text" value={this.state.PhoneNumber} onChange={this.handlePhoneNumberChange} />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">

                      <Input placeholder="Mobile Number *" type="text" value={this.state.MobileNumber} onChange={this.handleMobileNumberChange}/>
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
                  <Button onClick={this.handleSubmit} className="my-4" color="primary" size="lg" block>
                  SignUp As Rider
                </Button>

                  </div>
                  <div>
     {this.state.modal?
     <div>
<Modal isOpen={true} >
        <ModalHeader >congratulations</ModalHeader>
        <ModalBody>
        Thanks for Signing Up. Please Visit nearest Franchise along with your Government Issued IDs for Verification. Address of nearest franchise will be emailed to you within 24 Hours.
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

  export default Register;
