import React, { useState, useEffect } from "react";
import axios from "axios";

import { ORDER_LIST, SUPPLIER_DATA, PRODUCT_DATA, PRODUCT_CATEGORY } from "../../api/endPointAPI.js";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody, ModalCloseButton
} from "@chakra-ui/react";

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
    const fetchProductName = async () => {
      try {
        const res = await axios.get(PRODUCT_DATA);
        const productGetName = Array.from(new Set(res.data.map((item) => item.pname)));
        const productGetPrice = Array.from(new Set(res.data.map((item) => item.unitprice)));
        setProductName(productGetName);
        setProductPrice(productGetPrice);
        console.table(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchSuppliersName = async () => {
      try {
        const res = await axios.get(SUPPLIER_DATA);
        const uniqueSupplierNames = Array.from(new Set(res.data.map((item) => item.suppliername)));
        setSupplierName(uniqueSupplierNames);
        console.table(uniqueSupplierNames);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchSuppliersName();
    fetchProductName(); // Call fetchCategories function here
  }, []);

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
    const selectedProductData = productName.find((product) => product.pname === selectedProduct);
    // Create the order item
    const orderItem = {
      product: selectedProductData ? selectedProductData.pname : "",
      quantity: parseInt(quantity),
      price: selectedProductData ? parseInt(selectedProductData.unitprice) : 0,
      amount: parseInt(quantity) * parseInt(selectedProductData ? selectedProductData.unitprice : 0),
    };
    // Add the order item to the list
    setOrderList([...orderList, orderItem]);
    // Clear form fields
    setSelectedSupplier("");
    setSelectedProduct("");
    setQuantity("");
  };

  const handleDelete = (index) => {
    const updatedOrderList = [...orderList];
    updatedOrderList.splice(index, 1);
    setOrderList(updatedOrderList);
  };

  return (
      <Modal isOpen={true} onClose={onCloseModal} scrollBehavior="inside" size="2xl">
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>New Order</ModalHeader>
            <ModalCloseButton onClick={onCloseModal} />
          <ModalBody>
            <div className="mb-4 ">
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

            <table className="min-w-full ">
              <thead>
              <tr>
                <th className="px-7 py-3 text-center">Product</th>
                <th className="px-7 py-3 text-center">Quantity</th>
                <th className="px-7 py-3 text-center">Price</th>
                <th className="px-7 py-3 text-center">Amount</th>
                <th className="px-7 py-3 text-center">Action</th>
              </tr>
              </thead>
              <tbody className={' overflow-y-auto overflow-x-hidden'}>
              {orderList.map((orderItem, index) => (
                  <tr key={index}>
                    <td className="border  py-2">{orderItem.product}</td>
                    <td className="border py-2">{orderItem.quantity}</td>
                    <td className="border  py-2">{orderItem.price}</td>
                    <td className="border py-2">{orderItem.amount}</td>
                    <td className="border  py-2">
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

          </ModalBody>
        </ModalContent>
      </Modal>
    );
};


export default OrderForm;
