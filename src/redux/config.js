import axios from 'axios';
import { URL_API } from '../config';

function getToken() {
  const accessToken = localStorage.getItem('accessToken')
  return accessToken;
}



const axiosInstance = axios.create({
  baseURL: URL_API,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
});

export default axiosInstance;