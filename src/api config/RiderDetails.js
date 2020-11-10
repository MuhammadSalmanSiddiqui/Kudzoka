import api from './api';

export function getAllRider() {
    return api.get('Rider/Riders');
  }

  export function getRiderStatus(status) {
    return api.post('Rider/ApproveRider',status);
  }
