import React, { useState, useEffect } from 'react';
import OrderForm from '../components/OrderForm.jsx';
import DeleteDialog from "../components/btn/DeleteDialog.jsx";
import axios from 'axios';


import { ORDER_LIST, SUPPLIER_DATA, PRODUCT_DATA } from '../../api/endPointAPI.js';
const Order = () => {

    const [orderList, setOrderList]  = useState([]);
    const [supplierName, setSupplierName] = useState([]);
    const [productType, setProductType] = useState([]);

    useEffect(() => {
        const fetchOrderList = async () => {
          try {
            const res = await axios.get(ORDER_LIST);
            setOrderList(res.data);
          } catch (error) {
            console.log("Error fetching suppliers:", error);
          }
        };

        const fetchSuppliersName = async () => {
            try {
              const res = await axios.get(SUPPLIER_DATA);
              const uniqueSupplierNames = Array.from(new Set(res.data.map(item => item.suppliername)));
              setSupplierName(uniqueSupplierNames);
              console.table(uniqueSupplierNames);
            } catch (error) {
              console.error("Error fetching categories:", error);
            }
          };
      const intervalId = setInterval(fetchOrderList, 500);
        return () => clearInterval(intervalId);


      }, []);

    const [showFormModal, setShowFormModal] = useState(false);

    const handleEditOrder = (orderId) => {
        console.log('Edit order:', orderId);
    };


    const handleDelete = (index) => {
        const updatedOrders = [];
        updatedOrders.splice(index, 1);
        setOrderList(updatedOrders);
    };

    const handleAddOrder = (newOrder) => {
        // Generating a new ID for the order
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


    const [reference, setReference] = useState('')

    useEffect(() => {
    }, []);

    useEffect(()=>{
        const min = 100;
        const max = 1000;
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        setReference(`ORD${randomNum}`);
    },[]);



    return (
        <div className="flex flex-col p-10 gap-5">
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
                        {orderList.map((order, index) => (
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
                                    {/*<button*/}
                                    {/*    className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-red-600"*/}
                                    {/*    onClick={() => handleDeleteOrder(order.id)}*/}
                                    {/*>*/}
                                    {/*    Delete*/}
                                    {/*</button>*/}
                                    <DeleteDialog onClick={() => handleDelete(index)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex">
                <button
                    className="px-4 py-2 mr-2 bg-rose-300 font-semibold text-black hover:bg-rose-500 rounded-md focus:outline-none"
                    onClick={openFormModal}
                >
                    Add Order
                </button>
            </div>

            {/* Modal for the Order Form */}
            {showFormModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <OrderForm
                        onAddOrder={handleAddOrder}
                        onCloseModal={closeFormModal}
                    />
                </div>
            )}
        </div>
    );
};

export default Order;
