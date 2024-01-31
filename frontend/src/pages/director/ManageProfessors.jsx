import { Modal, ModalContent, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';

import { teachers, columns } from '../../json/data'
import EditProfessor from "./components/ProfessorForm";
import Btn from "../../components/Button";

const ManageProfessors = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div className='space-y-4'>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className='text-2xl font-bold'>Professors</h1>
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
                                        <EditProfessor />
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

            <div className="">
                <TableComponentWithFilter data={teachers} columns={columns} user="professor" />
            </div>

        </div>
    )
}

export default ManageProfessors
