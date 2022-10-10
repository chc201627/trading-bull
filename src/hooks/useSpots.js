import { useState } from "react";

const useSpots = () => {

    const [currentInvest, setCurrentInvest] = useState({
        total_payed: 0
    });

    const handleCurrentInvest = (value, index) => {
        setCurrentInvest((current) => ({...current, [index]: value}))
    }

    return {
        currentInvest,
        setCurrentInvest,
        handleCurrentInvest,
    }
}

export default useSpots;