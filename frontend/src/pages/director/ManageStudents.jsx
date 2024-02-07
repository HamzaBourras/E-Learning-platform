/* eslint-disable no-unused-vars */

import { ALL_STUDENTS_API } from '../../api/apis';
import LoadingPage from '../../components/LoadingPage';
import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';
import useFetch from '../../hooks/useFetch';
import { students, studentColumns } from '../../json/data'
import StudentForm from "./components/StudentForm";

const ManageStudents = () => {
    const apiKey = ALL_STUDENTS_API

    const {data, isLoading, error} = useFetch(apiKey);
    return (
        <div>
            {isLoading && <LoadingPage />}
            {data &&
                <TableComponentWithFilter Component={StudentForm} data={(data.data)} columns={studentColumns} title="Students" user="student" />
            }
        </div>
    )
}

export default ManageStudents
