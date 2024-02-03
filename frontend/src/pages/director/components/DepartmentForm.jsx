/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

import { Input, Button, Spinner} from '@nextui-org/react'
import useForm from '../../../hooks/useForm'
import Alert from '../../../components/Alert'
import { getArrayById } from '../../../utils/utils'
import { departments } from '../../../json/data'

const DepartmentForm = ({ id }) => {
    const apiKey = 'http://127.0.0.1:8000/api/posts/store';
    const department = getArrayById(departments, 'id', id);

    const initialState = {
        'department': id ? department[0]['department'] : '',
    }

    const { inputs, errors, message, isLoading, handleChange, handleSubmit } = useForm(initialState, apiKey);


    return (
        <div className='px-1 space-y-2'>

            {message && <Alert color="success" message={message} />}
            <h1 className='text-2xl font-medium'>{id ? 'Update Department' : 'Create New Department'}</h1>
            
            <form onSubmit={handleSubmit} className='space-y-3'>
                <div className="grid grid-cols-1 gap-1">
                    <Input variant="bordered"
                        label="Department name"
                        value={inputs['department']}
                        errorMessage={errors['department']}
                        onChange={(e) => handleChange('department', e.target.value)}
                    />

                </div>
                <Button
                    type='submit'
                    className="bg-foreground text-background mt-1"
                >
                    {isLoading ? (<div className='flex items-center gap-1'><Spinner color="default" /> Loading...</div>) : id ? 'Update' : 'Submit'}
                </Button>

            </form>
            {/* <Divider />
            {
                !id &&
                <>
                    <p className="text-small text-default-400">Upload Professors using CSV file instead</p>
                    <div>
                        <div className='flex items-center'>
                            <form className='flex gap-2'>
                                <label className="sr-only">Choose file</label>
                                <input type="file" accept='.csv' className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-50 file:border-0 file:me-4 file:py-2 file:px-4" />
                                <Button
                                    className="bg-foreground text-background"
                                >Upload</Button>
                            </form>
                        </div>
                    </div>
                </>
            } */}

        </div>
    )
}


export default DepartmentForm