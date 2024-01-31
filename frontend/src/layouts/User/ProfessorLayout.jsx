import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from 'react-router-dom'
import ProfessorStructure from '../../components/sidebar/ProfessorStructure';
const ProfessorLayout = () => {
    return (
        <div className='flex'>
            <div className='grow-0'>
                <Sidebar tabs={ProfessorStructure} user="professor" />
            </div>
            <div className='grow shrink xs:sm:ml-24 mr-3 md:lg:ml-56 py-3 overflow-hidden'>
                <div className='md:lg:mx-40'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default ProfessorLayout;