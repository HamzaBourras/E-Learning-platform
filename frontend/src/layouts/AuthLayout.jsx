/* eslint-disable react/prop-types */
import { Outlet, Navigate } from 'react-router-dom'


const AuthLayout = () => {
    const user = true;
    if (!user) {
        return <Navigate to="/" replace/>;
    }

    return (
        <div className=''>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default AuthLayout;