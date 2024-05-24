import React, { useState, useEffect } from 'react';
import { Button, Space, Table } from 'antd';
import SearchBtn from './SearchBtn.jsx';
import axios from 'axios';

const DataTable = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://luoi-lot-ca-pf3yfmx32q-de.a.run.app/typye/product_list', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const clearFilters = () => {
        setFilteredInfo({});
    };

    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };

    const setNameSort = () => {
        setSortedInfo({
            order: 'descend',
            columnKey: 'pname',
        });
    };

    const columns = [
        {
            title: 'Warehouse',
            dataIndex: 'wname',
            key: 'wname',
            filters: [
                {
                    text: 'Warehouse 1',
                    value: 'Warehouse 1',
                },
                {
                    text: 'Warehouse 2',
                    value: 'Warehouse 2',
                },
            ],
            onFilter: (value, record) => record.wname.includes(value),
        },
        {
            title: 'Name',
            dataIndex: 'pname',
            key: 'pname',
            ellipsis: true,
            sorter: (a, b) => a.pname.length - b.pname.length,
            sortOrder: sortedInfo.columnKey === 'pname' ? sortedInfo.order : null,
        },
        {
            title: 'Category',
            dataIndex: 'tname',
            key: 'tname',
        },
        {
            title: 'Price',
            dataIndex: 'unitprice',
            key: 'unitprice',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Availability',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) => ({
                props: {
                    style: {
                        fontWeight: 'bold',
                        color:
                            record.status === 'Out of Stock'
                                ? 'red'
                                : record.status === 'In Stock'
                                    ? 'green'
                                    : 'orange',
                    },
                },
                children: <div>{text}</div>,
            }),
            filters: [
                {
                    text: 'In Stock',
                    value: 'In Stock',
                },
                {
                    text: 'Low Stock',
                    value: 'Low Stock',
                },
                {
                    text: 'Out Of Stock',
                    value: 'Out Of Stock',
                },
            ],
            filteredValue: filteredInfo.status || null,
            onFilter: (value, record) => record.status.includes(value),
            ellipsis: true,
        },
    ];

    return (
        <>
            <div className="pl-2 flex justify-between my-5">
                <p className="font-bold text-2xl">Product List</p>
                <div className="flex justify-between">
                    <div className="w-2/5">
                        <SearchBtn />
                    </div>
                    <Space className="mb-2.5 justify-end items-start">
                        <Button onClick={setNameSort}>Sort Name</Button>
                        <Button onClick={clearFilters}>Clear filters</Button>
                        <Button onClick={clearAll}>Clear all</Button>
                    </Space>
                </div>
            </div>
            <Table
                columns={columns}
                dataSource={data}
                onChange={handleChange}
                bordered
            />
        </>
    );
};

export default DataTable;
