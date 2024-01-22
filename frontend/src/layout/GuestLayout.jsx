import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Guest = () => {
    let isAuth;
    const user = useSelector((state)=> state.user.value);
    user == null ? (isAuth = false) : (isAuth = true);

    return  !isAuth ? <Outlet/> : <Navigate to="/admin" />
}

export default Guest