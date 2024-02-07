import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';
import { teachers, columns } from '../../json/data'
import EditProfessor from "./components/ProfessorForm";

const ManageProfessors = () => {
    return (
        <div>
            <TableComponentWithFilter Component={EditProfessor} data={teachers} columns={columns} title="Professors" user="professor" />
        </div>
    )
}

export default ManageProfessors
