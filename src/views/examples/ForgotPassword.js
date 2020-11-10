
import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroup,
  Col,
  Row,
  Container
} from "reactstrap";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {createBrowserHistory} from "history";
import Register from "./Register";
import RegVendor from './RegVendor';
import {
    ForgotPasswords,
 } from '../../api config/AuthServices';
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
const history = createBrowserHistory();


class ForgotPassword extends React.Component {
 componentDidMount() {
    document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }
  constructor(props) {
    super(props);
    this.state ={
      Email:'',
      OldPassword:'',
      Role:"Admin",
      error:false,
      NewPassword:'',
      msg:"Credentials does not match!"

    };

    
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this);
    this.handleOldPasswordChange = this.handleOldPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmailChange(evt) {
    this.setState({
      Email: evt.target.value,
    });
  };


  handleNewPasswordChange(evt) {
    this.setState({
      NewPassword: evt.target.value,
    });
   
  };
  handleOldPasswordChange(evt) {
    this.setState({
        OldPassword: evt.target.value,
    });
   
  };


  handleSubmit (){


  
      console.log(this.state.Email);
      console.log(this.state.Password);
  
      
       const Admin = {
        
          Email: this.state.Email,
          OldPassword:this.state.OldPassword,
          NewPassword:this.state.NewPassword
          
        
      };
      console.log(Admin);
      ForgotPasswords(Admin)
          .then(response => {
            console.log(response.data);
            console.log('clicked');
    
  

    localStorage.setItem("Role",this.state.Role)
    console.log(localStorage.getItem('Role'))
    history.push('/AdminLogin');
    history.go(0); 
   
   
        
   
   
    
           
          })
          .catch(err => {
  
           
            console.log(err.response.message);
            
            this.setState({
                error:true
              })

             
    
          });
      
  
   
   
   
    
  };

 
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
        <Col lg="5" md="5">
          <Card style={{ borderRadius: 0, }} color="light" className="bg-secondary shadow border-5">
           
            <CardBody className="px-lg-4 py-lg-5">
              
              <Form role="form">
                <FormGroup className="mb-4">
                  <InputGroup style={{ borderRadius: 0 }} className="input-group-alternative">
                    
                    <Input placeholder="Email" type="email" value ={this.state.Email} onChange ={this.handleEmailChange} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup style={{ borderRadius: 0 }} className="input-group-alternative">
                    
                    <Input placeholder="OldPassword" type="password" value={this.state.OldPassword} onChange={this.handleOldPasswordChange}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup style={{ borderRadius: 0 }} className="input-group-alternative">
                    
                    <Input placeholder="ConfirmPassword" type="password" value={this.state.NewPassword} onChange={this.handleNewPasswordChange}/>
                  </InputGroup>
                </FormGroup>
                {this.state.error ? (
              <div
                >
                  <span className="text-dark"> {this.state.msg}</span>
               
              </div>
                 ):<div></div>}
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                <Button onClick={ this.handleSubmit} className="my-4" color="primary" size="lg" block>
                LogIn
               </Button>
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



export default ForgotPassword;






