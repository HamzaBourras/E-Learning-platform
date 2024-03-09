import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, reRender = null) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);

            await axios.get(url, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then((res) => {
                    setData(res.data);
                    setIsLoading(false);
                })

                .catch(error => {
                    setError(error.response?.data?.message)
                    console.error(error)
                })

                .finally(() => {
                    setIsLoading(false)
                })
        };

        getData();

        return setData(null)

    }, [url, reRender]);

    return { isLoading, data, error }
};

export default useFetch;


