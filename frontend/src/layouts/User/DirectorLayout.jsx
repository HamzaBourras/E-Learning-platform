/* eslint-disable react/prop-types */
import Sidebar from '../../components/sidebar/Sidebar'
import DirectorStructre from '../../components/sidebar/DirectorStructure';
import { Outlet } from 'react-router-dom'
const DirectorLayout = () => {
    return (
        <div>
            <div className='flex'>
                <div className='grow-0'>
                    <Sidebar tabs={DirectorStructre} user="director" />
                </div>
                <div className='grow shrink xs:sm:ml-24 mr-3 md:lg:ml-56 py-3 overflow-hidden'>
                    <div className='md:lg:mx-40'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DirectorLayout;
