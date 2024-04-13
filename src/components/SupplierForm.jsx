import React, { useState } from 'react'
import axios from 'axios';
import { SUPPLIER_DATA } from '../../api/endPointAPI';
// eslint-disable-next-line react/prop-types
const SupplierForm = () => {
    const [formSupplier, setFormSupplier] = useState({
        SupplierName: '',
        SupplierContact: '',
        SupplierAddress: '',
    });

    const handleInputChange = (e) => {
        setFormSupplier({ ...formSupplier, [e.target.name]: e.target.value });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        
        try {
            // Make POST request to JSON server
            await axios.post(SUPPLIER_DATA, formSupplier);

            // Clear form fields after successful save
            setFormSupplier({
                SupplierName: '',
                SupplierContact: '',
                SupplierAddress: '',
            });

            // Trigger update of supplier data in SupplierTable

            
        } catch (error) {
            console.error('Error saving supplier data:', error);
            alert('Error saving supplier data. Please try again.');
        }
    };

    const handleCancel = () => {
        setFormSupplier({
            SupplierName: '',
            SupplierContact: '',
            SupplierAddress: '',
        });
    };


    
    return (
        <div className="flex justify-center">
            <div className="bg-white p-6 shadow-md rounded-md  ">
                <h2 className="text-xl font-semibold mb-4">Supplier Form</h2>
                <div className="mb-4">
                    <label htmlFor="SupplierName" className="block mb-1">Supplier Name:</label>
                    <input
                        type="text"
                        id="SupplierName"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        name='SupplierName'
                        value={formSupplier.SupplierName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="SupplierContact" className="block mb-1">Contact:</label>
                    <input
                        type="text"
                        id="SupplierContact"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        name='SupplierContact'
                        value={formSupplier.SupplierContact}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="SupplierAddress" className="block mb-1">Address:</label>
                    <textarea
                        id="SupplierAddress"
                        className="w-full h-auto px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        name='SupplierAddress'
                        value={formSupplier.SupplierAddress}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="flex justify-center gap-4 px-20">
                    <button
                        className="px-4 py-2 bg-gray-300 font-semibold rounded-md hover:bg-gray-400 focus:outline-none"
                        onClick={handleCancel}
                    >
                        Clear
                    </button>
                    <button
                        className="px-4 py-2  bg-blue-500 font-semibold bg-sky-300 rounded-md hover:bg-sky-600 focus:outline-none"
                        onClick={handleSave}
                    > Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SupplierForm