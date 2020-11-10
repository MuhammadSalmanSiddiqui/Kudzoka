import React, {Component} from 'react';
import final from '../../../assets/img/icons/common/final.svg';
// import '../New Password/NewPasswordPage.styles.scss';
import '../../../views/examples/Login/login.styles.scss';
import axios from "axios";

class ForgotPassWordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            showMessage: false
        };
    }

    submitData() {
        // axios.post('http://35.246.116.99/api/Login/Authenticate', {
        //     "email": this.state.email,
        // }).then((response) => {
        //     console.log(response);
        // }, (error) => {
        //     console.log(error);
        // });
        this.setState({showMessage:true})
    }
    handleChange(event) {
        this.setState({[event.target.name]:event.target.value})
    }
    render() {
        return (
            <body>
            <div className="container-fluid bg"><br/><br/><br/>
                <div className="row text-center mt-5">
                    <div className="col-lg-4 offset-md-2\1 offset-lg-4 ">
                        <div className="img">
                            <img src={final} alt="" className=" img-fluid"/></div>
                        <br/>
                        <div className="form mt-3">
                            <div className=" text-white text-center"
                                 style={{fontSize: "22px", fontWeight: "500"}}>Forgot password?
                            </div>
                            <br/>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" name="email" placeholder="Enter Your Email*"/>
                            <br/>
                            <button className="btn btn-info btn-lg text-center px-5 py-2" style={{display: this.state.showMessage?"none":"block"}} onClick={()=>{this.submitData()}}>Send</button>
                            <br/>
                            <div className="text-white text-center"
                                 style={{fontSize: "18px", fontWeight: "300", display: this.state.showMessage?"block":"none"}}>
                                Check your inbox for link.
                            </div>

                        </div>
                        <br/><br/><br/><br/><br/><br/><br/>
                    </div>
                </div>
            </div>


            </body>
        );
    }
}

export default ForgotPassWordPage;
