import axios from 'axios';

const token = localStorage.getItem('token');
const instance = axios.create({
    baseURL:'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('user')}`
    }
});
    
    // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('user')}`;
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default instance;
//instance.defaults.headers.common