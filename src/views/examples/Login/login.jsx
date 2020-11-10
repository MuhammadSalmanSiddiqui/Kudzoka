import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import final from '../../../assets/img/icons/common/final.svg';
import '../../../views/examples/Login/login.styles.scss';
import axios from "axios"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '' ,
            password: ''
        };
    }
    Login() {
        axios.post('https://api.kudzoka.com/api/Login/Authenticate', {
            "email": this.state.email,
            "password": this.state.password
        }).then((response) => {
            console.log(response);
            
            if (response.data)
            this.props.history.push('/');
            }, (error) => {
                console.log(error);
            });
    }
    handleChange(event) {
        this.setState({[event.target.name]:event.target.value})
    }
    render() {
        return (
            <div className="container-fluid bg">
                <div className="row text-center mt-5">
                    <div className="col-lg-4 offset-md-2\1 offset-lg-4 ">
                        <div className="img">
                            <img src={final} alt="" className=" img-fluid"/></div>
                        <div className="form mb-5">
                            <input name="email" type="email" className="form-control" onChange={(e) => this.handleChange(e)}
                                   aria-describedby="emailHelp" placeholder="Email*"/>
                                   <br />
                            <input name="password" type="password" className="form-control"  onChange={(e) => this.handleChange(e)}
                                   placeholder="Password*"/>
                            <div className="form-check" style={{textAlign: "left"}}>
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label text-white" htmlFor="exampleCheck1">Remember Me</label>
                            </div>
                            <br/>
                            <button type="submit" onClick={() => this.Login()} className="btn btn-info btn-block font-weight-bold text-center">Log In</button>
                            <br/>
                            <Link className=" text-white text-center text-decoration-none"
                               style={{fontSize: "25px", fontWeight: "500"}} to="/ForgotPassword">
                                Forgot password?
                            </Link>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h6 className="text-white font-weight-bold" style={{textAlign: "left",fontSize:'25px'}}>SignUp As</h6>
                        </div>
                        <span>
                            <Link className="btn btn-md btn-info py-md-2 font-weight-bold"
                               style={{paddingRight: "30px", paddingLeft: "30px"}} to="/registerVendor">Vendor</Link>
                            <Link  className="btn btn-md btn-info py-md-2 font-weight-bold offset-lg-2"
                               style={{paddingRight: "30px", paddingLeft: "30px"}} to="/registerRider">Rider</Link>
                        </span>
                        <br/> <br/> <br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
