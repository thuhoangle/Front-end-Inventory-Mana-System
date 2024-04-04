/* eslint-disable react/prop-types */
import React from 'react';
import '../pages/Product.jsx'


const ProductTable = ({ products }) => {

  const handleEdit = () => {

  };

  const handleDetete = () => {
    // Implement cancel functionality here
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">#</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">Product Info</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{index + 1}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div>
                    <p><strong>SKU:</strong> {product.sku}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Product Name:</strong> {product.productName}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                    <p><strong>Price:</strong> {product.price}</p>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <button
                    className="px-4 py-2 mr-2 bg-blue-500 text-black bg-sky-200 rounded-md hover:bg-sky-700 focus:outline-none"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 mr-2 bg-blue-500 text-black bg-red-600 rounded-md hover:bg-red-800 focus:outline-none"
                    onClick={handleDetete}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
