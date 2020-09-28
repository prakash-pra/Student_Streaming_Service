import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost/SSSP/src/controller`
});

export default api;
