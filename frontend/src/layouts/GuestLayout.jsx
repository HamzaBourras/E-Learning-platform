/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import { Button, Input, Spinner } from '@nextui-org/react';
import useForm from './../hooks/useForm';
import { LOGIN_API } from '../api/apis';
import Background from '../assets/images/bg.png'
import { useEffect, useState } from 'react';

import { EyeFilledIcon } from './../components/EyeFilledIcon';
import { EyeSlashFilledIcon } from './../components/EyeSlashFilledicon';
import Alert from './../components/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { saveProfessor } from '../state/features/Professor/professorSlice';


const GuestLayout = () => {
    const apiKey = LOGIN_API
    // ----------------------------------------------
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const initialState = {
        'username': '',
        'password': ''
    }

    const { inputs, errors, data, isLoading, handleChange, handleSubmit } = useForm(initialState, apiKey, "post")

    // - -- - - - -- -- - -save data to redux-      - - - - - - -- 
    // const dispatch = useDispatch();
    // useEffect(()=>{
    //     // if (data && !data['data']['message']) {
    //     //     dispatch(saveProfessor(data['data']))
            
    //     // }

    // }, [data,dispatch])


    // const user = useSelector((state) => state.professor.user);
    // if (user && Object.keys(user).length > 0) {
    //     // return <Navigate to="/auth" replace />
    //     console.log(user);
    // }

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <img className="absolute -z-50 object-cover w-full h-full opacity-30" src={Background} />
            <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                    <img src={Logo} width={150} className="mx-auto" />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        {(data && ['data']['message']) && <Alert message={data['data']['message']} color="danger" />}
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                >
                    <div>
                        <label className="font-medium">
                            Username
                        </label>
                        <Input
                            size='sm'
                            type='text'
                            value={inputs['username']}
                            errorMessage={errors['username']}
                            onChange={(e) => handleChange('username', e.target.value)}
                            variant='bordered'
                            placeholder="Your username"
                        />

                    </div>
                    <div>
                        <label className="font-medium">
                            Password
                        </label>
                        <Input
                            size='sm'
                            value={inputs['password']}
                            errorMessage={errors['password']}
                            onChange={(e) => handleChange('password', e.target.value)}
                            variant='bordered'
                            placeholder="Your password"
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                    {isVisible ? (
                                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    )}
                                </button>
                            }
                            type={isVisible ? "text" : "password"}
                        />
                    </div>
                    <Button
                        type='submit'
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        {isLoading ? (<div className='flex items-center gap-1'><Spinner color="default" /> Please wait ...</div>) : 'Sign In'}
                    </Button>
                    <div className="text-center">
                        <p className="hover:text-indigo-600">Forgot password?</p>
                    </div>
                </form>
            </div>
        </main>
    )
};

export default GuestLayout;