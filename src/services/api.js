import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://trial-dnrc.onrender.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;
