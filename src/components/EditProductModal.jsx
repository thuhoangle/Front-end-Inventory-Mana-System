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
import { PRODUCT_DATA, PRODUCT_CATEGORY, SUPPLIER_DATA } from "../../api/endPointAPI.js"; // Add your endpoints

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

        const fetchSupplierName = async () => {
            try {
              const res = await axios.get(SUPPLIER_DATA  ,{
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
              });
              const supplierGetName = Array.from(
                new Set(res.data.map((item) => item.suppliername))
              );
              setSuppliers(supplierGetName);
              console.table(res.data);
            } catch (error) {
              console.error("Error fetching supplier names:", error);
            }
          };
          fetchSupplierName();

        fetchCategories();
       
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
                    setValue("pname", product.pname);
                    setValue("category", product.category);
                    setValue("suppliername", product.suppliername);
                    setValue("costprice", product.costprice);
                    setValue("unitprice", product.unitprice);
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
            await axios.post(`${PRODUCT_DATA}/${productId}`, data, {
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
                            <Input {...register("pname")} className="border border-gray-300 p-2 rounded" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Category</FormLabel>
                            <Select {...register("category")} className="border border-gray-300 p-2 rounded">
                                {categories.map((category) => (
                                    <option key={category.id} value={category.tname}>
                                        {category.tname}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Supplier Name</FormLabel>
                            <Select {...register("suppliername")} className="border border-gray-300 p-2 rounded">
                                {suppliers.map((supplier, index) => (
                                    <option key={index} value={supplier}>
                                        {supplier}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Cost Price</FormLabel>
                            <Input type="number" {...register("costprice")} className="border border-gray-300 p-2 rounded" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Unit Price</FormLabel>
                            <Input type="number" {...register("unitprice")} className="border border-gray-300 p-2 rounded" />
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
