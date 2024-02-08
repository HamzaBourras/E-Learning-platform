/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { Input, Button, Spinner, Select, SelectItem } from '@nextui-org/react'
import useForm from '../../../hooks/useForm'
import Alert from '../../../components/Alert'
import { getArrayById } from '../../../utils/utils'
import { useSelector } from 'react-redux'

const ProfessorForm = ({ id }) => {
    const storeApiKey = ""
    const professors = useSelector((state)=> state.director.professors)
    const departments = useSelector((state)=> state.director.departments)
    const sectors = useSelector((state)=> state.director.sectors)
    console.log(professors);

    const professor = getArrayById((professors), 'id', id);

    const initialState = {
        'username': id ? professor[0]['username'] : '',
        'email': id ? professor[0]['email'] : '',
        'department': id ? professor[0]['department'] : '',
        'sector': id ? professor[0]['sector'] : [],
    }

    const { inputs, errors, message, isLoading, handleChange, handleSubmit } = useForm(initialState, storeApiKey);

    const sectorsBelongToDepartment = getArrayById(sectors, 'department', inputs['department'] );

    return (
        <div className='px-1 space-y-2'>

            {message && <Alert color="success" message={message} />}
            <h1 className='text-2xl font-medium'>{id ? 'Update Professor' : 'Create New Professor'}</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-1">

                    <Input variant="bordered"
                        // className='col-span-2'
                        label="Username"
                        value={inputs['username']}
                        errorMessage={errors['username']}
                        onChange={(e) => handleChange('username', e.target.value)}
                    />

                    <Input variant="bordered"
                        label="Email"
                        value={inputs['email']}
                        errorMessage={errors['email']}
                        onChange={(e) => handleChange('email', e.target.value)}
                    />


                    <Select
                        items={departments}
                        label="Departments"
                        variant='bordered'
                        defaultSelectedKeys={[inputs['department']]}
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
                        defaultSelectedKeys={[inputs['sector']]}
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