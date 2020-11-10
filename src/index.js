/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import "jquery/dist/jquery.min.js";
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminLayout from "layouts/Admin.js";
import Login from "views/examples/Login/login.jsx";
import Landing from "views/examples/Landing.js";
import SignupRider from "views/examples/SignupRiderPage/SignupRiderPage";
import SignupVendor from "views/examples/SignupVendorPage/SignupVendor";
import AdminLogin from "views/examples/AdminLogin";
import ForgotPassword from "views/examples/Forgot Password/ForgotPasswordPage";
import NewPasswordPage from "./views/examples/New Password/NewPasswordPage";
import './App.css';
import './index.css';

// import Index from "views/Index.js";
const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
    <Switch>
      <Redirect from="/" exact to="/landing"></Redirect>
      <Redirect from ="/landingpage" to="/landing" />
      <Route path ="/login" component={ Login }   />
      <Route path ="/landing" component={ Landing }   />
      <Route path ="/AdminLogin" component={ AdminLogin }   />
      <Route path ="/registerRider" component={ SignupRider }   />
      <Route path ="/registerVendor" component={ SignupVendor }   />
      {/* <Route path ="/admin" component={ Index }   /> */}
      <Route path="/admin" render={props => <AdminLayout {...props} />}/>
      <Route path="/ForgotPassword" component={ForgotPassword} />
      <Route path="/resetPassword" component={NewPasswordPage} />
      {/* <Route path="/Login" render={props => <AuthLayout {...props} />} />  */}
      <Redirect from="/" to="/landing" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
