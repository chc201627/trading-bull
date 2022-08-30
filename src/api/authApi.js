import { AUTH } from './apiConfig';

class Auth {

    instance;

    constructor(instance) {
        this.instance = instance;
    }

    async login({signature, deadline, address}) {
        return this.instance.post(AUTH.login, {signature, deadline, address});
    }

    async signUp({signature, deadline, referralCode, address}) {
        return this.instance.post(AUTH.signUp, {signature, deadline, referralCode, address});
    }
}

export default Auth;