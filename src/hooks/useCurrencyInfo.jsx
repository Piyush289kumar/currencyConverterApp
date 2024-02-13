
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    
    const [resData, setResData] = useState({});

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => {return res.json()})
        .then((res) => setResData(res[currency]))
    }, [currency])

    return resData;
}

export default useCurrencyInfo;