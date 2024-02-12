import TableComponentWithFilter from "../../components/Table/TableComponentWithFilter"
import { studentColumns, students } from "../../json/data"

const ManageMyStudents = () => {
    return (
        <div>
            <TableComponentWithFilter 
                Component="" 
                data={students} 
                columns={studentColumns}
                title="My Students"
                user="my-students" 
            />
        </div>
    )
}

export default ManageMyStudents