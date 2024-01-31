import { Modal, ModalContent, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Btn from "../../components/Button";
import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';

import { departments, depatmentsColumns } from '../../json/data'
import DepartmentForm from './components/DepartmentForm'



export default function App() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div className='space-y-4'>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className='text-2xl font-bold'>Departments</h1>
                    <p className='text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, alias.
                    </p>
                </div>
                <div>
                    <Btn onOpen={onOpen}>
                        Add New
                    </Btn>

                    <Modal
                        size="2xl"
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalBody>
                                        <DepartmentForm/>
                                    </ModalBody>
                                    <ModalFooter>
                                    <Button color="danger" variant="solid" onPress={onClose}>
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>
            </div>

            <div>
                <TableComponentWithFilter data={departments} columns={depatmentsColumns} user="department" />
            </div>

        </div>
    )
}
