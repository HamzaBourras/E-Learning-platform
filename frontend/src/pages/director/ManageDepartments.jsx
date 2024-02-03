// import { Modal, ModalContent, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
// import Btn from "../../components/Button";
import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';

import { departments, depatmentsColumns } from '../../json/data'
import DepartmentForm from './components/DepartmentForm'


export default function App() {
    return (
        <div className='space-y-4'>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className='text-2xl font-bold'>Departments</h1>
                    <p className='text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, alias.
                    </p>
                </div>
            </div>
            <div>
                <TableComponentWithFilter Component={DepartmentForm} data={departments} columns={depatmentsColumns} user="department" />
            </div>

        </div>
    )
}
