import axios from 'axios';

// Modules
// import ConfigApi from './modules/configApi';
// import CustomerApi from './modules/customerApi';

// Axios instance for Altipal API
// This is a singleton instance
class Api {

    static apiInstance = undefined;

    instance;
    
    axios;

    constructor() {
        this.instance = this.createInstance('');
        this.axios = axios.bind(this);
    }

    static createInstance() {
        const object = new Api();
        return object;
    }

    static getInstance () {
        if (!this.apiInstance) {
            this.apiInstance = Api.createInstance();
        }
        return this.apiInstance;
    }

    createInstance(url) {
        return this.axios.create({
            baseURL: url,
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }

    // Api modules
    // get config() {return new ConfigApi(this.instance)};
    // get customer() {return new CustomerApi(this.instance)};
    
}

export {
    Api
}
