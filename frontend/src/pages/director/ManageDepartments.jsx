// import { Modal, ModalContent, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
// import Btn from "../../components/Button";
import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';

import { departments, depatmentsColumns } from '../../json/data'
import DepartmentForm from './components/DepartmentForm'


export default function App() {
    return (
        <div>
            <TableComponentWithFilter Component={DepartmentForm} data={departments} columns={depatmentsColumns} title="Departments" user="department" />
        </div>
    )
}
