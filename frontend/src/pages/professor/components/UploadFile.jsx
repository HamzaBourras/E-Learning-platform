import { Input, Textarea, Button, Spinner, Select, SelectItem } from '@nextui-org/react'
import { useState } from 'react'
import { sectors } from '../../../json/data'

import remove from '../../../assets/icons/delete.svg'
import useForm from '../../../hooks/useForm';
import Alert from '../../../components/Alert';

const UploadFile = () => {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleClickedKey = (e) => {
        if (e.key !== ' ') return;

        const value = inputValue.trim().toLowerCase();
        if (!value) return;

        if (tags.length < 5) {
            setTags([...tags, value]);
            setInputValue('');
        }
    }

    const handleRemoveTag = (index) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };

    const apiKey = 'http://127.0.0.1:8000/api/posts/store';

    const initialState = {
        'courseName': '',
        'sector': '',
        'description': '',
        'file': null,
    }


    const { inputs, errors, isLoading, message, handleChange, handleSubmit } = useForm(initialState, apiKey)

    return (
        <div className="border border-dashed grid grid-cols-1 p-2 rounded space-y-2">
            {message && <Alert color='success' message={message} />}
            <form onSubmit={handleSubmit} className='space-y-1.5'>
                <Input
                    type='text'
                    variant='bordered'
                    label="Course Name"
                    value={inputs['courseName']}
                    errorMessage={errors['courseName']}
                    onChange={(e) => handleChange('courseName', e.target.value)}
                />

                <Select
                    items={sectors}
                    label="Sector"
                    variant='bordered'
                    selectionMode='multiple'
                    value={inputs['sector']}
                    errorMessage={errors['sector']}
                    onChange={(e) => handleChange('sector', e.target.value)}
                >
                    {(sector) => <SelectItem key={sector.sector} >{sector.sector}</SelectItem>}
                </Select>

                <div className='flex gap-1'>
                    {tags.map((tag, index) => (
                        <div className="border px-1.5 rounded flex gap-2" key={index}>
                            <span>{tag}</span>
                            <img
                                src={remove}
                                onClick={() => handleRemoveTag(index)}
                                width={16}
                                className='cursor-pointer'
                            />
                        </div>
                    ))}
                </div>
                <Input
                    type="text"
                    variant='bordered'
                    label="Your tags goes here"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleClickedKey}
                />
                <Textarea
                    variant='bordered'
                    label="Your description goes here"
                ></Textarea>
                <div>
                    <label className="sr-only">Choose file</label>
                    <input
                        type="file"
                        onChange={(e) => handleChange('file', e.target.files[0])}
                        className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-50 file:border-0 file:me-4 file:py-2 file:px-4 hover:border-gray-500"
                    />
                    {errors['file'] && <p className='text-xs text-pink-500'>{errors['file']}</p>}
                </div>
                <Button type='submit' variant='shadow' className='bg-foreground text-background'>
                    Upload {isLoading && <Spinner />}
                </Button>
            </form>



        </div>
    )
}

export default UploadFile