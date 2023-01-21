import Httphandler from "../services/Httphandler";


const useApi = function () {
    const httpHandle = function (endpoint, method, data, options = {}) {
        return Httphandler[method](endpoint, data, options);
    }

    return { httpHandle };
}

export default useApi;