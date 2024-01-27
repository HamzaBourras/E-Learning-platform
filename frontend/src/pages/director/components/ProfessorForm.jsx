/* eslint-disable react/prop-types */
import { Input, Divider, Button, Spinner } from '@nextui-org/react'
import Back from '../../../assets/icons/back.svg'
import useForm from '../../../hooks/useForm'
import Alert from '../../../components/Alert'

const ProfessorForm = ({ userId }) => {
    const initialState = {
        'firstname': '',
        'lastname': '',
        'email': '',
    }
    const apiKey = 'http://127.0.0.1:8000/api/posts/store';

    const { inputs, errors, message, isLoading, handleChange, handleSubmit } = useForm(initialState, apiKey)

    if (userId == null) {
        
        return (
            <div className='px-1 space-y-2'>
                
                { message && <Alert color="success" message={message} /> }
                
                <h1 className='text-2xl font-medium'>Create New Professor</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-1">
                        <Input variant="bordered"
                            label="FirstName"
                            value={inputs['firstname']}
                            errorMessage={errors['firstname']}
                            onChange={(e)=>handleChange('firstname', e.target.value)}
                        />
                        <Input variant="bordered"
                            label="LastName"
                            value={inputs['lastname']}
                            errorMessage={errors['lastname']}
                            onChange={(e)=>handleChange('lastname', e.target.value)}
                        />
                        <Input variant="bordered"
                            label="Email"
                            value={inputs['email']}
                            errorMessage={errors['email']}
                            onChange={(e)=>handleChange('email', e.target.value)}
                        />

                    </div>

                    <Button
                        type='submit'
                        className="bg-foreground text-background mt-1"
                    >
                        {isLoading ? (<div className='flex items-center gap-1'><Spinner color="default"/> Loading...</div>) : "Submit"}
                    </Button>

                </form>
                <Divider />
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

            </div>
        )
    }
    else {
        return (
            <div>
                <div className='flex w-fit items-center cursor-pointer hover:opacity-55' onClick={() => window.history.back()}>
                    <img src={Back} width={30} alt="back" />
                    <span className='font-medium text-lg'>Back</span>
                </div>

                Edit Professor form with id {userId}

            </div>
        )
    }
}

export default ProfessorForm