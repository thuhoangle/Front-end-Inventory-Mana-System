import React, { useState } from 'react';
import ProductTable from '../components/ProductTable';

const Product = ({ onSave, onCancel }) => {
    const [sku, setSku] = useState('');
    const [category, setCategory] = useState('');
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSave = () => {
        const productData = {
            sku,
            category,
            productName,
            description,
            price,
        };
        onSave(productData);
        // Clearing form fields after saving
        setSku('');
        setCategory('');
        setProductName('');
        setDescription('');
        setPrice('');
    };

    const handleCancel = () => {
        onCancel();
    };

    return (
        <div className="flex px-4 py-6 gap-5">
            <div className="bg-white p-6 shadow-md rounded-md basis-1/3 ">
                <h2 className="text-xl font-semibold mb-4">Product Form</h2>
                <div className="mb-4">
                    <label htmlFor="sku" className="block mb-1">SKU:</label>
                    <input
                        type="text"
                        id="sku"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block mb-1">Category:</label>
                    <input
                        type="text"
                        id="category"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="productName" className="block mb-1">Product Name:</label>
                    <input
                        type="text"
                        id="productName"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block mb-1">Description:</label>
                    <textarea
                        id="description"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block mb-1">Price:</label>
                    <input
                        type="text"
                        id="price"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        className="px-4 py-2 mr-2 bg-sky-200 text-gray-700 rounded-md hover:bg-sky-600 focus:outline-none"
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
                <ProductTable/>
            </div>
        </div>
    );
};

export default Product;
