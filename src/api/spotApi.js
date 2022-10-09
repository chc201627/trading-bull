import { SPOTS } from './apiConfig';

class Spot {

    instance;

    constructor(instance) {
        this.instance = instance;
    }

    async getCurrentSpot() {
        return this.instance.get(SPOTS.generalSpots, {});
    }
}

export default Spot;