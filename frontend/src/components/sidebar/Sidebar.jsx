import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import Tabs from './Structre';

const Sidebar = () => {
    return (
        <div className="shadow h-dvh py-2 grid grid-rows-3 gap-3 place-content-center">
            <Link to="/" className="row-end-1 place-self-center text-center">
                <img src={Logo} alt="logo" className='size-16 object-contain -mb-3'/>
                <span className='font-bold text-lg text-purple-800 drop-shadow'>UCA</span>
            </Link>

            <div className="bg-red- row-span-3 py-2 space-y-3 flex flex-col">
                {Tabs.map(i => (
                    <NavLink
                        id={i.name}
                        key={i.id}

                        className={`cursor-pointer mx-2  hover:bg-purple-400 group transition-all rounded-lg p-2 flex items-center justify-center space-x-2 `}
                    >

                        <div className='w-full inline-flex space-x-2'>
                            <img
                                src={i.icon}
                                alt={i.name}
                                className='w-4 group-hover:invert'
                            />
                            <span className='xs:hidden sm:hidden md:block lg:block group-hover:text-white'>
                                {i.name}
                            </span>
                        </div>
                    </NavLink>

                ))}
            </div>
            <div className="bg-gray-200">

            </div>

        </div >
    );
};
export default Sidebar;