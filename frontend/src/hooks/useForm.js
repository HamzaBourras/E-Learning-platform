import { useState } from "react"
import axios from 'axios'

const useForm = (initialState, api, method) => {

    const [inputs, setInputs] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('');

    const handleChange = (name, value) => {
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await axios[method](api, inputs,{headers: {"Content-Type": "multipart/form-data"}})
                .then(res => {
                    if (res.status == 200) {
                        setMessage("Data posted successfully")
                        console.log(res);
                    }
                })

        } catch (error) {
            const err = error?.response?.data?.errors;
            setErrors(err)
        }
        finally {
            setIsLoading(false);
        }
    }

    return { inputs, errors,message, isLoading, handleChange, handleSubmit }
}

export default useForm;