import React, { useState, useEffect } from 'react';
import { Table } from "antd";
import { Button } from "@chakra-ui/react";
import axios from 'axios';
import { SUPPLIER_DATA } from "../../api/endPointAPI.js";
import DeleteDialog from "./btn/DeleteDialog.jsx";

const SupplierTable = () => {
    const [supplierData, setSupplierData] = useState([]); // State to store fetched data

    const fetchData = async () => {
        try {
            const response = await axios.get(SUPPLIER_DATA, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setSupplierData(response.data); // Update the data state with fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(); // Initial fetch when component mounts

        const intervalId = setInterval(fetchData, 500); // Fetch data every 5 seconds

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []); // Empty dependency array to set up interval only once

    const deleteProduct = async (sid) => {
        try {
            await axios.delete(`${SUPPLIER_DATA}/${sid}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            fetchData(); // Fetch data again after deleting a supplier
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const columns = [
        {
            title: 'Supplier Name',
            dataIndex: 'suppliername',
            key: 'suppliername',
        },
        {
            title: 'Contact',
            dataIndex: 'suppliercontact',
            key: 'suppliercontact',
        },
        {
            title: 'Address',
            dataIndex: 'supplieraddress',
            key: 'supplieraddress',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div className="flex gap-2">
                    <Button colorScheme="twitter">Edit</Button>
                    <Button colorScheme="red" onClick={() => deleteProduct(record.sid)}>Delete</Button>
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="pl-2 flex justify-start pt-5 pb-2">
                <p className="font-bold text-2xl">Supplier List</p>
            </div>
            <Table
                columns={columns}
                dataSource={supplierData}
                bordered
            />
        </>
    );
};

export default SupplierTable;
