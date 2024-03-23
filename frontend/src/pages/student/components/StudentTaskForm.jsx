/* eslint-disable react/prop-types */
import { Button, ModalBody, ModalFooter, ModalHeader } from '@nextui-org/react';
import { getArrayById } from './../../../utils/utils';
import { useSelector } from 'react-redux';

const StudentTaskForm = ({ id, onClose }) => {

    const tasks = useSelector((state) => state.student.tasks).data
    const task = getArrayById(tasks, "id", id)[0]

    return (
        <div className='h-full flex flex-col'>
            <ModalHeader className='text-2xl -mb-3'>
                <span>{task && task.taskName}</span>
            </ModalHeader>
            <ModalBody className='flex-1'>
                <p><span className='font-semibold'>Description: </span>{task.description}</p>
                <span className='text-red-500'><span className='font-semibold text-black'>Deadline: </span>{task.deadline}</span>
                <div>
                    <label className="sr-only">Choose file</label>
                    <input
                        type="file"
                        // onChange={(e) => handleChange('file', e.target.files[0])}
                        className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-50 file:border-0 file:me-4 file:py-2 file:px-4 hover:border-gray-500"
                    />
                    {/* {errors['file'] && <p className='text-xs text-pink-500'>{errors['file']}</p>} */}
                </div>
            </ModalBody>

            <ModalFooter>
                <Button className='bg-black text-white'>Submit</Button>
            </ModalFooter>
        </div>
    )
}
export default StudentTaskForm