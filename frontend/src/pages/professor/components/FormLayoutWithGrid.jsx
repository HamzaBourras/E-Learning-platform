/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Modal, ModalContent, ModalHeader, ModalBody, Divider, ModalFooter, useDisclosure, ButtonGroup, Button } from "@nextui-org/react";
import { useState } from 'react';
import grid from '../../../assets/icons/gridSQ.svg'
import list from '../../../assets/icons/grid_list.svg'
import { PlusIcon } from '../../../components/PlusIcon';
import { uncapitalize } from "../../../utils/utils";


const FormLayoutWithGrid = ({ data, image, Component, name }) => {

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [isGrid, setIsGrid] = useState(true);

    const [selectedId, setSelectedId] = useState(null);

    const openForm = (id = null) => {
        setSelectedId(id);
        onOpen();
    };
    return (
        <div className="space-y-2">
            <div className='flex justify-end gap-1'>
                <ButtonGroup size='sm' radius='sm' variant='bordered'>
                    <Button onClick={() => setIsGrid(true)}>
                        <img src={grid} className='w-4' alt="Grid Icon" />
                    </Button>
                    <Button onClick={() => setIsGrid(false)}>
                        <img src={list} className='w-5' alt="Grid Icon" />
                    </Button>
                </ButtonGroup>
                <Button
                    onPress={onOpen}
                    className="bg-foreground text-background"
                    endContent={<PlusIcon />}
                    size="sm">Create {name}</Button>
            </div>
            <Modal
                size="full"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                onClose={() => {
                    setSelectedId(null);
                    onClose();
                }}
                className="overflow-auto"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="text-center">Create {name}</ModalHeader>
                            <ModalBody>
                                <Component id={selectedId} />
                            </ModalBody>
                            <ModalFooter>
                                {/* <Button color="danger" variant="solid" onPress={onClose}>
                                        Close
                                    </Button> */}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Divider />
            <div className={` grid ${isGrid ? 'xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7' : ''} gap-2`}>
                {
                    data.map(item => (
                        <div
                            onClick={() => openForm(item.id)}
                            key={item.id}
                            className={`flex  p-3 ${isGrid ? 'flex-col justify-center items-center text-center' : 'items-center'} hover:cursor-pointer hover:bg-gray-50 rounded-md border`}>
                            <img src={image} className='w-12' alt={item.quizName} />
                            <div>
                                <h1 className='text-sm font-medium text-balance text-gray-500'>{item[uncapitalize(name) + 'Name']}</h1>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FormLayoutWithGrid