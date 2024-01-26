import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { PlusIcon } from '../../components/PlusIcon';
import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';

import { teachers, columns } from '../../json/data'
import EditProfessor from "./components/ProfessorForm";

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
                    <Button onPress={onOpen} className="bg-foreground text-background" endContent={<PlusIcon />} size="sm">
                        Add New
                    </Button>

                    <Modal
                        size="2xl"
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">Add New Professor</ModalHeader>
                                    <ModalBody>
                                        <EditProfessor />
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
                <TableComponentWithFilter data={teachers} columns={columns} user="professor" />
            </div>

        </div>
    )
}

export default ManageProfessors
