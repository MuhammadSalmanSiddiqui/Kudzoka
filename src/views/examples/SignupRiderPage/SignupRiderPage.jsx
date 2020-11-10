import React, {Component} from 'react';
import final from '../../../assets/img/icons/common/final.svg';
// import '../SignupVendorPage/vendor.scss';
import Inputmask from "inputmask";
import '../../../views/examples/Login/login.styles.scss';
import Modal from "react-bootstrap/Modal"
import Select from 'react-select';
import {
  authenticateRider,
} from '../../../api config/AuthServices';

const axios = require('axios');

class SignupRider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "firstname": '',
            "lastname": '',
            "address": '',
            "city": '',
            "location": '',
            "email": '',
            "phone": '',
            "mobile": '',
            "whatsappMobile": '',
            "fDriveLicense": '',
            "BDriveLicense": '',
            "SelfieDriveLicense": '',
            "password": '',
            "cpassword": '',
            "checkbox": false,
            "cities": [
                {value: 'Harare', label: 'Harare'},
                {value: 'Chintungwiza', label: 'Chintungwiza'},
                {value: 'Norton', label: 'Norton'}
            ],
            citylocations: {
                "Norton": [
                    {value: 'Twinlakes', label: 'Twinlakes'},
                    {value: 'Ngoni', label: 'Ngoni'},
                    {value: 'Katanga', label: 'Katanga'},
                    {value: 'Maridale', label: 'Maridale'}
                ],
                "Chintungwiza": [
                    {value: 'St Mary\'s', label: 'St Mary\'s'},
                    {value: 'Zengeza 1', label: 'Zengeza 1'},
                    {value: 'Zengeza 2', label: 'Zengeza 2'},
                    {value: 'Zengeza 3', label: 'Zengeza 3'},
                    {value: 'Zengeza 4', label: 'Zengeza 4'},
                    {value: 'Town Centre', label: 'Town Centre'},
                    {value: 'Seke Unit J', label: 'Seke Unit J'},
                    {value: 'Seke Unit k', label: 'Seke Unit k'},
                    {value: 'Seke Unit B', label: 'Seke Unit B'},
                    {value: 'Makoni', label: 'Makoni'}
                ],
                "Harare": [
                    {value: 'Avondale', label: 'Avondale'},
                    {value: 'Westgate', label: 'Westgate'},
                    {value: 'Borrowdale', label: 'Borrowdale'},
                    {value: 'Hatfield', label: 'Hatfield'},
                    {value: 'Waterfalls', label: 'Waterfalls'},
                    {value: 'Mbare', label: 'Mbare'},
                    {value: 'Epworth', label: 'Epworth'},
                    {value: 'Glenview', label: 'Glenview'},
                    {value: 'Budiriro', label: 'Budiriro'},
                    {value: 'Willowvale', label: 'Willowvale'},
                    {value: 'Mufakose', label: 'Mufakose'},
                    {value: 'Glennorah', label: 'Glennorah'},
                    {value: 'Dzivarasekwa', label: 'Dzivarasekwa'},
                    {value: 'Kuwadzana', label: 'Kuwadzana'},
                    {value: 'Mabvuku', label: 'Mabvuku'},
                    {value: 'Warren Park', label: 'Warren Park'}
                ]
            },

            locations: [],
            showModal: false
        }
    }

    
    componentDidMount() {
          Inputmask().mask(document.querySelectorAll("input"));
    }


    ok=()=>{
        this.setState({
            showModal: false
        })
        window.location.reload()
    }

    Signup(e) {
        e.preventDefault()
        console.log(this.state)
        if (this.state.password !== this.state.cpassword) {
            alert("Passwords don't match");
        } else {
            // let formData = new FormData();
            // formData.append('Name', this.state.firstname + " " + this.state.lastname);
            // formData.append('Email', this.state.email);
            // formData.append('City', this.state.city);
            // formData.append('PhoneNo', this.state.phone);
            // formData.append('MobileNo', this.state.mobile);
            // formData.append('Address', this.state.address);
            // formData.append('Password', this.state.password);
            // formData.append('Profile_Img', this.state.SelfieDriveLicense);
            // formData.append('Front_Img', this.state.fDriveLicense);
            // formData.append('Back_Img', this.state.BDriveLicense);
            // formData.append('Location', this.state.location);
            // formData.append('WhatsappNo', this.state.whatsappMobile);
            // formData.append('FirstName', this.state.firstname);
            // formData.append('LastName', this.state.lastname);

            // const config = {
            //     headers: {'content-type': 'multipart/form-data'}
            // }
            // axios.post("https://api.kudzoka.com/api/Rider/AddRider", formData, config)
            //     .then(response => {
            //         console.log(response);
            //         this.setState({showModal: true})
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     });
            

            //------Alternative Approch

            const Rider = {
                Email: this.state.email,
                Password:this.state.password,
                FirstName: this.state.firstname,
                LastName: this.state.lastname,
                City: this.state.city,
                PhoneNo: this.state.phone,
                MobileNo: this.state.mobile,
                WhatsappNo: this.state.whatsappMobile,
                Address: this.state.address,
                Front_Img: this.state.fDriveLicense,
                Back_Img: this.state.BDriveLicense,
                Profile_Img: this.state.SelfieDriveLicense
            };

            authenticateRider(Rider)
                .then(response => {
                    console.log(response) 
                    this.setState({
                        showModal:true
                    })
                })
                .catch(err => {
                    console.log(err.response)
                })
        }
    }

    fDriveLicense(event) {
        this.setState({fDriveLicense:event.target.files[0]})
    }

    selectCity = (city) => {
        this.setState({locations:this.state.citylocations[city.value], city:city.value})
    }

    selectLocation = (location) => {
        this.setState({location:location.value})
    }

    BDriveLicense(event) {
        this.setState({BDriveLicense:event.target.files[0]})
    }

    SelfieDriveLicense(event) {
        this.setState({SelfieDriveLicense:event.target.files[0]})
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
                <div className="container-fluid bg">
                    <div className="row text-center">
                        <div className="col-lg-4 offset-md-2\1 offset-lg-4">
                            <img src={final} alt="" className="img-fluid"/>
                            <form className="form">
                                <br/>
                                <input type="text" className="form-control" name="firstname"
                                       aria-describedby="emailHelp" placeholder="First Name*"
                                       onChange={(e) => this.handleChange(e)} required/>
                                <br/>
                                <input type="text" className="form-control" name="lastname" placeholder="Last Name*"
                                       onChange={(e) => this.handleChange(e)} required/>
                                <br/>
                                <input type="text" className="form-control" name="address" placeholder="Address*"
                                       onChange={(e) => this.handleChange(e)}
                                       required/>
                                <br/>
                                <Select className="selectMN"
                                        options={this.state.cities}
                                        onChange={this.selectCity}/>
                                <br />
                                <Select className="selectMN"
                                        options={this.state.locations}
                                        onChange={this.selectLocation}/>
                                <br/>
                                <input type="email" name="email" className="form-control"
                                       placeholder="Email*" onChange={(e) => this.handleChange(e)} required/>
                                <br/>
                                <input type="tel" name="phone" className="form-control"
                                       placeholder="Phone Number*"
                                       data-inputmask="'mask': '(02) 999999999'"
                                       onChange={(e) => this.handleChange(e)} required/>
                                <br/>
                                <input type="tel" name="mobile" className="form-control"
                                       data-inputmask="'mask': '(07) 999999999'"
                                       placeholder="Mobile Number*" onChange={(e) => this.handleChange(e)} required/>
                                <br/>
                                <input type="tel" name="whatsappMobile" className="form-control"
                                       data-inputmask="'mask': '(07) 999999999'"
                                       placeholder="Whatsapp Number*" onChange={(e) => this.handleChange(e)} required/>
                                <br/>
                                <div className="form-group class form-control"
                                     style={{textAlign:"left",backgroundColor: "white", paddingTop: "8px", paddingBottom: "49px"}}
                                     required>
                                    <input type="file" name="fDriveLicense" onChange={(e) => this.fDriveLicense(e)}/>
                                    <p style={{fontSize: "11px", position: "relative", left: "105px"}}>(Front picture of
                                        your driver license)</p>
                                </div>
                                <div className="form-group class form-control"
                                     style={{textAlign:"left",backgroundColor: "white", paddingTop: "8px", paddingBottom: "49px"}}>
                                    <input type="file" name="BDriveLicense" onChange={(e) => this.BDriveLicense(e)}/>
                                    <p style={{fontSize: "11px", position: "relative", left: "105px"}}>(Back picture of
                                        your driver license)</p>
                                </div>
                                <div className="form-group class form-control"
                                     style={{textAlign:"left",backgroundColor: "white", paddingTop: "8px", paddingBottom: "49px"}}>
                                    <input type="file" name="SelfieDriveLicense"
                                           onChange={(e) => this.SelfieDriveLicense(e)}/>
                                    <p style={{fontSize: "11px", position: "relative", left: "105px"}}>(Selfie while
                                        holding your driver license card)</p>
                                </div>
                                <input type="password" className="form-control" name="password"
                                       placeholder="Password*" minLength="7" onChange={(e) => this.handleChange(e)} required/>
                                <br/>
                                <input type="password" className="form-control" name="cpassword"
                                       placeholder="Confirm Password*" minLength="7" onChange={(e) => this.handleChange(e)} required/>
                                <br/>

                                <div className="form-check" style={{textAlign: "left"}}>
                                    <input type="checkbox" className="form-check-input" name="checkbox" required/>
                                    <label className="form-check-label text-white">I agree with
                                        the <span className="text-primary">Privacy Policy</span></label>
                                </div>
                                <br/>
                                <button onClick={(e) => this.Signup(e)}
                                        className="btn btn-info btn-block text-center font-weight-bold">SignUp as
                                    rider
                                </button>
                            </form>

                            <div style={{padding: "30px"}}/>
                            <Modal
                                show={this.state.showModal}
                                onHide={() => {
                                    this.setState({showModal: false})
                                }}
                                aria-labelledby="ModalHeader">
                                <Modal.Header closeButton>
                                    <Modal.Title id='ModalHeader'>Thanks for Signing Up with Kudzoka!</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Check your Email to complete Signup Process.</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <button className="btn btn-info btn-block text-center" onClick={this.ok}>
                                        OK
                                    </button>
                                </Modal.Footer>

                            </Modal>


                        </div>
                    </div>
                </div>
        );
    }
}

export default SignupRider;
