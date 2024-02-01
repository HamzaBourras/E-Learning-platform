/* eslint-disable no-unused-vars */
import Btn from '../../components/Button'
import { Modal, ModalContent, ModalHeader, ModalBody, ButtonGroup, Button, Divider, ModalFooter, useDisclosure } from "@nextui-org/react";
import grid from '../../assets/icons/gridSQ.svg'
import list from '../../assets/icons/grid_list.svg'
import { courses } from '../../json/data'
import { useState } from 'react'
import file from '../../assets/images/file.png'
import { Link } from 'react-router-dom'
import UploadFile from './components/UploadFile';

const ManageCourses = () => {
    const [isGrid, setIsGrid] = useState(true);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className='space-y-3'>
            <div className="w-full h-10 flex items-center justify-end px-1 space-x-1">
                <ButtonGroup size='sm' radius='sm' variant='bordered'>
                    <Button onClick={() => setIsGrid(true)}>
                        <img src={grid} className='w-4' alt="Grid Icon" />
                    </Button>
                    <Button onClick={() => setIsGrid(false)}>
                        <img src={list} className='w-5' alt="Grid Icon" />
                    </Button>
                </ButtonGroup>
                <Btn onOpen={onOpen}>Upload file</Btn>
                <Modal
                    size="2xl"
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Upload file</ModalHeader>
                                <ModalBody>
                                    <UploadFile />
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
            </div>
            <Divider />
            <div className={` grid ${isGrid ? 'xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7' : ''} gap-2`}>
                {
                    courses.map(course => (
                        <Link key={course.id} className={`flex  p-3 ${isGrid ? 'flex-col justify-center items-center text-center' : 'items-center'} hover:cursor-pointer hover:bg-gray-50 rounded-md border`}>
                            <img src={file} className='w-12' alt={course.lessonName} />
                            <div>
                                <h1 className='text-sm font-medium text-balance text-gray-500'>{course.lessonName}</h1>
                                {/* <h1 className='text-xs font-medium text-balance text-gray-900 bg-blue-300 w-fit px-1 rounded'>tags</h1> */}
                            </div>

                        </Link>
                    ))
                }
            </div>

        </div>
    )
}

export default ManageCourses