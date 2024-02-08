/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';
import { studentColumns } from '../../json/data'
import StudentForm from "./components/StudentForm";

const ManageStudents = () => {
    const students = useSelector((state) => state.director.students)
    return (
        <div>
            <TableComponentWithFilter Component={StudentForm} data={students} columns={studentColumns} title="Students" user="student" />
        </div>
    )
}

export default ManageStudents
