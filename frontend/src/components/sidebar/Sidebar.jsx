/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { Link, NavLink, Navigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import { Divider, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, Button } from "@nextui-org/react";
import classNames from 'classnames';
import useForm from '../../hooks/useForm';
import { LOGOUT_API } from '../../api/apis';


const Sidebar = ({ tabs, user }) => {
    let color = ''
    let main = null

    switch (user) {
        case 'director':
            color = 'secondary'
            main = classNames({
                'hover:bg-purple-400': true
            })
            break;

        case 'professor':
            color = 'danger'
            main = classNames({
                'hover:bg-red-400': true
            })
            break;

        case 'student':
            color = 'warning'
            main = classNames({
                'hover:bg-orange-300': true
            })
            break;
    }

    const auth = JSON.parse(localStorage.getItem('user'))
    const { data, handleSubmit } = useForm({}, LOGOUT_API, 'post', false, true)

    const handleLogout = () => {
        if (data) {
            // localStorage.clear()
            // return <Navigate to={'/'} replace />;
            console.log(data);
        }
    }


    return (
        <nav className='fixed flex flex-col gap-3 items-center h-dvh xs:sm:w-20 md:lg:w-52 border-r-1'>
            <div className="h-[10vh] grow-0 flex items-center justify-center px-8 my-3">
                <Link
                    to={`/auth/${user}`}
                    className="flex-none flex flex-col items-center">
                    <img
                        src={Logo}
                        width={65}
                    />
                    <span className='font-bold text-purple-700 text-lg drop-shadow'>UCA</span>
                </Link>

            </div>
            <div className='h-[80vh] mt-5 flex-shrink relative'>
                <ul className="px-4 text-sm font-medium flex-1">
                    {tabs.map(i => (
                        <NavLink
                            to={i.path}
                            key={i.id}
                            className={({ isActive }) => `cursor-pointer mx-2 mb-2 ${main} group transition-all rounded-lg p-2 flex items-center justify-center space-x-2 ${isActive ? 'active' : ''}`}
                        >
                            <div className='w-full inline-flex space-x-3'>
                                <img
                                    src={i.icon}
                                    alt={i.name}
                                    className='w-5 opacity-80 group-hover:invert'
                                />
                                <span className="absolute z-50 xs:sm:left-14 md:lg:group-hover:hidden hidden p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 group-hover:inline-block group-focus:hidden duration-150">
                                    {i.name}
                                </span>
                                <span className='xs:hidden sm:hidden md:hidden lg:block group-hover:text-white text-gray-800'>
                                    {i.name}
                                </span>
                            </div>
                        </NavLink>
                    ))
                    }
                </ul>
            </div>

            <Divider />
            <div className="h-[8vh] grow-0 flex justify-center space-y-3 w-full">
                <div className='flex gap-3 items-center'>
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color={color}
                                name="Jason Hughes"
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem
                                key="my info"
                                className="h-14 gap-2"
                                textValue='info'
                            >
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">{auth.email}</p>
                            </DropdownItem>
                            <DropdownItem key="profile" textValue="My Profile">
                                <Link to={`../${user}/profile`} replace>My Profile</Link>
                            </DropdownItem>
                            <DropdownItem
                            >
                                Logout
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <span className='xs:sm:hidden md:lg:block'>{auth.firstName} {auth.lastName}</span>
                </div>
            </div>
        </nav>
    );

}
export default Sidebar;