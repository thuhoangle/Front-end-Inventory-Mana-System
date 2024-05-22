import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteDialog from './btn/DeleteDialog.jsx';
import OrderForm from '../components/OrderForm.jsx';
import OrderDetail from '../components/OrderDetail.jsx'; // Import the new component
import { ORDER_LIST } from '../../api/endPointAPI.js';

const OrderTable = () => {
  const [orderList, setOrderList] = useState([]);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [reference, setReference] = useState('');

  useEffect(() => {
    const fetchOrderList = async () => {
      try {
        const res = await axios.get(ORDER_LIST,{
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setOrderList(res.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    const intervalId = setInterval(fetchOrderList, 500);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const min = 100;
    const max = 1000;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setReference(`ORD${randomNum}`);
  }, []);

  const handleEditOrder = (orderId) => {
    setSelectedOrderId(orderId);
    setShowDetailModal(true);
  };

  const handleAddOrder = (newOrder) => {
    const newId = orderList.length + 1;
    const updatedOrders = [...orderList, { id: newId, ...newOrder }];
    setOrderList(updatedOrders);
    setShowFormModal(false);
  };

  const handleDeleteOrder = (orderId) => {
    // Add your delete logic here
  };

  const closeFormModal = () => {
    setShowFormModal(false);
  };

  const closeDetailModal = () => {
    setShowDetailModal(false);
  };

  return (
    <div className="flex flex-col p-10 gap-5">
      <div className="flex">
        <button
          className="px-4 py-2 mr-2 bg-rose-300 font-semibold text-black hover:bg-rose-500 rounded-md focus:outline-none"
          onClick={() => setShowFormModal(true)}
        >
          Add Order
        </button>
      </div>

      {showFormModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <OrderForm onAddOrder={handleAddOrder} onCloseModal={closeFormModal} />
        </div>
      )}

      {showDetailModal && (
        <OrderDetail orderId={selectedOrderId} onClose={closeDetailModal} />
      )}

      <div className="container bg-white mx-auto p-4">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left">#</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Reference</th>
              <th className="px-10 py-3 text-left">Supplier</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((order) => (
              <tr key={order.id}>
                <td className="border px-6 py-4">{order.codeorder}</td>
                <td className="border px-6 py-4">{order.order_detail_date}</td>
                <td className="border px-6 py-4">{reference}</td>
                <td className="border px-6 py-4">{order.suppliername}</td>
                <td className="border px-6 py-4">
                  <button
                    className="bg-sky-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
                    onClick={() => handleEditOrder(order.codeorder)}
                  >
                    View
                  </button>
                  <button
                    className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    onClick={() => handleDeleteOrder(order.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
