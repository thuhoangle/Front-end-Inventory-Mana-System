import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@chakra-ui/react";
import OrderForm from '../components/OrderForm.jsx';
import OrderDetail from './OrderDetail.jsx'; // Import the OrderDetail component
import { ORDER_LIST } from '../../api/endPointAPI.js';
import { Table } from 'antd';

const OrderTable = () => {
  const [orderList, setOrderList] = useState([]);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false); // State for showing detail modal
  const [currentOrderId, setCurrentOrderId] = useState(null); // State for storing current order ID

  useEffect(() => {
    const fetchOrderList = async () => {
      try {
        const res = await axios.get(ORDER_LIST, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        });
        setOrderList(res.data);
      } catch (error) {
        console.log("Error fetching orders:", error);
      }
    };

    const intervalId = setInterval(fetchOrderList, 500);
    return () => clearInterval(intervalId);
  }, []);

  const handleViewOrder = (orderId) => {
    setCurrentOrderId(orderId); // Set the current order ID
    setShowDetailModal(true); // Show the detail modal
  };

  const handleAddOrder = (newOrder) => {
    const newId = orderList.length + 1;
    const updatedOrders = [...orderList, { id: newId, ...newOrder }];
    setOrderList(updatedOrders);
    setShowFormModal(false); // Close the modal after adding the order
  };

  const openFormModal = () => {
    setShowFormModal(true);
  };

  const closeFormModal = () => {
    setShowFormModal(false);
  };

  const closeDetailModal = () => {
    setShowDetailModal(false);
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'codeorder',
      key: 'codeorder',
    },
    {
      title: 'Date',
      dataIndex: 'order_detail_date',
      key: 'order_detail_date',
    },
    {
      title: 'Supplier',
      dataIndex: 'suppliername',
      key: 'suppliername',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex justify-center items-center ">
          <Button colorScheme="twitter" onClick={() => handleViewOrder(record.codeorder)}>View</Button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col  gap-5">
      <div className="flex">
        <button
          className="px-4 py-2 mr-2 bg-rose-300 font-semibold text-black hover:bg-rose-500 rounded-md focus:outline-none"
          onClick={openFormModal}
        >
          Add Order
        </button>
      </div>

      {showFormModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <OrderForm
            onAddOrder={handleAddOrder}
            onCloseModal={closeFormModal}
          />
        </div>
      )}

      {showDetailModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <OrderDetail
            orderId={currentOrderId}
            onClose={closeDetailModal}
          />
        </div>
      )}

      <div className="container bg-white mx-auto p-4">
        <Table columns={columns} dataSource={orderList} bordered className={'overflow-hidden '} />
      </div>
    </div>
  );
};

export default OrderTable;
