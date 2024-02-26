/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Modal, ModalContent, ModalHeader, ModalBody, Divider, ModalFooter, useDisclosure, ButtonGroup, Button, Tab, Tabs, Card, CardBody } from "@nextui-org/react";
import { useState } from 'react';
import grid from '../../../assets/icons/gridSQ.svg'
import list from '../../../assets/icons/grid_list.svg'
import remove from '../../../assets/icons/delete.svg'
import edit from '../../../assets/icons/edit.svg'

import { PlusIcon } from '../../../components/PlusIcon';
import { getArrayById, uncapitalize } from "../../../utils/utils";
import { useDispatch } from "react-redux";
import { handleRenderAction } from "../../../state/features/Professor/professorSlice";


const FormLayoutWithGrid = ({ data, image, imageLogo, Component, name }) => {

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [isGrid, setIsGrid] = useState(name == "Announcement" || name == "Students" ? false : true);
    const [selectedId, setSelectedId] = useState(null);

    const [selectedKey, setSelectedKey] = useState('')
    const [deleteClicked, setDeleteClicked] = useState(false)


    const sectors = JSON.parse(localStorage.getItem('user')).sectors
    const filteredData = getArrayById(data, 'sector', selectedKey)
    const dispatch = useDispatch()

    const openForm = (id = null) => {
        setSelectedId(id);
        onOpen();
    };

    const handleDelete = (id) => {
        setSelectedId(id);
        setDeleteClicked(true);
        onOpen();
    }
    return (
        <div className="space-y-2 m-2">
            <div className="flex items-center space-x-4 p-2 m-1 w-full bg-blue-50 bg-opacity-15 rounded-md border">
                <img
                    className='w-20'
                    src={imageLogo}
                />
                <h1 className='font-semibold text-2xl text-blue-600'>{name == "Quiz" ? "Quizzes" : `${name}s`}</h1>
            </div>
            <Divider />
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
                // size="5xl"
                isOpen={isOpen}
                scrollBehavior="inside"
                onOpenChange={onOpenChange}
                onClose={() => {
                    setSelectedId(null);
                    onClose();
                    dispatch(handleRenderAction())
                    setDeleteClicked(false)
                }}
                className="overflow-auto"
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                            },
                        },
                        exit: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: "easeIn",
                            },
                        },
                    }
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="text-center">{selectedId ? deleteClicked ? "Delete" : 'Update' : 'Create'} {name}</ModalHeader>
                            <ModalBody>
                                {!deleteClicked && <Component id={selectedId} />}
                                {deleteClicked &&<div>
                                    <p className="text-sm text-gray-600">Are you sure you want to delete this {name} ?</p>
                                </div>}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="solid" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Divider />
            <div className="flex w-full flex-col">
                <Tabs
                    aria-label="Dynamic tabs"
                    items={sectors}
                    variant='underlined'
                    selectedKey={selectedKey}
                    onSelectionChange={setSelectedKey}
                >
                    {sectors.map((sector, index) => (
                        <Tab
                            key={sector}
                            title={sector}
                        >
                        </Tab>
                    ))}
                </Tabs>
            </div>
            <div className={` grid ${isGrid ? 'xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7' : ''} gap-2`}>
                {
                    filteredData && filteredData.length > 0 ?
                        (filteredData.map(item => (
                            <div
                                key={item.id}
                                className={`flex p-3 ${isGrid ? 'flex-col justify-center items-center text-center' : 'items-center'} hover:cursor-pointer hover:bg-gray-50 rounded-md border`}>
                                <img src={image} className='w-12' />

                                <div className={`flex items-center ${isGrid ? 'flex-col' : ''} w-full`}>
                                    <h1 className='text-sm font-medium text-balance flex-1 text-gray-500'>{item[uncapitalize(name) + 'Name']}</h1>
                                    <div className="space-x-1 flex">
                                        <Button
                                            variant="solid"
                                            isIconOnly
                                            color="warning"
                                            size="sm"
                                            onClick={() => openForm(item.id)}
                                        >
                                            <img
                                                src={edit}
                                                className="size-4 invert"
                                            />
                                        </Button>
                                        <Button
                                            variant="solid"
                                            isIconOnly
                                            color="danger"
                                            size="sm"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            <img
                                                src={remove}
                                                className="size-4 invert"
                                            />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )))
                        :
                        <h1 className="w-full col-span-2 mx-4 text-gray-600">No {name == "Quiz" ? "Quizzes" : `${name}s`} were found</h1>
                }
            </div>
        </div>
    )
}

export default FormLayoutWithGrid