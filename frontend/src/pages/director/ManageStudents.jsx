import { Modal, ModalContent, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';

import { students, studentColumns } from '../../json/data'
import StudentForm from "./components/StudentForm";
import Btn from "../../components/Button";

const ManageStudents = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div className='space-y-4'>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className='text-2xl font-bold'>Students</h1>
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
                                        <StudentForm />
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
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
                <TableComponentWithFilter data={students} columns={studentColumns} user="student" />
            </div>

        </div>
    )
}

export default ManageStudents
