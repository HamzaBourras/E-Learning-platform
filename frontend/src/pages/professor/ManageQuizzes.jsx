/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import Btn from '../../components/Button'
import { Modal, ModalContent, ModalHeader, ModalBody, Divider, ModalFooter, useDisclosure, ButtonGroup, Button } from "@nextui-org/react";
import QuizForm from './components/QuizForm';
import { useState } from 'react';
import grid from '../../assets/icons/gridSQ.svg'
import list from '../../assets/icons/grid_list.svg'
import { quizzes } from '../../json/data';
import quizImage from '../../assets/images/quiz.png'
import { PlusIcon } from '../../components/PlusIcon';


const ManageQuizzes = () => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [isGrid, setIsGrid] = useState(true);
    const [selectedQuizId, setSelectedQuizId] = useState(null);

    const openQuizForm = (quizId = null) => {
        setSelectedQuizId(quizId);
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
                    size="sm">Create Quiz</Button>
            </div>
            <Modal
                size="full"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                onClose={() => {
                    setSelectedQuizId(null);
                    onClose();
                }}
                className="overflow-auto"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="text-center">Create Quiz</ModalHeader>
                            <ModalBody>
                                <QuizForm quizId={selectedQuizId} />
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
                    quizzes.map(quiz => (
                        <div
                            onClick={() => openQuizForm(quiz.id)}
                            key={quiz.id}
                            className={`flex  p-3 ${isGrid ? 'flex-col justify-center items-center text-center' : 'items-center'} hover:cursor-pointer hover:bg-gray-50 rounded-md border`}>
                            <img src={quizImage} className='w-12' alt={quiz.quizName} />
                            <div>
                                <h1 className='text-sm font-medium text-balance text-gray-500'>{quiz.quizName}</h1>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ManageQuizzes