// const { createRoot } = ReactDOM;
import React, {  useState, useEffect } from 'react';
import {  Button, Space, Table  } from "antd";
import SearchBtn from "./SearchBtn.jsx";
import axios from 'axios';

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
    const [data, setData] = useState([]); // State to store fetched data

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://luoi-lot-ca-pf3yfmx32q-de.a.run.app/typye/product_list',{
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  }); // Replace with your API endpoint
                setData(response.data); // Update the data state with fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData(); // Call the fetchData function when the component mounts
    }, []); // Empty dependency array to fetch data only once when the component mounts

    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    // const rowSelection = {
    //     selectedRowKeys,
    //     onChange: onSelectChange,
    // };

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
            title: 'Warehouse',
            dataIndex: 'warehouse',
            key: 'warehouse',
            filters: [
                {
                    text: "Warehouse A",
                    value: "A",
                },
                {
                    text: "Warehouse B",
                    value: "B",
                },
                // {
                //     text: "Warehouse C",
                //     value: "C",
                // },
            ],
            onFilter: (value, record) => record.name.includes(value),
        },
        {
            title: 'Name',
            dataIndex: 'pname',
            // sorter: true,
            // render: (name) => `${name.first} ${name.last}`,
            key: 'pname',
            ellipsis: true,
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === 'pname' ? sortedInfo.order : null,
        },
        {
            title: 'Category',
            dataIndex: 'tname',
            key: 'tname',
            // width: '20%',
        },
        {
            title: 'Price',
            dataIndex: 'unitprice',
            key: 'unitprice',
            // width: '10%',
        },
        {
            title: 'Quantity',
            dataIndex: 'Quantity',
            key: 'Quantity',
            // width: '10%',
        },
        {
            title: 'Availability',
            dataIndex: 'status',
            key: 'status',
            render(text, record) {
                return {
                    props: {
                        style: {
                            fontWeight: 'bold',
                            color:
                            record.status === "Out of Stock"
                                ? 'red'
                                : record.status === "In Stock"
                                    ? 'green'
                                    : 'orange', }
                    },
                    children: <div>{text}</div>
                };
            },
            filters: [
                {
                    text: "In Stock",
                    value: "In Stock",
                },
                {
                    text: "Low Stock",
                    value: "Low Stock",
                },
                {
                    text: "Out Of Stock",
                    value: "Out Of Stock",
                },
            ],
            filteredValue: filteredInfo.status || null,
            onFilter: (value, record) => record.name.includes(value),
            ellipsis: true,
        },

    ];
    return (
        <>
            <div className={'pl-2 flex justify-between my-5'}>
                <p className={'font-bold text-2xl'}>Product List</p>
                <div className={'flex justify-between'}>
                    <div className={'w-2/5'}><SearchBtn></SearchBtn></div>
                    <Space className={'mb-2.5 justify-end items-start'}>
                        <Button onClick={setNameSort}>Sort Name</Button>
                        <Button onClick={clearFilters}>Clear filters</Button>
                        <Button onClick={clearAll}>Clear all</Button>
                    </Space>
                </div>
            </div>
            <Table
                // rowSelection={rowSelection}
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




