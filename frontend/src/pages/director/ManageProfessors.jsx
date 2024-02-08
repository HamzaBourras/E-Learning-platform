/* eslint-disable no-unused-vars */

import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';
import { teachers, columns } from '../../json/data'
import EditProfessor from "./components/ProfessorForm";
import useFetch from '../../hooks/useFetch';
import { ALL_PROFESSORS_API } from '../../api/apis';
import LoadingPage from '../../components/LoadingPage';
import Alert from '../../components/Alert';

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { saveProfessors } from '../../state/features/Director/directorSlice';

const ManageProfessors = () => {

    const professors = useSelector((state) => state.director.professors)

    return (
        <div>
            <TableComponentWithFilter Component={EditProfessor} data={professors} columns={columns} title="Professors" user="professor" />
        </div>
    )
}

export default ManageProfessors
