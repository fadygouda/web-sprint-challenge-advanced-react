// write your custom hook here to control your checkout form
import { useState } from 'react'

const useForm = initialState => {

    const [values, setValues] = useState(initialState);

    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    const clearForm = () => {
        setValues(initialState);
    }

    return[values, handleChange, clearForm];
}

export default useForm;