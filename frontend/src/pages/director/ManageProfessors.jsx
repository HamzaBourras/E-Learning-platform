/* eslint-disable no-unused-vars */

import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';
import { columns } from '../../json/data'
import ProfessorForm from "./components/ProfessorForm";
import { useSelector } from 'react-redux'
import teacher from '../../assets/images/teacher.png'

const ManageProfessors = () => {

    const professors = useSelector((state) => state.director.professors)

    return (
        <div>
            <TableComponentWithFilter imageLogo={teacher} Component={ProfessorForm} data={professors} columns={columns} title="Professors" user="professor" />
        </div>
    )
}

export default ManageProfessors
