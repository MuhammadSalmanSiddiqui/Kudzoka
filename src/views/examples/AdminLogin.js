
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
  authenticate,
 } from '../../api config/AuthServices';
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import '../examples/Login/login.styles.scss'
const history = createBrowserHistory();


class AdminLogin extends React.Component {
 componentDidMount() {
    document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }
  constructor(props) {
    super(props);
    this.state ={
      Email:'Admin@kudzoka.com',
      Password:'Admin',
      Role:"Admin",
      error:false,

    };


    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmailChange(evt) {
    this.setState({
      Email: evt.target.value,
    });
  };


  handlePasswordChange(evt) {
    this.setState({
      Password: evt.target.value,
    });

  };


  handleSubmit (){



      console.log(this.state.Email);
      console.log(this.state.Password);


       const Admin = {

          Email: this.state.Email,
          Password:this.state.Password,

      };

      console.log(Admin);
      authenticate(Admin)
          .then(response => {
            console.log(response);
            console.log('clicked');


   if(response.data=="") {

    localStorage.setItem("Role",this.state.Role)
    console.log(localStorage.getItem('Role'))
    history.push('/admin');
    history.go(0);
   }
   else{
        this.setState({
          error:true
        })
   }



          })
          .catch(err => {


            console.log(err);


          });






  };


  handleClick = (e) => {

    history.push('/ForgotPassword');
    history.go(0);
    console.log('The link was clicked.');
  };


  render() {
    return (
      <div className="bg">
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

                    <Input placeholder="Password" type="password" value={this.state.Password} onChange={this.handlePasswordChange}/>
                  </InputGroup>
                </FormGroup>
                {this.state.error ? (
              <div
                >
                  <span className="text-dark"> Admin Cedentials are wrong</span>

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
                <a class="nav-link" href="#" onClick={this.handleClick}>Forgot Password <span class="sr-only">(current)</span></a>
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
      </div>
    );
  }
}



export default AdminLogin;






