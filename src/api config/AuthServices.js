import api from './api';
import api1 from './api1';


export function authenticateRider(users) {
    const formData = new FormData()
    Object.keys(users).forEach((key) => {
      formData.append(key, users[key])
    })
    return api.post('Rider/AddRider', formData);
  }

  export function authenticateVendor(users) {
    const formData = new FormData()
    Object.keys(users).forEach((key) => {
      formData.append(key, users[key])
    })
    return api.post('Vendor/AddVendor', formData);
  }  
  export function authenticate(users) {
    return api.post('Login/Authenticate', users);
  }  
  export function ForgotPasswords(users) {
    return api.post('Login/ChangePassword', users);
  }  

  