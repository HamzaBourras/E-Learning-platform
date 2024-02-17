/* eslint-disable react/prop-types */
import { Input, Button, Spinner, Select, SelectItem } from '@nextui-org/react'
import { announcements, sectors } from '../../../json/data'

import useForm from '../../../hooks/useForm';
import Alert from '../../../components/Alert';
import { getArrayById } from '../../../utils/utils';

const AnnouncementForm = ({ id }) => {

    const apiKey = 'http://127.0.0.1:8000/api/posts/store';

    const course = getArrayById(announcements, 'id', id)[0]

    const initialState = {
        'announcementName': id ? course['announcementName'] : '' ,
        'sector': id ? course['sector'] : '',
    }


    const { inputs, errors, isLoading, message, handleChange, handleSubmit } = useForm(initialState, apiKey)

    return (
        <div className="border border-dashed grid grid-cols-1 p-2 rounded space-y-2">
            {message && <Alert color='success' message={message} />}
            <form onSubmit={handleSubmit} className='space-y-1.5'>
                <Input
                    type='text'
                    variant='bordered'
                    label="Announcement"
                    value={inputs['announcementName']}
                    errorMessage={errors['announcementName']}
                    onChange={(e) => handleChange('announcementName', e.target.value)}
                />

                <Select
                    items={sectors}
                    label="Sector"
                    variant='bordered'
                    selectionMode='multiple'
                    defaultSelectedKeys={[inputs['sector']]}
                    errorMessage={errors['sector']}
                    onChange={(e) => handleChange('sector', e.target.value)}
                >
                    {(sector) => <SelectItem key={sector.sector} >{sector.sector}</SelectItem>}
                </Select>
                
                <Button type='submit' variant='shadow' className='bg-foreground text-background'>
                    {id ? 'Update' : 'Submit'} {isLoading && <Spinner />}
                </Button>
            </form>



        </div>
    )
}

export default AnnouncementForm