/* eslint-disable react/prop-types */
import Sidebar from '../../components/sidebar/Sidebar'
import DirectorStructre from '../../components/sidebar/DirectorStructure';

import { Outlet } from 'react-router-dom'
const DirectorLayout = () => {
    return (
        <div>
            <div className='flex gap-1'>
                <div>
                    <Sidebar tabs={DirectorStructre}/>
                </div>
                <div className='grow shrink col-span-8'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DirectorLayout;

/*

<div className="relative flex gap-1 z-40">
                {controlPath && <div className="grow-0 xs:w-10 sm:w-12 md:w-28 lg:w-40 bg-opacity-15">
                    <Sidebar />
                </div>}

                <div className="grow shrink col-span-8">
                    { controlPath && <Navigationbar />}
                    <div className="p-3 h-screen">
                        {children}
                    </div>
                </div>
            </div>



*/