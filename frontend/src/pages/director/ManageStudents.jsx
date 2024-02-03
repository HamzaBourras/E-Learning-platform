import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';
import { students, studentColumns } from '../../json/data'
import StudentForm from "./components/StudentForm";

const ManageStudents = () => {
    return (
        <div className='space-y-4'>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className='text-2xl font-bold'>Students</h1>
                    <p className='text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, alias.
                    </p>
                </div>
            </div>

            <div>
                <TableComponentWithFilter Component={StudentForm} data={students} columns={studentColumns} user="student" />
            </div>

        </div>
    )
}

export default ManageStudents
