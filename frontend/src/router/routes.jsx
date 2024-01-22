import { Routes as Router, Route } from 'react-router-dom'
import AuthForm from '../pages/auth/AuthForm';
import ManagerHomePage from '../pages/manager/home/ManagerHomePage';
import NotFound from '../pages/NotFound';

import GuestLayout from '../layout/GuestLayout';
import AuthLayout from '../layout/AuthLayout';


export const MyRoutes = () => {
    return (
        <Router>
            <Route element={<GuestLayout/>}>
                <Route path='/login' index element={<AuthForm />} />
            </Route>

            <Route element={<AuthLayout/>}>
                <Route path='/admin' element={<ManagerHomePage />} />
            </Route>

            <Route path='/*' element={<NotFound />} />
        </Router>
    )
}