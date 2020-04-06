import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:9090',
  withCredentials: false,
  headers: {
    Acccept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  checkAuthorization(userName, password) {
    return apiClient.get('/api/v1/authorization/' + userName + '/' + password);
  },
  getBenefits(name) {
    return apiClient.get('/api/v1/benefits/' + name);
  },
};
