/* eslint-disable react/prop-types */
import Navigationbar from "../components/navbar/Navigationbar"
import Sidebar from "../components/sidebar/Sidebar"
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const AuthLayout = ({ children }) => {
    let isAuth;
    const user = useSelector((state)=> state.user.value);
    user == null ? (isAuth = false) : (isAuth = true);
    return (
        isAuth ? <div>
            <div className="relative flex gap-1 z-40">
                <div className="grow-0 xs:w-10 sm:w-12 md:w-28 lg:w-40 bg-opacity-15">
                    <Sidebar />
                </div>

                <div className="grow shrink col-span-8">
                    <Navigationbar />
                    <div className="p-3 h-screen">
                        {children}
                    </div>
                </div>
            </div>
        </div>
            :
            <Navigate to="/login" />
    )
}
export default AuthLayout;
