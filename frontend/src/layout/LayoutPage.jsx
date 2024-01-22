import Navigationbar from "../components/navbar/Navigationbar"
import Sidebar from "../components/sidebar/Sidebar"
import { useLocation } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const LayoutPage = ({ children }) => {

    const {pathname} = useLocation();
    const controlPath = pathname !== '/' && pathname !== '.*'
    
    return (
        <div>
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
        </div>
    )
}

export default LayoutPage
