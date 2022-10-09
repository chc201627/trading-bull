import { REFERRAL } from './apiConfig';

class Referral {

    instance;

    constructor(instance) {
        this.instance = instance;
    }

    async createNewCode() {
        return this.instance.post(REFERRAL.referralCodes, {});
    }
}

export default Referral;