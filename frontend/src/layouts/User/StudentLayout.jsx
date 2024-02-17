import { Outlet } from "react-router"
import Sidebar from "../../components/sidebar/Sidebar"
import StudentStructure from '../../components/sidebar/StudentStructure';


const StudentLayout = () => {
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