/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Checkbox, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import { quizzes } from '../../../json/data'
import { getArrayById, shuffleArray } from '../../../utils/utils'
import { ModalBody } from '@nextui-org/react';
const StudentQuizForm = ({ id }) => {

    const { onClose } = useDisclosure();

    const quiz = getArrayById(quizzes, "id", id)[0]

    return (
        <div className='h-full flex flex-col'>
            <ModalHeader className='text-2xl'>
                {quiz && quiz.quizName}
            </ModalHeader>
            <ModalBody className='flex-1'>
                {quiz && quiz.questions && quiz.questions.map((question, index) => (
                    <div key={index}>
                        <p>
                            <span className='font-bold text-lg'>Question {index + 1}: </span>
                            {question.question}
                        </p>
                        <ul>
                            {shuffleArray(question.answers).map((answer, answerIndex) => (
                                <li key={answerIndex}>
                                    <div className='ml-4 flex items-center'>
                                        <Checkbox
                                            color='primary'
                                            size="md"
                                        />
                                        {answer.answer}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </ModalBody>

            <ModalFooter>
                <Button className='bg-black text-white'>Submit</Button>
            </ModalFooter>
        </div>
    )
}
export default StudentQuizForm