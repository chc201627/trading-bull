

class Spots {

    instance;

    constructor(instance){
        this.instance = instance;
    }

    async getSpots(){
        return this.instance.get()
    }
}

export default Spots;