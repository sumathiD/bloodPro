import axios from 'axios';

const token = localStorage.getItem('token');
const instance = axios.create({
    baseURL:'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('user')}`
    }
});

export default instance;
