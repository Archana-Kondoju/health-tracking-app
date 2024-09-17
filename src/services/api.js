import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://trial-dnrc.onrender.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;
