import React, {useState} from 'react'
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

const EditBtn = ({no1, no2, no3, no4, no5, onClick, save, handleChange, dataForm}) => {
    const{ isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)

    const handleEditClick = () => {
        onClick();
        save();
        onClose();
    }


    return (
        <>
            <Button onClick={onOpen}>Edit</Button>
            <Modal
                initialFocusRef={initialRef}
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
                            {/*<Input ref={initialRef} />*/}
                            <Input ref={initialRef} name={no1} value={dataForm[no1]} onChange={handleChange} />

                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>{no2}</FormLabel>
                            <Input onChange={handleChange} name={no2} value={dataForm[no2]}  />

                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>{no3}</FormLabel>
                            <Input onChange={handleChange} name={no3} value={dataForm[no3]}  />
                        </FormControl>

                        {!no4 ? null : (
                            <FormControl mt={4}>
                                <FormLabel>{no4}</FormLabel>
                                <Input  onChange={handleChange} name={no4} value={dataForm[no4]}  />

                            </FormControl>
                        )}

                        {!no5 ? null : (
                            <FormControl mt={4}>
                                <FormLabel>{no5}</FormLabel>
                                <Input onChange={handleChange} name={no5} value={dataForm[no5]}  />

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
