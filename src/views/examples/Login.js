
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
const history = createBrowserHistory();


class Login extends React.Component {
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
      Password:'',
    };

    this.onRiderClick = this.onRiderClick.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
    this.onVendorClick = this.onVendorClick.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onRiderClick(){
    console.log('clicked');
    history.push('/registerRider');
    history.go(0);
  }
  onVendorClick(){
    console.log('clicked');
    history.push('/registerVendor');
    history.go(0);
  }

  onLoginClick(){
    console.log('clicked');
    history.push('/admin');

  }

  handleEmailChange(evt) {
      console.log(evt.target.value);
    this.setState({
      Email: evt.target.value,
    });
  };


  handlePasswordChange(evt) {
    console.log(evt.target.value)
    this.setState({
      Password: evt.target.value,
    });

  };




  handleSubmit = () =>{
    console.log(this.state.Email);
    console.log(this.state.Password);


     const Rider = {

        Email: this.state.Email,
        Password:this.state.Password,

    };
    console.log(Rider);
    debugger



    authenticate(Rider)
        .then(response => {
          console.log(response);
          this.onLoginClick();

        })
        .catch(err => {


          console.log(err);


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

                    <Input placeholder="Password" type="password" value={this.state.Password} onChange={this.handlePasswordChange}/>
                  </InputGroup>
                </FormGroup>
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
                <div className="text-center">
                <span className="text-darker text-sm">Forget Password?</span>
                </div>
                <CardHeader className="bg-transparent pb-3">

              <div className="btn-wrapper text-center">

              </div>
            </CardHeader>
            <div className="my-4">

                <span className="text-darker text-sm">SignUp As</span>
                </div>

          <Router className="text-center">
          <div >
             <Route path='/Register' component={Register} history={history} />
          </div>
          <Row style={{justifyContent:"space-evenly"}}>
          <Button style={{height: '50px', width : '160px', color:"black",borderRadius:0,backgroundColor:"white", borderColor:"blue"}} onClick={ this.onVendorClick} className="my-1" color="primary" size="sm" block>
                Vendor
               </Button>
               <Button style={{height: '50px', width : '160px', color:"black",borderRadius:0,backgroundColor:"white", borderColor:"blue",marginRight:10}} onClick={ this.onRiderClick} className="my-1" color="primary" size="sm" block>
                Rider
               </Button>
            </Row>
       </Router>
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



export default Login;






