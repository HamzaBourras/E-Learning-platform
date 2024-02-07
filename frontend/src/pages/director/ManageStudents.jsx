import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';
import { students, studentColumns } from '../../json/data'
import StudentForm from "./components/StudentForm";

const ManageStudents = () => {
    return (
        <div>
            <TableComponentWithFilter Component={StudentForm} data={students} columns={studentColumns} title="Students" user="student" />
        </div>
    )
}

export default ManageStudents
