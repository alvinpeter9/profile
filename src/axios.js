import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://contact-form-c7d29-default-rtdb.firebaseio.com/'
});

export default instance;
