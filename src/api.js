import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',  // Adjust according to backend deployment
});

export default api;
