import React, { useState } from 'react';
import ProductTable from '../components/ProductTable';

// eslint-disable-next-line react/prop-types
const ProductForm = ({ addProduct }) => {

    const [formProduct, setFormProduct] = useState({
        sku: '',
        category: '',
        address: '',
        productName: '',
        description: '',
        price: '',
    });

    const handleInputChange = (e) => {
        setFormProduct({ ...formProduct, [e.target.name]: e.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        addProduct(formProduct);
        setFormProduct ({
            sku: '',
            category: '',
            address: '',
            productName: '',
            description: '',
            price: '',
        });
    };

    const handleCancel = () => {
        setFormProduct ({
            sku: '',
            category: '',
            address: '',
            productName: '',
            description: '',
            price: '',
        });
    };

    return (
        <div className="flex justify-center">
            <div className="bg-white p-6 shadow-md rounded-md">
                <h2 className="text-xl font-semibold mb-4">Product Form</h2>
                <div className="mb-4">
                    <label htmlFor="sku" className="block mb-1">SKU:</label>
                    <input
                        type="text"
                        id="sku"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        name='sku'
                        value={formProduct.sku}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block mb-1">Category:</label>
                    <input
                        type="text"
                        id="category"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        name='category'
                        value={formProduct.category}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="productName" className="block mb-1">Product Name:</label>
                    <input
                        type="text"
                        id="productName"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        name='productName'
                        value={formProduct.productName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block mb-1">Description:</label>
                    <textarea
                        id="description"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        name='description'
                        value={formProduct.description}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block mb-1">Price:</label>
                    <input
                        type="text"
                        id="price"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        name='price'
                        value={formProduct.price}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex justify-center gap-4 px-20">
                    <button
                        className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none"
                        onClick={handleCancel}
                    >
                        Clear
                    </button>
                    <button
                        className="px-4 py-2  bg-sky-200 text-gray-700 rounded-md hover:bg-sky-600 focus:outline-none"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;
