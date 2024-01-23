/* eslint-disable react/prop-types */
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import {Divider, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";

const Sidebar = ({ tabs }) => {
    return (
        <div className='grow-0 xs:w-10 sm:w-12 md:w-28 lg:w-40 bg-opacity-15'>
            <div className="shadow h-dvh py-2 grid grid-rows-3 gap-3 place-content-center">
                <Link to="/" className="row-end-1 place-self-center text-center">
                    <img src={Logo} alt="logo" className='size-16 object-contain -mb-3' />
                    <span className='font-bold text-lg text-purple-800 drop-shadow'>UCA</span>
                </Link>
                <div className="bg-red- row-span-3 py-2 space-y-3 flex flex-col">
                    {tabs.map(i => (
                        <NavLink
                            to={i.path}
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
                <div className=" flex flex-col items-center space-y-3 px-1">
                    <Divider/>
                    <div>
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
                    </div>
                </div>
            </div >
        </div>
    );
};
export default Sidebar;