// const { createRoot } = ReactDOM;
import React, {  useState, useEffect } from 'react';
import { Table  } from "antd";
import {Button} from "@chakra-ui/react";
import axios from 'axios';
import {PRODUCT_DATA} from "../../api/endPointAPI.js";
import DeleteDialog from "./btn/DeleteDialog.jsx";

const ProductTable = () => {
    const [productsData, setProductsData] = useState([]); // State to store fetched data

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(PRODUCT_DATA); // Replace with your API endpoint
                setProductsData(response.data); // Update the data state with fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData(); // Call the fetchData function when the component mounts
    }, []); // Empty dependency array to fetch data only once when the component mounts

    const deleteProduct = async (pid) => {
        try {
            // Perform delete operation
            await axios.delete(`${PRODUCT_DATA}/${pid}`);
            // Optionally, you can also update the suppliersData state after successful delete
            const updatedProducts = productsData.filter(
                (product) => product.pid !== pid
            );
            setProductsData(updatedProducts);
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const columns = [

        {
            title: 'SKU',
            dataIndex: 'pid',
            key: 'pid',
            // width: '10%',
        },
        {
            title: 'Product name',
            dataIndex: 'pname',
            // sorter: true,
            // render: (name) => `${name.first} ${name.last}`,
            key: 'pname',
            // ellipsis: true,
            // sorter: (a, b) => a.name.length - b.name.length,
            // sortOrder: sortedInfo.columnKey === 'pname' ? sortedInfo.order : null,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            // width: '20%',
        },
        {
            title: 'Suppplier',
            dataIndex: 'suppliername',
            key: 'suppliername',
            // width: '10%',
        },
        {
            title: 'Cost price',
            dataIndex: 'costprice',
            key: 'costprice',
            // width: '10%',
        },
        {
            title: 'Unit price',
            dataIndex: 'unitprice',
            key: 'unitprice',
            // width: '10%',
        },
        {
            title: 'Action',
            dataIndex: 'sellingprice',
            key: 'sellingprice',
            render: (_, record) => (
                <div className={"flex gap-2"}>
                    <Button colorScheme={'twitter'} >Edit</Button>
                    <Button colorScheme={'red'} >Delete</Button>
                </div>
            ),
        }

    ];
    return (
        <>
            <div className={'pl-2 flex justify-start pt-5 pb-2'}>
                <p className={'font-bold text-2xl'}>Product List</p>
            </div>
            <Table
                columns={columns}
                dataSource={productsData}
                bordered
                // title={() => 'Product List'}
            />

        </>
    );


};
export default ProductTable;




