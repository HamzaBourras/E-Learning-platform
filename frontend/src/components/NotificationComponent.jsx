/* eslint-disable react/prop-types */
import { Badge, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { NotificationIcon } from './NotificationIcon';
import { useState } from 'react';
export const NotificationComponent = ({ notifications }) => {

    const [notificationCounter, setNotificationCounter] = useState(notifications.length)
    return (
        <div>
            <div>
                <Dropdown
                    placement="bottom-end"
                    radius='none'
                >
                    <DropdownTrigger
                        
                    >
                        <Button
                            size="md"
                            radius="sm"
                            isIconOnly
                            aria-label="notifications"
                            variant=""
                            className="relative"
                        >
                            <Badge
                                content={notificationCounter}
                                shape="rectangle"
                                color="danger"
                                className='absolute left-1 -top-2'
                            />
                            <NotificationIcon />
                        </Button>

                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Notifications"
                        variant="faded"
                        className=''
                    >
                        {
                            notifications.map(notification => (
                                <DropdownItem
                                    key={notification.id}
                                    isReadOnly
                                >
                                    <div className='flex flex-col px-3 rounded'>
                                        <span className='font-medium text-sm'>Professor: <p className='inline text-gray-600'>{notification.professor}</p></span>
                                        <p className='w-'>
                                            {notification.announcementName}
                                        </p>
                                    </div>
                                </DropdownItem>
                            ))
                        }


                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    );
};
