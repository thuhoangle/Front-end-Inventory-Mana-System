import React, { useState, useEffect } from "react";
import axios from "axios";

import { ORDER_LIST, SUPPLIER_DATA, PRODUCT_DATA, PRODUCT_CATEGORY } from "../../api/endPointAPI.js";

const OrderForm = ({ onAddOrder, onCloseModal }) => {
  const [supplierName, setSupplierName] = useState([]);
  const [productName, setProductName] = useState([]);
  const [productPrice, setProductPrice] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orderList, setOrderList] = useState([]);

  const initialValues = {
    suppliername: "",
    productname: "",
    quantity: "",
  };

  useEffect(() => {
    const fetchSupplierName = async () => {
      try {
        const res = await axios.get(SUPPLIER_DATA);
        const supplierGetName = Array.from(new Set(res.data.map((item) => item.suppliername)));
        setSupplierName(supplierGetName);
        console.table(res.data);
      } catch (error) {
        console.error("Error fetching supplier names:", error);
      }
    };
    fetchSupplierName();
  }, []);

  const fetchProductName = async (supplierName) => {
    try {
      const res = await axios.get(`https://luoi-lot-ca-pf3yfmx32q-de.a.run.app/typye/order/products/${supplierName}`);
      const productGetName = Array.from(new Set(res.data.map((item) => item.pname)));
      setProductName(productGetName);
      console.table(productGetName);
    } catch (error) {
      console.error("Error fetching product names:", error);
    }
  };

  const handleSupplierChange = (selectedSupplier) => {
    setSelectedSupplier(selectedSupplier);
    // Fetch product names based on selected supplier
    fetchProductName(selectedSupplier);
    // Reset selected product and quantity
    setSelectedProduct("");
    setQuantity("");
    // Reset order list
    setOrderList([]);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(ORDER_LIST, orderList);
      setOrderList([]);
      console.table(response.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Error saving supplier data. Please try again.");
    }
    onAddOrder(orderList);
    onCloseModal();
  };

  const handleAddToList = () => {
    // Find the selected product by its name
    const selectedProductData = productName.find((product) => product === selectedProduct);
    // Create the order item
    const orderItem = {
      product: selectedProductData ? selectedProductData : "",
      quantity: parseInt(quantity),
      price: 0, // You need to fetch the price from the API or set it appropriately
      amount: 0, // You need to calculate the amount based on the price and quantity
    };
    // Add the order item to the list
    setOrderList([...orderList, orderItem]);
    // Clear form fields
    setSelectedProduct("");
    setQuantity("");
  };

  const handleDelete = (index) => {
    const updatedOrderList = [...orderList];
    updatedOrderList.splice(index, 1);
    setOrderList(updatedOrderList);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <div className={"close float-end text-2xl hover:text-red cursor-pointer"} onClick={onCloseModal}>
        &times;
      </div>

      <h2 className="text-xl font-semibold mb-4">New Order</h2>
      <div className="mb-4">
        <label htmlFor="supplier" className="block mb-1">
          Supplier:
        </label>
        <select
          id="supplier"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={selectedSupplier}
          onChange={(e) => handleSupplierChange(e.target.value)}
        >
          <option value="">Select Supplier</option>
          {supplierName.map((supplier, index) => (
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
          {productName.map((product, index) => (
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
      <div className="flex justify-end gap-5">
        <button
          className="px-4 py-2 bg-sky-200 font-semibold rounded-md hover:bg-sky-600 focus:outline-none"
          onClick={handleAddToList}
        >
          Add to List
        </button>
        <button
          className="px-4 py-2 bg-sky-200 font-semibold rounded-md hover:bg-sky-600 focus:outline-none"
          onClick={handleSave}
        >
          Save order
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
        <tbody>
          {orderList.map((orderItem, index) => (
            <tr key={index}>
              <td className="border px-6 py-4">{orderItem.product}</td>
              <td className="border px-6 py-4">{orderItem.quantity}</td>
              <td className="border px-6 py-4">{orderItem.price}</td>
              <td className="border px-6 py-4">{orderItem.amount}</td>
              <td className="border px-6 py-4">
                <button
                  className="bg-red-500 text-red font-bold px-4 py-2 rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(index)}
                >
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
