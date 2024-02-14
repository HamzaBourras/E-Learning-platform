/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import { Button, Input, Spinner } from '@nextui-org/react';
import useForm from './../hooks/useForm';


const GuestLayout = () => {
    const user = false;
    if (user) {
        return <Navigate to="/auth" replace/>
    }

    const apiKey = ""
    // ----------------------------------------------

    const initialState = {
        'username': '',
        'password': ''
    }

    const { inputs, errors, isLoading, handleChange, handleSubmit } = useForm(initialState, apiKey, "post")

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                    <img src={Logo} width={150} className="mx-auto" />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        
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
                            onChange={(e)=>handleChange('username', e.target.value)}
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
                            type="password"
                            value={inputs['password']}
                            errorMessage={errors['password']}
                            onChange={(e)=>handleChange('password', e.target.value)}
                            variant='bordered'
                            placeholder="Your password"
                        />
                    </div>
                    <Button
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        {isLoading ? (<div className='flex items-center gap-1'><Spinner color="default" /> Please wait ...</div>) : 'Sign In'}
                    </Button>
                    <div className="text-center">
                        <a href="javascript:void(0)" className="hover:text-indigo-600">Forgot password?</a>
                    </div>
                </form>
            </div>
        </main>
    )
};

export default GuestLayout;