import React, { useState } from 'react';

const OrderPage = () => {
    // Sample data for demonstration
    const [orders, setOrders] = useState([
        { id: 1, date: '2022-01-01', reference: 'ORD001', supplier: 'Supplier A' },
        { id: 2, date: '2022-01-02', reference: 'ORD002', supplier: 'Supplier B' },
        { id: 3, date: '2022-01-03', reference: 'ORD003', supplier: 'Supplier C' },
    ]);

    const handleEditOrder = (orderId) => {
        // Handle edit order functionality
        console.log('Edit order:', orderId);
    };

    const handleDeleteOrder = (orderId) => {
        // Handle delete order functionality
        console.log('Delete order:', orderId);
    };

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
                        {orders.map((order, index) => (
                            <tr key={order.id}>
                                <td className="border px-6 py-4">{index + 1}</td>
                                <td className="border px-6 py-4">{order.date}</td>
                                <td className="border px-6 py-4">{order.reference}</td>
                                <td className="border px-6 py-4">{order.supplier}</td>
                                <td className="border px-6 py-4">
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
                                        onClick={() => handleEditOrder(order.id)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
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
            <div className="flex">
            <button
                className="px-4 py-2 mr-2 bg-blue-500 text-black bg-sky-200 rounded-md hover:bg-sky-600 focus:outline-none"
            >
                Delete
            </button>
            </div>
        </div>
    );
};

export default OrderPage;
