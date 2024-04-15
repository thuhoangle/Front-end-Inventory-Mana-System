import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteDialog from './btn/DeleteDialog.jsx';
import {Button} from "@chakra-ui/react";

const ProductTable = ({ data, handleClickEdit }) => {

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/productData');
        setProductsData(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    const intervalId = setInterval(fetchProducts, 500);
    return () => { clearInterval(intervalId);
    }
  },[]); // Empty dependency array ensures useEffect runs only once on component mount

  const deleteProduct = async (id) => {
    try {
      // Perform delete operation
      await axios.delete(`http://localhost:3000/productData/${id}`);
      // Optionally, you can also update the suppliersData state after successful delete
      const updatedProducts = productsData.filter(product => product.id !== id);
      setProductsData(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
    } 
  };

  const generateTextFile = () => {
    const dataToExport = JSON.stringify(productsData, null, 2);

    const blob = new Blob([dataToExport], { type: 'text/plain' });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'product_data.txt';

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="overflow-x-auto">
      <button
        className="px-4 py-2 mb-4 bg-sky-200 text-black rounded-md hover:bg-sky-700 focus:outline-none"
        onClick={generateTextFile}
      >
        Generate Text File
      </button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">#</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">Product Info</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white">
            {
            productsData.map((product, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{index + 1}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div>
                    <p><strong>SKU:</strong> {product.sku}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Product Name:</strong> {product.productName}</p>
                    <p><strong>Supplier:</strong> {product.supplierName}</p>
                    <p><strong>Price:</strong> {product.price}</p>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex gap-4">
                    {/*<EditBtn no1="SKU" no2="Category" no3="Product name" no4="Description" no5="Price" />*/}
                    <Button colorScheme={'twitter'} onClick={() => handleClickEdit(product.id)}>Edit</Button>
                    <DeleteDialog onClick={() => deleteProduct(product.id)} />
                  </div>
                </td>
              </tr>
            ))
            }
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
