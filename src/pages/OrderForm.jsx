import React, { useState } from 'react';

const OrderForm = ({ suppliers, products, onAddOrder }) => {
  const [selectedSupplier, setSelectedSupplier] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddToList = () => {
    const orderData = {
      supplier: selectedSupplier,
      product: selectedProduct,
      quantity: parseInt(quantity),
    };
    onAddOrder(orderData);
    // Clearing form fields after adding to list
    setSelectedSupplier('');
    setSelectedProduct('');
    setQuantity('');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">New Order</h2>
      <div className="mb-4">
        <label htmlFor="supplier" className="block mb-1">Supplier:</label>
        <select
          id="supplier"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={selectedSupplier}
          onChange={(e) => setSelectedSupplier(e.target.value)}
        >
          <option value="">Select Supplier</option>
          {suppliers.map((supplier, index) => (
            <option key={index} value={supplier}>{supplier}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="product" className="block mb-1">Product:</label>
        <select
          id="product"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          <option value="">Select Product</option>
          {products.map((product, index) => (
            <option key={index} value={product}>{product}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block mb-1">Quantity:</label>
        <input
          type="number"
          id="quantity"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={handleAddToList}
        >
          Add to List
        </button>
      </div>
    </div>
  );
};

export default OrderForm;
