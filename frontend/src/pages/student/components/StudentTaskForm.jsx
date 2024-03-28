/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, ModalBody, ModalFooter, ModalHeader, Spinner } from '@nextui-org/react';
import { getArrayById } from './../../../utils/utils';
import { useSelector } from 'react-redux';
import { DELETE_SUBMISSION_API, GET_SUBMISSION_API, STORE_SUBMISSION_API, UPDATE_SUBMISSION_API } from '../../../api/apis';
import useForm from '../../../hooks/useForm';
import Alert from '../../../components/Alert';

import remove from '../../../assets/icons/delete.svg'
import edit from '../../../assets/icons/edit.svg'
import download from '../../../assets/icons/download.svg'
import { useEffect, useState } from 'react';
import useFetch from './../../../hooks/useFetch';

const StudentTaskForm = ({ id }) => {


    const tasks = useSelector((state) => state.student.tasks)
    const task = getArrayById(tasks, "id", id)[0]
    const user = JSON.parse(localStorage.getItem('user'));


    const { data, isLoading: getSubmissionLoading } = useFetch(`${GET_SUBMISSION_API}/${user.id}/${task.id}`)


    const [action, setAction] = useState("store")
    const [isDisabled, setIsDisabled] = useState(true)


    useEffect(() => {
        if (!task.submitted) {
            setIsDisabled(false)
        }
    }, [task.submitted])


    const initialState = {
        'file': null,
    }
    let apiKey = `${STORE_SUBMISSION_API}/${user.id}/${id}`


    useEffect(() => {
        let newAction;
        let newApiKey;

        switch (action) {
            case "edit":
                newAction = "edit";
                setIsDisabled(false);
                newApiKey = `${UPDATE_SUBMISSION_API}/${user.id}/${id}/${data.data.id}`;
                setAction(newAction);
                apiKey = newApiKey;
                break;

            case "delete":
                newAction = "delete";
                newApiKey = `${DELETE_SUBMISSION_API}/${user.id}/${id}/${data.data.id}`;
                setAction(newAction);
                apiKey = newApiKey;
                break;

            // case "store":
            //     newAction = "store";
            //     newApiKey = `${STORE_SUBMISSION_API}/${user.id}/${id}`;
            //     setAction(newAction);
            //     apiKey = newApiKey;
            //     break;

            default:
                // Handle default case
                break;
        }


    }, [action, id, user.id]);

    console.log(apiKey);


    const { inputs, errors, isLoading, message, handleChange, handleSubmit } = useForm(initialState, apiKey, 'post', true, true)

    return (
        <div className='h-full flex flex-col'>
            {message && <Alert color='success' message={message} />}
            <ModalHeader className='text-2xl -mb-3'>
                <span className='underline'>{task && task.taskName}</span>
            </ModalHeader>
            <form onSubmit={handleSubmit}>
                <ModalBody className='flex-1'>
                    <span className='font-semibold text-black'>Description: <p className='text-xs font-normal text-gray-700'>{task.description}</p> </span>
                    <span className='text-red-500'><span className='font-semibold text-black'>Deadline: </span>{task.deadline}</span>
                    <span className='text-red-500'><span className='font-semibold text-black'>Status: </span>{task.submitted ? (<span className='text-green-500 font-semibold'>Submitted</span>) : (<span className='text-red-500 font-semibold'>Unsubmitted</span>)}</span>

                    <div className='flex items-center gap-1'>

                        <div className='flex-1'>
                            <label className="sr-only">Choose file</label>
                            <input
                                type="file"
                                disabled={isDisabled}
                                onChange={(e) => handleChange('file', e.target.files[0])}
                                className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-50 file:border-0 file:me-4 file:py-2 file:px-4 hover:border-gray-500"
                            />
                            {errors['file'] && <p className='text-xs text-pink-500'>{errors['file']}</p>}
                        </div>


                        {/* action buttons */}

                        {task.submitted &&
                            <div className='flex items-center'>
                                <div className='space-x-1 flex items-center'>
                                    <a
                                        target='_blank' rel="noreferrer"
                                        href={`http://localhost:8000${data?.data.file}`}
                                        className='bg-blue-500 inline-flex size-8 rounded-md items-center justify-center'
                                    >
                                        {
                                            getSubmissionLoading ? (<Spinner size='sm' color='current' />) :
                                                (<img
                                                    src={download}
                                                    className="size-4 invert"
                                                />)
                                        }
                                    </a>
                                    <Button
                                        onClick={() => setAction("edit")}
                                        variant="solid"
                                        isIconOnly
                                        color="warning"
                                        size="sm"
                                    >
                                        {
                                            getSubmissionLoading ? (<Spinner size='sm' color='current' />) :
                                                (<img
                                                    src={edit}
                                                    className="size-4 invert"
                                                />)
                                        }

                                    </Button>
                                    <Button
                                        onClick={() => setAction("delete")}
                                        variant="solid"
                                        isIconOnly
                                        color="danger"
                                        size="sm"
                                    >
                                        {
                                            getSubmissionLoading ? (<Spinner size='sm' color='current' />) :
                                                (<img
                                                    src={remove}
                                                    className="size-4 invert"
                                                />)
                                        }
                                    </Button>
                                </div>
                            </div>
                        }
                    </div>

                </ModalBody>

                <ModalFooter>
                    <Button
                        type='submit'
                        className="bg-foreground text-background mt-1"
                    >
                        {isLoading ? (<div className='flex items-center gap-1'><Spinner color="default" /> Submiting...</div>) : 'Submit'}
                    </Button>
                </ModalFooter>
            </form>
        </div>
    )
}
export default StudentTaskForm