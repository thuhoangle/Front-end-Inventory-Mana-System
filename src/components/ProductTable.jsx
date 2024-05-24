import React, { useState, useEffect } from 'react';
import { Table } from "antd";
import { Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, useDisclosure } from "@chakra-ui/react";
import axios from 'axios';
import { PRODUCT_DATA } from "../../api/endPointAPI.js";
import EditProductModal from './EditProductModal'; // Import the modal

const ProductTable = () => {
    const [productsData, setProductsData] = useState([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();
    const [deleteProductId, setDeleteProductId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(PRODUCT_DATA, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setProductsData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        const intervalId = setInterval(fetchData, 500); // Fetch data every 5 seconds

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    const deleteProduct = async () => {
        try {
            await axios.delete(`${PRODUCT_DATA}/productlist/${deleteProductId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const updatedProducts = productsData.filter(
                (product) => product.pid !== deleteProductId
            );
            setProductsData(updatedProducts);
            onClose(); // Close the confirmation modal
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const handleEdit = (pid) => {
        setSelectedProductId(pid);
        setIsEditModalOpen(true);
    };

    const handleModalClose = () => {
        setIsEditModalOpen(false);
        setSelectedProductId(null);
    };

    const handleProductUpdated = () => {
        // Refetch the data or update the state as needed
        const fetchData = async () => {
            try {
                const response = await axios.get(PRODUCT_DATA, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setProductsData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    };

    const handleDelete = (pid) => {
        setDeleteProductId(pid);
        onOpen(); // Open the confirmation modal
    };

    const columns = [
        {
            title: 'SKU',
            dataIndex: 'pid',
            key: 'pid',
        },
        {
            title: 'Product name',
            dataIndex: 'pname',
            key: 'pname',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Supplier',
            dataIndex: 'suppliername',
            key: 'suppliername',
        },
        {
            title: 'Cost price',
            dataIndex: 'costprice',
            key: 'costprice',
        },
        {
            title: 'Unit price',
            dataIndex: 'unitprice',
            key: 'unitprice',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div className="flex gap-2">
                    <Button colorScheme="twitter" onClick={() => handleEdit(record.pid)}>Edit</Button>
                    <Button colorScheme="red" onClick={() => handleDelete(record.pid)}>Delete</Button>
                </div>
            ),
        }
    ];

    return (
        <>
            <div className="pl-2 flex justify-start pt-5 pb-2">
                <p className="font-bold text-2xl">Product List</p>
            </div>
            <Table
                columns={columns}
                dataSource={productsData}
                bordered
            />
            <EditProductModal
                isOpen={isEditModalOpen}
                onClose={handleModalClose}
                productId={selectedProductId}
                onProductUpdated={handleProductUpdated}
            />

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete Product
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure you want to delete this product? This action cannot be undone.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="red" onClick={deleteProduct} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};

export default ProductTable;
