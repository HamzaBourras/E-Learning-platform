/* eslint-disable no-unused-vars */

import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';
import { teachers, columns } from '../../json/data'
import EditProfessor from "./components/ProfessorForm";
import useFetch from '../../hooks/useFetch';
import { ALL_PROFESSORS_API } from '../../api/apis';
import { Spinner } from '@nextui-org/react'
import LoadingPage from '../../components/LoadingPage';

const ManageProfessors = () => {

    const apiKey = ALL_PROFESSORS_API

    const {data, isLoading, error} = useFetch(apiKey);

    return (
        <div>
            {isLoading && <LoadingPage/>}
            { data && 
            <TableComponentWithFilter Component={EditProfessor} data={(data.data)} columns={columns} title="Professors" user="professor" />
            }
        </div>
    )
}

export default ManageProfessors
