import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, Spinner } from "@chakra-ui/react";
import axios from 'axios';
import { SUPPLIER_DATA } from "../../api/endPointAPI.js";

const EditSupplierModal = ({ isOpen, onClose, supplierId, fetchData }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        inputSupplierName: '',
        inputSupplierContact: '',
        inputSupplierAddress: ''
    });

    useEffect(() => {
        const fetchSupplier = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${SUPPLIER_DATA}/${supplierId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setFormData({
                    inputSupplierName: response.data.suppliername,
                    inputSupplierContact: response.data.suppliercontact,
                    inputSupplierAddress: response.data.supplieraddress
                });
            } catch (error) {
                console.error('Error fetching supplier data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (isOpen && supplierId) {
            fetchSupplier();
        }
    }, [isOpen, supplierId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            await axios.post(`${SUPPLIER_DATA}/supplierLlist/${supplierId}`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            fetchData(); // Refresh data after saving
            onClose(); // Close the modal
        } catch (error) {
            console.error('Error updating supplier:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit Supplier</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {loading ? (
                        <Spinner />
                    ) : (
                        <>
                            <FormControl>
                                <FormLabel>Supplier Name</FormLabel>
                                <Input
                                    name="inputSupplierName"
                                    value={formData.inputSupplierName}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Contact</FormLabel>
                                <Input
                                    name="inputSupplierContact"
                                    value={formData.inputSupplierContact}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Address</FormLabel>
                                <Input
                                    name="inputSupplierAddress"
                                    value={formData.inputSupplierAddress}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        </>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" isLoading={loading} mr={3} onClick={handleSave}>
                        Save
                    </Button>
                    <Button variant="ghost" onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default EditSupplierModal;
