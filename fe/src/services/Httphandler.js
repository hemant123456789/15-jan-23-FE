import axiosConfig from '../services/axiosConfig';

class Httphandler {

    'http-get' = function (endpoint, options = {}) {
        return axiosConfig.get(endpoint, { ...options });

    }

    'http-post' = function (endpoint, data, options = {}) {
        return axiosConfig.post(endpoint, data, { ...options });

    }
}
/* eslint import/no-anonymous-default-export: [2, {"allowNew": true}] */
export default new Httphandler();