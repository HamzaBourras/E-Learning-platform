/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';
import { studentColumns } from '../../json/data'
import StudentForm from "./components/StudentForm";
import StudentImage from "../../assets/images/students.png"

const ManageStudents = () => {
    const students = useSelector((state) => state.director.students)
    return (
        <div>
            <TableComponentWithFilter imageLogo={StudentImage} Component={StudentForm} data={students} columns={studentColumns} title="Students" user="student" />
        </div>
    )
}

export default ManageStudents
