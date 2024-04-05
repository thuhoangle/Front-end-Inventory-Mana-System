import { useState } from "react";

const OrderForm = ({ suppliers, products, onAddOrder, onCloseModal }) => {
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orderList, setOrderList] = useState([]);

  const handleSave = () => {
    const orderData = {
      supplier: selectedSupplier,
      product: selectedProduct,
      quantity: parseInt(quantity),
    };
    onAddOrder(orderData);
    // Clearing form fields after adding to list
    setSelectedSupplier("");
    setSelectedProduct("");
    setQuantity("");
    onCloseModal();
  };

  const handleAddToList = () => {
    const orderItem = {
      product: selectedProduct,
      quantity: parseInt(quantity),
      price: 10, // Replace with actual price
      amount: parseInt(quantity) * 10, // Replace with actual calculation
    };
    setOrderList([...orderList, orderItem]);
  };

  return (
    <div className=" max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">New Order</h2>
      <div className="mb-4">
        <label htmlFor="supplier" className="block mb-1">
          Supplier:
        </label>
        <select
          id="supplier"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={selectedSupplier}
          onChange={(e) => setSelectedSupplier(e.target.value)}
        >
          <option value="">Select Supplier</option>
          {suppliers.map((supplier, index) => (
            <option key={index} value={supplier}>
              {supplier}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="product" className="block mb-1">
          Product:
        </label>
        <select
          id="product"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          <option value="">Select Product</option>
          {products.map((product, index) => (
            <option key={index} value={product}>
              {product}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block mb-1">
          Quantity:
        </label>
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
          className="px-4 py-2 bg-sky-200 text-white rounded-md hover:bg-sky-600 focus:outline-none"
          onClick={handleAddToList}
        >
          Add to List
        </button>
        <button
          className="px-4 py-2 bg-sky-200 text-white rounded-md hover:bg-sky-600 focus:outline-none"
          onClick={handleSave}
        >
          Save
        </button>
      </div>

      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left">Product</th>
            <th className="px-6 py-3 text-left">Quantity</th>
            <th className="px-6 py-3 text-left">Price</th>
            <th className="px-6 py-3 text-left">Amount</th>
            <th className="px-6 py-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody className=" ">
          {orderList.map((orderItem, index) => (
            <tr key={index}>
              <td className="border px-6 py-4">{orderItem.product}</td>
              <td className="border px-6 py-4">{orderItem.quantity}</td>
              <td className="border px-6 py-4">{orderItem.price}</td>
              <td className="border px-6 py-4">{orderItem.amount}</td>
              <td className="border px-6 py-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderForm;
