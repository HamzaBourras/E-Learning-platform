import { Badge, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { NotificationIcon } from './NotificationIcon';
export const NotificationComponent = () => {
    return (
        <div>
            <div>
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Button
                            size="md"
                            radius="sm"
                            isIconOnly
                            aria-label="notifications"
                            variant=""
                            className="relative"
                        >
                            <Badge 
                                content="3" 
                                shape="rectangle" 
                                color="danger" 
                                className='absolute left-1 -top-2'
                                />
                            <NotificationIcon />
                        </Button>

                    </DropdownTrigger>
                    <DropdownMenu 
                        aria-label="Profile Actions" 
                        variant="flat"
                        >
                        <DropdownItem key={1} isReadOnly>
                            test1
                        </DropdownItem>
                        <DropdownItem key={2} isReadOnly>
                            test2
                        </DropdownItem>
                        <DropdownItem key={3} isReadOnly>
                            test3
                        </DropdownItem>
                        
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    );
};
