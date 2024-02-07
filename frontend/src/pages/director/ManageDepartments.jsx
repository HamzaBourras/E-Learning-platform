// import { Modal, ModalContent, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
// import Btn from "../../components/Button";
import { ALL_DEPARTMENTS_API } from '../../api/apis';
import LoadingPage from '../../components/LoadingPage';
import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';
import useFetch from '../../hooks/useFetch';

import { depatmentsColumns } from '../../json/data'
import DepartmentForm from './components/DepartmentForm'


export default function App() {
    const apiKey = ALL_DEPARTMENTS_API

    const { data, isLoading, error } = useFetch(apiKey);
    return (
        <div>
            {error&& <h1>{error.message}</h1>}
            {isLoading && <LoadingPage />}
            {data &&
                <TableComponentWithFilter Component={DepartmentForm} data={(data.data)} columns={depatmentsColumns} title="Departments" user="department" />
            }
        </div>
    )
}
