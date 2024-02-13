
import { useEffect, useState } from "react";

function useCurrencyInfo(currencyAsParam = 1) {
    
    const [resData, setResData] = useState({});

    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyAsParam}.json`;

    useEffect(()=>{
        fetch(url)
        .then((res) => {return res.json()})
        .then((res) => setResData(res[currencyAsParam]))
    }, [resData])

    return resData;
}

export default useCurrencyInfo;