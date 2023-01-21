// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
    // .. where we make our configurations
    baseURL: process.env.REACT_APP_BASE_URL

});

instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use(request => {
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    return response;
},
    error => {
        console.log(error);
        return Promise.reject(error);
    });


export default instance;    