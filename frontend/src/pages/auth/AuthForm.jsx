import { Navigate } from 'react-router-dom'
import { Spinner ,Input, Select, SelectItem, Button } from '@nextui-org/react'
import { useState } from 'react';
import axios from '../../api/axios'
import { login } from '../../state/features/auth/authSlice'
import { useDispatch, useSelector  } from 'react-redux'

const AuthForm = () => {
    const LOGIN_URL = "/store";

    const [isLoading, setIsLoading] = useState(false);
    const [inputs, setInputs] = useState({
        'username': '',
        'password': '',
        'role_id': ''
    });
    const [errors, setErrors] = useState({
        'username': '',
        'password': '',
        'role_id': '',
        'message': ''
    });

    let isAuth;
    const user = useSelector((state)=> state.user.value);
    user == null ? (isAuth = false) : (isAuth = true);
    const dispatch = useDispatch();
    // --------------Methods------------------

    const handleSubmit = async () => {
        setIsLoading(true);
        setErrors(prevError => (
            {
                ...prevError,
                username: '',
                password: '',
                role_id: '',
                message: '',
            })
        )

        if (!inputs.username ||!inputs.password || !inputs.role_id) {

            setIsLoading(false);
            if (!inputs.username) {
                setErrors(prevError => ({ ...prevError, username: "Username field is required! " }))
            }
            if (!inputs.password) {
                setErrors(prevError => ({ ...prevError, password: "Password field is required! " }))
            }
            if (!inputs.role_id) {
                setErrors(prevError => ({ ...prevError, role_id: "Role field is required! " }))
            }
        }
        else {

                axios.post(LOGIN_URL,inputs)
                .then(res=>{
                    console.log(res?.data);
                    dispatch(login(inputs))
                    Navigate('/admin');
                })
                .catch(error=>{
                    if (error?.response?.data.status == 500) {
                        let errorMsg = error?.response?.data.message;
                        setErrors(prevError => ({ ...prevError, message: errorMsg }))
                    }
                    console.log(error);
                })
                .finally(()=>{
                    setIsLoading(false);
                })
        }


    }
    return (
        <>
            {isAuth ? (<Navigate to="/" />) : (
                <div className='flex relative flex-col justify-center items-center min-h-[80vh] space-y-3'>
                    <h1 className='text-3xl font-medium'>Login</h1>
                    {errors.message ? <p className="text-xs text-red-500 px-2">{errors.message}</p> : null}

                    <form onSubmit={(e) => e.preventDefault()} className='min-w-[30%] border p-5 rounded-lg space-y-2 flex flex-col items-center'>
                        <Input
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                            value={inputs.username}
                            size='md'
                            radius='sm'
                            type="text"
                            isRequired
                            label="Username"
                            variant='bordered' />
                        
                        {errors.username ? <p className="text-xs text-red-500 px-2">{errors.username}</p> : null}
                        <Input
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                            value={inputs.password}
                            size='md'
                            radius='sm'
                            type="password"
                            label="Password"
                            isRequired
                            variant='bordered' />
                        {errors.password ? <p className="text-xs text-red-500 px-2">{errors.password}</p> : null}
                        <Select
                            label="Select Your Role"
                            variant='bordered'
                            
                            radius='sm'
                            value={inputs.role_id}
                            onChange={(e) => setInputs({ ...inputs, role_id: e.target.value })}
                        >
                            <SelectItem key={1} >Manager</SelectItem>
                            <SelectItem key={2} >Professor</SelectItem>
                            <SelectItem key={3} >Student</SelectItem>
                        </Select>
                        {errors.role_id ? <p className="text-xs text-red-500 px-2">{errors.role_id}</p> : null}
                        <Button
                            variant='solid'
                            type='submit'
                            color='primary'
                            onClick={handleSubmit}
                            >
                            { isLoading ? (<div className="flex items-center gap-3 justify-center"><Spinner color='current' />Loading</div>) : (<span>Sign in</span>)}
                            </Button>

                    </form>
                </div>
            )}
        </>
    )
}

export default AuthForm
