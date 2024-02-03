/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { Input, Button, Spinner, Select, SelectItem } from '@nextui-org/react'
import useForm from '../../../hooks/useForm'
import Alert from '../../../components/Alert'
import { generateUsername, getArrayById } from '../../../utils/utils'
import { teachers, departments, sectors } from '../../../json/data'

const ProfessorForm = ({ id }) => {
    const apiKey = 'http://127.0.0.1:8000/api/posts/store';
    const professor = getArrayById(teachers, 'id', id);

    const initialState = {
        'firstname': id ? professor[0]['firstname'] : '',
        'lastname': id ? professor[0]['lastname'] : '',
        'email': id ? professor[0]['email'] : '',
        'department': id ? professor[0]['department'] : '',
        'sector': id ? professor[0]['sector'] : [],
        'username': id ? professor[0]['username'] : '',
    }

    const { inputs, errors, message, isLoading, handleChange, handleSubmit } = useForm(initialState, apiKey);

    const sectorsBelongToDepartment = getArrayById(sectors, 'department', inputs['department'] );

    return (
        <div className='px-1 space-y-2'>
            { inputs['username'] }

            {message && <Alert color="success" message={message} />}
            <h1 className='text-2xl font-medium'>{id ? 'Update Professor' : 'Create New Professor'}</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-1">

                    <Input variant="bordered"
                        label="FirstName"
                        value={inputs['firstname']}
                        errorMessage={errors['firstname']}
                        onChange={(e) => handleChange('firstname', e.target.value)}
                    />

                    <Input variant="bordered"
                        label="LastName"
                        value={inputs['lastname']}
                        errorMessage={errors['lastname']}
                        onChange={(e) => handleChange('lastname', e.target.value)}
                    />

                    <Input variant="bordered"
                        // className='col-span-2'
                        label="Email"
                        value={inputs['email']}
                        errorMessage={errors['email']}
                        onChange={(e) => handleChange('email', e.target.value)}
                    />

                    <Input variant="bordered"
                        label="Username"
                        value={id ? inputs['username'] : generateUsername(inputs['firstname'], inputs['lastname'])}
                        errorMessage={errors['username']}
                        onChange={() => handleChange('username', generateUsername(inputs['firstname'], inputs['lastname']))}
                    />

                    <Select
                        items={departments}
                        label="Departments"
                        variant='bordered'
                        value={inputs['department']}
                        errorMessage={errors['department']}
                        onChange={(e) => handleChange('department', e.target.value)}
                    >
                        {(department) => <SelectItem key={department.department} >{department.department}</SelectItem>}
                    </Select>

                    <Select
                        items={sectorsBelongToDepartment}
                        label="Sectors"
                        variant='bordered'
                        selectionMode='multiple'
                        value={inputs['sector']}
                        errorMessage={errors['sector']}
                        onChange={(e) => handleChange('sector', e.target.value)}

                    >
                        {(sector) => <SelectItem key={sector.sector}>{sector.sector}</SelectItem>}
                    </Select>
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


export default ProfessorForm