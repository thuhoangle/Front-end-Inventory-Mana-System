import { useEffect, useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { PRODUCT_DATA, PRODUCT_CATEGORY, SUPPLIER_DATA } from "../../api/endPointAPI.js";

const EditProductModal = ({ isOpen, onClose, productId, onProductUpdated }) => {
    const { register, handleSubmit, reset, setValue } = useForm();
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(PRODUCT_CATEGORY, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        const fetchSuppliers = async () => {
            try {
                const response = await axios.get(SUPPLIER_DATA, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                const supplierNames = Array.from(
                    new Set(response.data.map((item) => item.suppliername))
                );
                setSuppliers(supplierNames);
            } catch (error) {
                console.error("Error fetching supplier names:", error);
            }
        };

        fetchCategories();
        fetchSuppliers();
    }, []);

    useEffect(() => {
        if (productId) {
            const fetchProduct = async () => {
                try {
                    const response = await axios.get(`${PRODUCT_DATA}/${productId}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    });
                    const product = response.data;
                    setValue("inputProductName", product.pname);
                    setValue("inputCategory", product.category);
                    setValue("inputSupplierName", product.suppliername);
                    setValue("inputCostPrice", product.costprice);
                    setValue("inputUnitPrice", product.unitprice);
                } catch (error) {
                    console.error("Error fetching product:", error);
                }
            };
            fetchProduct();
        }
    }, [productId, setValue]);

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            await axios.post(`${PRODUCT_DATA}/productList/${productId}`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            onProductUpdated();
            onClose();
        } catch (error) {
            console.error("Error updating product:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent className="p-4 bg-white shadow-lg rounded-lg">
                <ModalHeader className="text-xl font-semibold">Edit Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form id="edit-product-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <FormControl>
                            <FormLabel>Product Name</FormLabel>
                            <Input {...register("inputProductName")} className="border border-gray-300 rounded" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Category</FormLabel>
                            <Select {...register("inputCategory")} className="border border-gray-300 rounded">
                                {categories.map((category) => (
                                    <option key={category.id} value={category.tname}>
                                        {category.tname}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Supplier Name</FormLabel>
                            <Select {...register("inputSupplierName")} className="border border-gray-300 rounded">
                                {suppliers.map((supplier, index) => (
                                    <option key={index} value={supplier}>
                                        {supplier}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Cost Price</FormLabel>
                            <Input type="number" {...register("inputCostPrice")} className="border border-gray-300 rounded" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Unit Price</FormLabel>
                            <Input type="number" {...register("inputUnitPrice")} className="border border-gray-300 rounded" />
                        </FormControl>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} form="edit-product-form" type="submit" isLoading={loading} className="bg-blue-500 text-white py-2 px-4 rounded">
                        Save
                    </Button>
                    <Button onClick={onClose} className="bg-gray-300 text-black py-2 px-4 rounded">
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default EditProductModal;
