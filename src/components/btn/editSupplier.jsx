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


const editSupplier = ({ supplier, onSave }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  const handleEditClick = () => {
    onOpen();
  };

  const handleSaveClick = () => {
    // Collect updated data from input fields
    const updatedSupplier = {
      id: supplier.id,
      supplierName: supplier.supplierName,
      contact: supplier.contact,
      address: supplier.address,
    };
    onSave(updatedSupplier); // Call onSave with updated supplier data
    onClose();
  };

  return (
    <>
      <Button onClick={handleEditClick}>Edit</Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit data</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Supplier Name</FormLabel>
              <Input ref={initialRef} defaultValue={supplier.supplierName} />
            </FormControl>
            <FormControl>
              <FormLabel>Contact</FormLabel>
              <Input ref={initialRef} defaultValue={supplier.contact} />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input ref={initialRef} defaultValue={supplier.address} />
            </FormControl>
            {/* Similar fields for contact and address */}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button colorScheme="blue" ml={3} onClick={handleSaveClick}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
