import React, { Component } from 'react';
import final from '../../../assets/img/icons/common/final.svg';
import './NewPasswordPage.styles.scss';
class NewPasswordPage extends Component {
    render() {
        return (
            <body>
                <div class="container"><br /><br /><br />
                    <div class="row text-center mt-5">
                        <div class="col-lg-4 offset-md-2\1 offset-lg-4 ">
                            <div class="img">
                                <img src={final} alt="" class=" img-fluid" /></div><br />
                            <form action="" class="form mt-3">
                                <a href="" class=" text-white text-center" style={{ fontSize: "22px", fontWeight: "500" }}>Forgot password?</a><br /><br />
                                <div class="form-group">
                                    <input type="password" class="form-control" id="exampleInputEmail1" placeholder="Enter New Passworrd*" />
                                </div><br />
                                <div class="form-group">
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm New Passworrd*" />
                                </div><br />
                                <button type="submit" class="btn btn-info btn-lg text-center px-5 py-2">Send</button><br />

                            </form><br /><br /><br />
                        </div>
                    </div>
                </div>


            </body>
        );
    }
}
export default NewPasswordPage;
