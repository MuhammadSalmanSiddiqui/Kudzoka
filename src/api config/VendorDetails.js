import api from './api';

export function getAllVendors() {
    return api.get('Vendor/Vendors');
  }
  export function getVendorsStatus(status) {
    return api.post('Vendor/ApproveVendor',status);
  }