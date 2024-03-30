import React, { useState } from 'react'
import SupplierTable from '../components/SupplierTable';

export default function Supplier() {

    const [supplierName, setSupplierName] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');

    const handleSave = () => {
        // Implement save functionality here
        console.log('Supplier Name:', supplierName);
        console.log('Contact:', contact);
        console.log('Address:', address);
    };

    const handleCancel = () => {
        // Implement cancel functionality here
        setSupplierName('');
        setContact('');
        setAddress('');
    };

    return (
        <div className="flex px-4 py-6 gap-5">
            <div className="bg-white p-6 shadow-md rounded-md basis-1/3 ">
                <h2 className="text-xl font-semibold mb-4">Supplier Form</h2>
                <div className="mb-4">
                    <label htmlFor="supplierName" className="block mb-1">Supplier Name:</label>
                    <input
                        type="text"
                        id="supplierName"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={supplierName}
                        onChange={(e) => setSupplierName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="contact" className="block mb-1">Contact:</label>
                    <input
                        type="text"
                        id="contact"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block mb-1">Address:</label>
                    <textarea
                        id="address"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                </div>
                <div className="flex justify-center">
                    <button
                        className="px-4 py-2 mr-2 bg-blue-500 text-black bg-sky-300 rounded-md hover:bg-sky-600 focus:outline-none"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </div>
            <div className="basis-2/3">
                <SupplierTable />
            </div>
        </div>
    );
}
