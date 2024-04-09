import React, { useState, useEffect } from 'react';
import OrderForm from '../components/OrderForm.jsx';
import DeleteDialog from "../components/btn/DeleteDialog.jsx";

const Order = ({}) => {
    const [orders, setOrders] = useState([
        { id: 1, date: '2022-01-01', reference: 'ORD001', supplier: 'Supplier A' },
        { id: 2, date: '2022-01-02', reference: 'ORD002', supplier: 'Supplier B' },
        { id: 3, date: '2022-01-03', reference: 'ORD003', supplier: 'Supplier C' },
    ]);
    const [showFormModal, setShowFormModal] = useState(false);

    const handleEditOrder = (orderId) => {
        console.log('Edit order:', orderId);
    };

    const handleDeleteOrder = (orderId) => {
        console.log('Delete order:', orderId);
    };

    const handleDelete = (index) => {
        const updatedOrders = [...orders];
        updatedOrders.splice(index, 1);
        setOrders(updatedOrders);
    };

    const handleAddOrder = (newOrder) => {
        // Generating a new ID for the order
        const newId = orders.length + 1;
        const updatedOrders = [...orders, { id: newId, ...newOrder }];
        setOrders(updatedOrders);
        setShowFormModal(false); // Close the modal after adding the order
    };

    const openFormModal = () => {
        setShowFormModal(true);
    };

    const closeFormModal = () => {
        setShowFormModal(false);
    };

    const [currentDate, setCurrentDate] = useState('');

    const [reference, setReference] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            const today = new Date();
            const dateFormatted = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
            setCurrentDate(dateFormatted);
        }, 1000); // Update the date every second
        return () => clearInterval(interval);
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
                        {orders.map((order, index) => (
                            <tr key={order.id}>
                                <td className="border px-6 py-4">{index + 1}</td>
                                <td className="border px-6 py-4">{currentDate}</td>
                                <td className="border px-6 py-4">{reference}</td>
                                <td className="border px-6 py-4">{order.supplier}</td>
                                <td className="border px-6 py-4">
                                    <button
                                        className="bg-sky-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
                                        onClick={() => handleEditOrder(order.id)}
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
                        suppliers={['Supplier A', 'Supplier B', 'Supplier C']} // Sample suppliers
                        products={['Product A', 'Product B', 'Product C']} // Sample products
                        onAddOrder={handleAddOrder}
                        onCloseModal={closeFormModal}
                    />
                </div>
            )}
        </div>
    );
};

export default Order;
