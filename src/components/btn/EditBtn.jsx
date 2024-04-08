import React from 'react'
import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input, FormControl, FormLabel
} from '@chakra-ui/react'

const EditBtn = ({no1, no2, no3, no4, no5}) => {
    const{ isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const handleEditClick = () => {
        onClick()
    }

    return (
        <>
            <Button onClick={onOpen}>Edit</Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit data</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>{no1}</FormLabel>
                            <Input ref={initialRef} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>{no2}</FormLabel>
                            <Input />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>{no3}</FormLabel>
                            <Input />
                        </FormControl>

                        {!no4 ? null : (
                            <FormControl mt={4}>
                                <FormLabel>{no4}</FormLabel>
                                <Input />
                            </FormControl>
                        )}

                        {!no5 ? null : (
                            <FormControl mt={4}>
                                <FormLabel>{no5}</FormLabel>
                                <Input />
                            </FormControl>
                        )}

                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button colorScheme='blue' ml={3} onClick={handleEditClick}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default EditBtn
