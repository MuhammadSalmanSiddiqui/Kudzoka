import React, {Component} from 'react';
import final from '../../assets/img/icons/common/final.svg';
import './Login.styles.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '' ,
            password: ''
        };
    }
    Login() {
        fetch("http://35.246.116.99/Login/Login_Authenticate", {
            method: "POST",
            body: {
                "email": this.state.email,
                "password": this.state.password
            }
        }).then(res => res.text())
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
    }
    handleChange(event) {
        this.setState({[event.target.name]:event.target.value})
    }
    render() {
        return (
            <div className="container">
                <div className="row text-center mt-5">
                    <div className="col-lg-4 offset-md-2\1 offset-lg-4 ">
                        <div className="img">
                            <img src={final} alt="" className=" img-fluid"/></div>
                        <form className="form mb-5">
                            <div className="form-group">
                                <input name="email" type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Email*"/>
                            </div>
                            <div className="form-group">
                                <input name="password" type="password" className="form-control" id="exampleInputPassword1" onChange={this.handleChange}
                                       placeholder="Password*"/>
                            </div>
                            <div className="form-check" style={{textAlign: "left"}}>
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label text-white" for="exampleCheck1">Remember Me</label>
                            </div>
                            <br/>
                            <button type="submit" onClick={this.Login()} className="btn btn-info btn-block text-center">Log In</button>
                            <br/>
                            <a className=" text-white text-center"
                               style={{fontSize: "25px", fontWeight: "500"}} href="/ForgotPassword">
                                Forgot password?
                            </a>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h4 className="text-white" style={{textAlign: "left"}}>SignUp As</h4>
                        </form>
                        <span>
                            <a className="btn btn-lg btn-info py-md-2"
                               style={{paddingRight: "30px", paddingLeft: "30px"}} href="/registerVendor">Vendor</a>
                           <a  className="btn btn-lg btn-info py-md-2 offset-lg-2"
                              style={{paddingRight: "30px", paddingLeft: "30px"}} href="/registerRider">Rider</a>
                        </span>
                        <br/><br/><br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
