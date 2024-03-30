// const { createRoot } = ReactDOM;
import React, {  useState } from 'react';
import {  Button, Space, Table  } from "antd";
import SearchBtn from "./SearchBtn.jsx";

const data = [
    {
        key: '1',
        name: 'Macbook',
        code: 322,
        category: 'Tech',
        price: 123,
        available:'Low stock'
    },
    {
        key: '2',
        name: 'Jelly cat',
        code: 322,
        category: 'Decoration',
        price: 123,
        available:'In stock',
    },
    {
        key: '3',
        name: 'Cola',
        code: 322,
        category: 'Drinks',
        price: 123,
        available:'Out of stock',
    },
    {
        key: '4',
        name: 'Rose',
        code: 322,
        category: 'Flower',
        price: 123,
        available:'In stock',
    },
];

// const data = [];
// for (let i = 0; i < 46; i++) {
//     data.push({
//         key: i,
//         // name: ` ${i}`,
//         // age: ` ${i}`,
//         // address: `London, Park Lane no. ${i}`,
//     });
// }

const DataTable = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
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
            columnKey: 'name',
        });
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            // sorter: true,
            // render: (name) => `${name.first} ${name.last}`,
            key: 'name',
            ellipsis: true,
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
        },
        {
            title: 'Code',
            dataIndex: 'code',
            key: 'code',
            // width: '10%',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            // width: '20%',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            // width: '10%',
        },
        {
            title: 'Availability',
            dataIndex: 'available',
            key: 'available',
            render(text, record) {
                return {
                    props: {
                        style: {
                            fontWeight: 'bold',
                            color:
                                record.available === "Out of stock"
                                ? "red"
                                : record.available === "In stock"
                                    ? "green"
                                    : "orange", }
                    },
                    children: <div>{text}</div>
                };
            },
            filters: [
                {
                    text: 'In stock',
                    value: 'In stock',
                },
                {
                    text: 'Low stock',
                    value: 'Low stock',
                },
                {
                    text: 'Out of stock',
                    value: 'Out of stock',
                },
            ],
            filteredValue: filteredInfo.available || null,
            onFilter: (value, record) => record.available.startsWith(value),
            ellipsis: true,
        },

    ];
    return (
        <>
            <div className={'pl-2 flex justify-between my-5'}>
                <p className={'font-bold text-2xl'}>Product List</p>
                <div className={'flex justify-between'}>
                    <div className={'w-2/5'}><SearchBtn></SearchBtn></div>
                    <Space className={'mb-2.5 justify-end'}>
                        <Button onClick={setNameSort}>Sort Name</Button>
                        <Button onClick={clearFilters}>Clear filters</Button>
                        <Button onClick={clearAll}>Clear all</Button>
                    </Space>
                </div>
            </div>
            <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                onChange={handleChange}
                bordered
                // title={() => 'Product List'}
            />
        </>
    );


};
export default DataTable;




