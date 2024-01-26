/* eslint-disable react/prop-types */
import Sidebar from '../../components/sidebar/Sidebar'
import DirectorStructre from '../../components/sidebar/DirectorStructure';
import { Outlet } from 'react-router-dom'
const DirectorLayout = () => {
    return (
        <div>
            <div className='flex'>
                <div className='grow-0'>
                    <Sidebar tabs={DirectorStructre}/>
                </div>
                <div className='grow shrink xs:sm:ml-24 mr-3 md:lg:ml-52 py-3 overflow-hidden'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DirectorLayout;
