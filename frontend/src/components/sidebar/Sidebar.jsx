/* eslint-disable react/prop-types */
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import { Divider, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";

const Sidebar = ({ tabs }) => {
    return (
        <nav className='fixed flex flex-col gap-3 items-center h-dvh xs:sm:w-20 md:lg:w-48 border-r-1'>
            <div className="h-[10vh] grow-0 flex items-center justify-center px-8">
                <Link className="flex-none">
                    <img
                        src={Logo}
                        width={65}
                    />
                </Link>
            </div>
            <div className='h-[80vh] mt-5 flex-shrink relative'>
                <ul className="px-4 text-sm font-medium flex-1">
                    {tabs.map(i => (
                        <NavLink
                            to={i.path}
                            key={i.id}
                            className={`cursor-pointer mx-2 mb-2 hover:bg-purple-400 group transition-all rounded-lg p-2 flex items-center justify-center space-x-2 `}
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
                                <span className='xs:hidden sm:hidden md:block lg:block group-hover:text-white text-gray-800'>
                                    {i.name}
                                </span>
                            </div>
                        </NavLink>
                    ))
                    }
                </ul >
            </div >

            <Divider />
            <div className="h-[8vh] grow-0 flex justify-center space-y-3 w-full">
                <div className='flex gap-3 items-center'>
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                name="Jason Hughes"
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">zoey@example.com</p>
                            </DropdownItem>
                            <DropdownItem key="settings">My Settings</DropdownItem>
                            <DropdownItem key="team_settings">Team Settings</DropdownItem>
                            <DropdownItem key="analytics">Analytics</DropdownItem>
                            <DropdownItem key="system">System</DropdownItem>
                            <DropdownItem key="configurations">Configurations</DropdownItem>
                            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                            <DropdownItem
                                key="logout"
                                color="danger">
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <span className='xs:sm:hidden md:lg:block'>John Doe</span>
                </div>
            </div>
        </nav >
    );

}
export default Sidebar;