import { useState } from "react";

const useSpots = () => {

    const [currentInvest, setCurrentInvest] = useState({
        total_payed: 0
    });



    return {
        currentInvest,
        setCurrentInvest,
    }
}

export default useSpots;