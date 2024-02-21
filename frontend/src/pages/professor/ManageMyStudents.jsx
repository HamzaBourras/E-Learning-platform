import { useSelector } from "react-redux"
import TableComponentWithFilter from "../../components/Table/TableComponentWithFilter"
import { studentColumns } from "../../json/data"
import StduentImage from '../../assets/images/student-logo.png'

const ManageMyStudents = () => {
    const students = useSelector((state) => state.professor.myStudents)
    return (
        <div>
            <TableComponentWithFilter 

                Component="" 
                data={students} 
                columns={studentColumns}
                title="My Students"
                user="my-students" 
                imageLogo={StduentImage}
            />
        </div>
    )
}

export default ManageMyStudents