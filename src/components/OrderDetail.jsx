import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ORDER_LIST } from '../../api/endPointAPI.js';

const OrderDetail = ({ orderId, onClose }) => {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const res = await axios.get(`${ORDER_LIST}/${orderId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setOrderDetails(res.data);
        console.table(res.data);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-md shadow-md relative">
        <button
          className="absolute top-2 right-2 bg-red-500 text-red px-2 py-1 rounded-full focus:outline-none"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-2xl mb-4">Order Details</h2>
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Product Name</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Cost Price</th>
              <th className="border px-4 py-2">Warehouse</th>
              <th className="border px-4 py-2">Total Amount</th> {/* New column */}
            </tr>
          </thead>
          <tbody>
            {orderDetails.map((orderDetail, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{orderDetail.productname}</td>
                <td className="border px-4 py-2">{orderDetail.orderquantity}</td>
                <td className="border px-4 py-2">{orderDetail.unitprice}</td>
                <td className="border px-4 py-2">{orderDetail.warehousename}</td>
                <td className="border px-4 py-2">{orderDetail.unitprice * orderDetail.orderquantity}</td> {/* Calculated total amount */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetail;
