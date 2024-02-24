import { Navigate, Outlet } from "react-router"
import Sidebar from "../../components/sidebar/Sidebar"
import StudentStructure from '../../components/sidebar/StudentStructure';

import { uncapitalize } from '../../utils/utils'

const StudentLayout = () => {
    const user = uncapitalize(JSON.parse(localStorage.getItem('user')).role);
    if (user !== 'student') {
        return <Navigate to={`/auth/${user}`} replace />;
    }
    
    return (
        <div className='flex'>
            <div className='grow-0'>
                <Sidebar tabs={StudentStructure} user="student" />
            </div>
            <div className='grow shrink xs:sm:ml-24 mr-3 md:lg:ml-56 py-3 overflow-hidden'>
                <div className='md:lg:mx-40'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default StudentLayout