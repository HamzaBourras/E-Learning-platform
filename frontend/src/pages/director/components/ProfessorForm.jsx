/* eslint-disable react/prop-types */
import { Input ,Select, SelectItem } from '@nextui-org/react'
import { departments } from '../../../json/data'
const EditProfessor = ({ userId }) => {
    if (userId == null) {
        return (
            <>
                Create New Professor form
                <div className="grid grid-cols-2 gap-1">

                    <Input variant="bordered"
                        label="FirstName"
                        isRequired
                    />

                    <Input variant="bordered"
                        label="LastName"
                        isRequired
                    />

                    <Select
                        label="Department"
                        variant="bordered"
                    >
                        {departments.map((department) => (
                            <SelectItem key={department.id} value={department.department}>
                                {department.department}
                            </SelectItem>
                        ))}
                    </Select>

                </div>

            </>
        )
    }
    else {
        return (
            <div>Edit Professor form with id {userId}</div>
        )
    }
}

export default EditProfessor