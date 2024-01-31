import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import TableComponentWithFilter from '../../components/Table/TableComponentWithFilter';

import Btn from "../../components/Button";
import { sectors, sectorsColumns } from '../../json/data'



export default function ManageSectors() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div className='space-y-4'>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className='text-2xl font-bold'>Sectors</h1>
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
                                    <ModalHeader className="flex flex-col gap-1">Add New Sector</ModalHeader>
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
                <TableComponentWithFilter data={sectors} columns={sectorsColumns}  user="sector"/>
            </div>

        </div>
    )
}
