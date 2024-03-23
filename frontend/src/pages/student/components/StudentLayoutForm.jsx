/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Divider, Input, Modal, ModalBody, ModalContent, ModalFooter, Spinner, Tab, Tabs, useDisclosure } from "@nextui-org/react"
import CardImage from "../../../components/CardImage"
import { useEffect, useState } from "react";
import { getArrayById, uncapitalize } from "../../../utils/utils";
import downloadIcon from '../../../assets/icons/download.svg'
import viewIcon from '../../../assets/icons/eye.svg'
import { ModalHeader } from '@nextui-org/react';
import StudentQuizForm from './StudentQuizForm';
import { Navigate } from 'react-router-dom';
import viewDocument from './../viewDocument';
import { useDispatch } from "react-redux";
import { handleRenderAction } from "../../../state/features/Student/studentSlice";

const StudentLayoutForm = ({ data, imageLogo, image, title, name, Component }) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [isGrid, setIsGrid] = useState(false);
    const [searchValue, setSearchValue] = useState('')
    const [selectedKey, setSelectedKey] = useState(null)
    const [d, setD] = useState(data)

    const handleClick = (id) => {
        if (name == "quiz" || name == "task") {
            setSelectedKey(id)
            onOpen()
        }
    }

    const dispatch = useDispatch()

    useEffect(() => {
        if (searchValue.trim() !== '') {
            let fieldName;
            if (name === 'grade') {
                fieldName = "quizName";
                const filtered = data.filter(item =>
                    item.grades.some(grade =>
                        grade[fieldName].toLowerCase().includes(searchValue.toLowerCase())
                    )
                );
                setD(filtered);
            } else {
                fieldName = `${name}Name`;
                const filtered = data.filter(item =>
                    item[fieldName].toLowerCase().includes(searchValue.toLowerCase())
                );
                setD(filtered);
            }
        } else {
            setD(data);
        }
    }, [data, name, searchValue]);


    return (
        <div className="w-full">
            <div className=" w-full">
                <CardImage image={imageLogo} title={title} />
            </div>

            <div>
                <div className="w-64 my-0.5">
                    <Input
                        className=""
                        variant="bordered"
                        label={`Search in ${title}`}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
                <Divider className="mb-2" />
                {
                    d && d.length > 0 ?
                        (d.map((item, index) => (
                            <div key={index}
                                className={`grid ${isGrid ? 'xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7' : ''} gap-2`}
                            >
                                {
                                    (item.grades) ? (
                                        (item.grades).map((grade, index) => (
                                            <div
                                                key={index}
                                                className={`flex group animate-appearance-in p-3 ${isGrid ? 'flex-col justify-center items-center text-center' : 'items-center'} hover:cursor-pointer hover:bg-gray-50 rounded-md border`}
                                            >
                                                <img src={image} className='w-12' />
                                                <div className={`flex justify-between w-full`}>
                                                    <h1 className='text-sm font-medium text-balance flex-1 text-gray-500'>{grade.quizName}</h1>
                                                    <h1 className='text-sm font-medium text-balance text-gray-500'>{grade.grade}/100</h1>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div
                                            key={item.id}
                                            className={`flex group animate-appearance-in my-1 p-3 ${isGrid ? 'flex-col justify-center items-center text-center' : 'items-center'} hover:cursor-pointer hover:bg-gray-50 rounded-md border`}
                                            onClick={() => handleClick(item.id)}
                                        >
                                            <img src={image} className='w-12' />
                                            <div className="flex justify-between w-full">
                                                <h1 className='text-sm font-medium text-balance flex-1 text-gray-500'>
                                                    {name == 'grade'? item['quizName'] : item[uncapitalize(name) + 'Name']}
                                                </h1>
                                                {name == 'grade' &&<h1 className='text-sm font-medium text-balance text-gray-500'>
                                                    { item.grade }/20
                                                </h1>}

                                                {name != "quiz" && name != 'task' && name != 'grade' &&
                                                    <div className="space-x-1 flex">
                                                        {/* <button 
                                                            className="bg-blue-600 hover:bg-blue-800 p-2 rounded">
                                                            <img
                                                                src={viewIcon}
                                                                alt=""
                                                                className="size-3 invert"
                                                            />
                                                        </button> */}

                                                        <a
                                                            href={`http://localhost:8000${item.file}`}
                                                            download
                                                            className="bg-blue-600 hover:bg-blue-800 p-2 rounded">
                                                            <img
                                                                src={downloadIcon}
                                                                alt=""
                                                                className="size-3 invert"
                                                            />
                                                        </a>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        )))
                        :
                        <h1 className="w-full col-span-2 mx-4 mt-4 text-gray-600">No {name == "quiz" ? "Quizzes" : `${title}`} available at the moment</h1>
                }

                <Modal
                    // size="5xl"
                    isOpen={isOpen}
                    scrollBehavior="inside"
                    onOpenChange={onOpenChange}
                    size="2xl"
                    className="overflow-auto"
                    onClose={() => {
                        dispatch(handleRenderAction())
                        onClose();
                    }}
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
                                {(name === 'quiz' || name === 'task') && selectedKey && (
                                    <>
                                        <ModalBody>
                                            <Component id={selectedKey} />
                                        </ModalBody>
                                    </>
                                )}
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </div>
    )
}
export default StudentLayoutForm