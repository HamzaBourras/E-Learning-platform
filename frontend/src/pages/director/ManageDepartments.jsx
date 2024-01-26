import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { PlusIcon } from '../../components/PlusIcon';
import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';

import { departments, depatmentsColumns } from '../../json/data'



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
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Nullam pulvinar risus non risus hendrerit venenatis.
                                            Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button color="primary" onPress={onClose}>
                                            Action
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>
            </div>

            <div>
                <TableComponentWithFilter data={departments} columns={depatmentsColumns}  user="department"/>
            </div>

        </div>
    )
}
