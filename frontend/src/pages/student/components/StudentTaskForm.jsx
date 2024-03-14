/* eslint-disable react/prop-types */
import { Button, Input, ModalBody, ModalFooter, ModalHeader, Textarea } from '@nextui-org/react';
import { tasks } from '../../../json/data'
import { getArrayById } from './../../../utils/utils';

const StudentTaskForm = ({ id }) => {

    const task = getArrayById(tasks, "id", id)[0]

    return (
        <div className='h-full flex flex-col'>
            <ModalHeader className='text-2xl'>
                {task && task.taskName}
            </ModalHeader>
            <ModalBody className='flex-1'>
                <div className='space-y-1'>
                    <Input
                        variant='bordered'
                        label="Title"
                    />
                    <Textarea
                        variant='bordered'
                        label="Your description goes here"
                    // value={inputs['description']}
                    // errorMessage={errors['description']}
                    // onChange={(e) => handleChange('description', e.target.value)}
                    ></Textarea>

                    <div>
                        <label className="sr-only">Choose file</label>
                        <input
                            type="file"
                            // onChange={(e) => handleChange('file', e.target.files[0])}
                            className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-50 file:border-0 file:me-4 file:py-2 file:px-4 hover:border-gray-500"
                        />
                        {/* {errors['file'] && <p className='text-xs text-pink-500'>{errors['file']}</p>} */}
                    </div>
                </div>
            </ModalBody>

            <ModalFooter>
                <Button className='bg-black text-white'>Submit</Button>
            </ModalFooter>
        </div>
    )
}
export default StudentTaskForm