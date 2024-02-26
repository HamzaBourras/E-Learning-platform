/* eslint-disable react/prop-types */
import { Avatar, Divider, Input, Textarea, Badge, Button, Spinner } from '@nextui-org/react'
import useForm from '../../hooks/useForm'

const Profile = () => {
    const authUser = JSON.parse(localStorage.getItem('user'));
    const apiKey = 'http://127.0.0.1:8000/api/posts/store';
    const initialState = {
        'firstname': authUser.firstName,
        'lastname': authUser.lastName,
        'email': authUser.email,
        'bio': authUser.bio,
        'role': authUser.role,
        'image': authUser.image
    }

    let color = ''

    switch (authUser.role) {
        case "director":
            color = 'secondary'
            break;

        case "professor":
            color = 'danger'
            break;

        case "student":
            color = 'warning'
            break;
    }

    const { inputs, errors, isLoading, handleChange, handleSubmit } = useForm(initialState, apiKey);

    return (
        <div className='px-1 space-y-3'>
            <div>
                <h1 className='text-2xl font-bold'>My Profile</h1>
            </div>

            <div className='flex xs:sm:flex-col md:lg:flex-row items-center gap-3 justify-center'>
                <div className='flex flex-col items-center gap-2'>

                    <Badge
                        content={authUser.role}
                        color={color}
                        className="font-semibold px-2"
                        shape="rectangle"
                        size="sm"
                        variant="flat"
                        
                    />

                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col items-center'>
                            <label htmlFor="fileInput" className="cursor-pointer relative inline-block">
                                <Avatar
                                    isBordered
                                    color={color}
                                    name={inputs['lastName']}
                                    className='md:lg:w-32 md:lg:h-32 xs:sm:w-20 xs:sm:h-20 my-2'
                                    src={inputs['image']}
                                />
                                {isLoading &&
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Spinner color='default' />
                                    </div>
                                }
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                className="hidden"
                                onChange={(e) => { handleChange('image', e.target.files[0].name) }}
                            />
                            <span className='text-sm font-medium my-2'>Edit profile</span>

                        </div>


                        <div className='grid grid-cols-2 gap-2 md:lg:mx-72'>
                            <Divider className='col-span-2 mb-3' />

                            <Input variant="bordered"
                                label="Firstname"
                                value={inputs['firstname']}
                                errorMessage={errors['firstname']}
                                onChange={(e) => handleChange('firstname', e.target.value)}
                            />

                            <Input variant="bordered"
                                label="Lastname"
                                value={inputs['lastname']}
                                errorMessage={errors['lastname']}
                                onChange={(e) => handleChange('lastname', e.target.value)}
                            />

                            <Input variant="bordered"
                                label="email"
                                className='col-span-2'
                                value={inputs['email']}
                                errorMessage={errors['email']}
                                onChange={(e) => handleChange('email', e.target.value)}
                            />

                            <Input variant="bordered"
                                label="Password"
                                type='password'
                                is
                            />

                            <Input variant="bordered"
                                label="Password Confirmation"
                                type='password'
                            />

                            <Textarea
                                variant='bordered'
                                placeholder='Your bio goes here'
                                className='col-span-2'
                                defaultValue={inputs['bio']}
                                errorMessage={errors['bio']}
                                onChange={(e) => handleChange('bio', e.target.value)}
                            >

                            </Textarea>
                            <Button
                                type='submit'
                                className='bg-foreground text-background'
                            >
                                Update
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile
