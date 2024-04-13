import React, {useEffect, useState} from 'react'
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const SupplierForm = ({ editID, setFormSubmitted }) => {
    const initialValues = {
        supplierName: '',
        contact: '',
        address: '',
    };
    const [formSupplier, setFormSupplier] = useState(initialValues);


    const [isEdit, setIsEdit] = useState(false);
    useEffect(() => {
        if (editID) {
            // Fetch data if editID is provided (edit mode)
            setIsEdit(true);
            fetchData(editID);
        } else {
            setIsEdit(false);
        }
    }, [editID]);

    const fetchData = async (id) => {
        try {
            const response = await axios.get(
                `http://localhost:3000/supplierData/${id}`
            );
            const newData = { ...response.data };
            console.log("newData >>>>>", newData);
            setFormSupplier(newData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormSupplier((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormSupplier((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            if (isEdit) {
                const res = await axios.put(`http://localhost:3000/supplierData/${editID}`, formSupplier);
                console.log("edited", res.data);
                setFormSupplier(initialValues);
                setIsEdit(false);
            } else {
                const res = await axios.post('http://localhost:3000/supplierData', formSupplier);
                console.log("created", res.data);
                setFormSupplier(initialValues);
            }
            setFormSubmitted(prev => prev + 1);
        } catch (error) {
            console.error('Error:', error);
            alert('Error saving supplier data. Please try again.');
        }
    };

    const handleCancel = () => {
        setFormSupplier(initialValues);
    };


    
    return (
        <div className="flex justify-center">
            <div className="bg-white p-6 shadow-md rounded-md  ">
                <h2 className="text-xl font-semibold mb-4">Supplier Form</h2>
                <div className="mb-4">
                    <label htmlFor="supplierName" className="block mb-1">Supplier Name:</label>
                    <input
                        type="text"
                        id="supplierName"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        name='supplierName'
                        value={formSupplier.supplierName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="contact" className="block mb-1">Contact:</label>
                    <input
                        type="text"
                        id="contact"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        name='contact'
                        value={formSupplier.contact}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block mb-1">Address:</label>
                    <textarea
                        id="address"
                        className="w-full h-auto px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        name='address'
                        value={formSupplier.address}
                        onChange={handleChange}
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
                    > {isEdit ? "Update" : "Create"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SupplierForm