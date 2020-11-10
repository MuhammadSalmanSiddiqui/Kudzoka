import React, {Component} from 'react';
import final from '../../../assets/img/icons/common/final.svg'
import './vendor.scss'
import '../../../views/examples/Login/login.styles.scss';
import Inputmask from "inputmask";
import Modal from "react-bootstrap/Modal"
import Select from 'react-select';
import {
  authenticateVendor,
} from '../../../api config/AuthServices';
 
class SignupVendor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "firstname": '',
            "lastname": '',
            "address": '',
            "StoreName": '',
            "StoreAddress": '',
            "bnumber": '',
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
            "imageFile": "",
            "imagePath": "",
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
        if (this.state.password !== this.state.cpassword) {
            alert("Passwords don't match");
        } else {
            // let formData = new FormData();
            // formData.append('Email', this.state.email);
            // formData.append('City', this.state.city);
            // formData.append('PhoneNo', this.state.phone);
            // formData.append('Password', this.state.password);
            // formData.append('BusinessRegNo', this.state.bnumber);
            // formData.append('Country', "NOCOUNTRY");
            // formData.append('StoreAddress', this.state.StoreAddress);
            // formData.append('StoreName', this.state.StoreName);
            // formData.append('CNIC', "37234446787564");
            // formData.append('Area', "Unknown Area");
            // formData.append('HolidayMode', true);
            // formData.append('file', this.state.imageFile);
            // // formData.append('ImagePath', this.state.imagePath);

            // formData.append('FirstName', this.state.firstname);
            // formData.append('LastName', this.state.lastname);
            // formData.append('WhatsappNo', this.state.whatsappMobile);

            // const config = {
            //     headers: {'content-type': 'multipart/form-data'}
            // }

            // axios.post("https://api.kudzoka.com/api/Vendor/AddVendor", formData , config)
            //     .then(response => {
            //         console.log(response)
            //         this.setState({showModal: true})
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     });
            

            // ------ Alternative Approch

            const Vendor = {
                FirstName: this.state.firstname,
                LastName: this.state.lastname,
                Email: this.state.email,
                City: this.state.city,
                MobileNo: this.state.mobile,
                PhoneNo: this.state.phone,
                WhatsappNo: this.state.whatsappMobile,
                Password:this.state.password,
                BusinessRegNo: this.state.bnumber,
                StoreName: this.state.StoreName,
                StoreAddress: this.state.StoreAddress,
                file: this.state.imageFile,
                Country: "NOCOUNTRY",
                Area: this.state.location,
                HolidayMode: true,
                CNIC: ""   
            };

            authenticateVendor(Vendor)
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

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    selectCity = (city) => {
        this.setState({locations: this.state.citylocations[city.value], city: city.value})
    }

    selectLocation = (location) => {
        this.setState({location: location.value})
    }

    profilepicture(event) {
        let img = event.target.files[0];
        this.setState({
        imageFile: img ,
        imagePath: URL.createObjectURL(img)
      });
    }


    render() {
        return (
                <div className="container-fluid bg">
                    <div className="row text-center">
                        <div className="col-lg-4 offset-md-2\1 offset-lg-4">
                            <img src={final} alt="" className="img-fluid"/>
                            <form className="form">
                                <input type="text" className="form-control" name="firstname"
                                       aria-describedby="emailHelp" placeholder="First Name*"
                                       onChange={(e) => this.handleChange(e)} required/>
                                <br/>
                                <input type="text" className="form-control" name="lastname" placeholder="Last Name*"
                                       onChange={(e) => this.handleChange(e)} required/>
                                <br/>
                                <input type="text" className="form-control" name="StoreName" placeholder="Store Name*"
                                       onChange={(e) => this.handleChange(e)} required/>
                                <br/>
                                <input type="text" className="form-control" name="StoreAddress"
                                       placeholder="Store Address*"
                                       onChange={(e) => this.handleChange(e)} required/>
                                <br/>
                                <Select
                                        className="selectMN"
                                        options={this.state.cities}
                                        onChange={this.selectCity}/>
                                <br/>
                                <Select className="selectMN"
                                        options={this.state.locations}
                                        onChange={this.selectLocation}/>
                                <br/>
                                <input type="email" className="form-control" name="email" placeholder="Email*"
                                       onChange={(e) => this.handleChange(e)} required/>
                                <br/>
                                <input type="tel" className="form-control" name="phone" placeholder="Phone Number*"
                                       data-inputmask="'mask': '(02) 999999999'"
                                       onChange={(e) => this.handleChange(e)} required/>
                                <br/>
                                <input type="tel" className="form-control" name="mobile"
                                       data-inputmask="'mask': '(07) 999999999'"
                                       placeholder="Mobile Number*" 
                                       onChange={(e) => this.handleChange(e)} required/>
                                <br/>
                                <input type="tel" className="form-control" name="whatsappMobile"
                                       data-inputmask="'mask': '(07) 999999999'"
                                       placeholder="Whatsapp Number*" 
                                       onChange={(e) => this.handleChange(e)} required/>
                                <br/>
                                <input type="text" className="form-control" name="bnumber"
                                       placeholder="Business Registration Number*"
                                       onChange={(e) => this.handleChange(e)} required/>
                                <br/>
                                <div className="form-group class form-control"
                                     style={{textAlign:"left", backgroundColor: "white", paddingTop: "8px", paddingBottom: "49px"}}
                                     required="">
                                    <input type="file" id="myfile" name="myfile"
                                           onChange={(e) => this.profilepicture(e)}/>
                                    <p style={{fontSize: "11px", position: "relative", left: "105px"}}>(Upload picture
                                        of your store)</p>
                                </div>

                                <input type="password" className="form-control" name="password" minLength="7"
                                       placeholder="Password*"
                                       onChange={(e) => this.handleChange(e)} required/>
                                <br/>
                                <input type="password" className="form-control" name="cpassword"
                                       placeholder="Confirm Password" minLength="7"
                                       onChange={(e) => this.handleChange(e)} required/>
                                <br/>

                                <div style={{textAlign: "left"}}>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required=""/>
                                    <label className="form-check-label text-white" htmlFor="exampleCheck1">I agree with
                                        the <span className="text-primary">Privacy Policy</span></label>
                                </div>
                                <br/>


                                <button onClick={e=>this.Signup(e)} className="btn btn-info btn-block text-center font-weight-bold ">SignUp as Vendor
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

export default SignupVendor;
