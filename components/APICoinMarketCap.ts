import { useState, useEffect } from 'react'
import axios from 'axios';

const APICoinMarketCapTop = (n: number) => {

    const client = axios.create({
        baseURL: "https://pro-api.coinmarketcap.com",
        headers:
        {
            "X-CMC_PRO_API_KEY": "cd836a4e-36d8-4404-8857-7ded29edda69"
        }
    });

    const [data, setData] = useState([]);

    useEffect(() => {
        client
            .get(`/v1/cryptocurrency/listings/latest?limit=${n}`)
            .then((response) => {
                console.log(response.data.data);
                setData(response.data.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    if (!data) return null;

    return data;

}

export default APICoinMarketCapTop;
