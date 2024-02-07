import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);

            await axios.get(url)
                .then((res) => {
                    setData(res.data);
                    setIsLoading(false);
                })

                .catch(error => {
                    setError(error)
                    console.error(error)
                })

                .finally(() => {
                    setIsLoading(false)
                })
        };

        getData();

    }, [url]);

    return { isLoading, data, error }
};

export default useFetch;
