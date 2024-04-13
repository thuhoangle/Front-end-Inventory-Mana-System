import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductForm = ({ editID, setFormSubmitted }) => {
  const initialValues ={
    sku: "",
    category: "",
    productName: "",
    supplierName: "",
    price: "",
  }
  const [formProduct, setFormProduct] = useState(initialValues);

  const [categories, setCategories] = useState([]);
  const [supplierName, setSupplierName] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:3000/categories");
        setCategories(res.data);
        console.table(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchSuppliersName = async () => {
      try {
        const res = await axios.get("http://localhost:3000/supplierData");
        setSupplierName(res.data);
        console.table(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchSuppliersName();
    fetchCategories(); // Call fetchCategories function here
  }, []);

  const handleInputChange = (e) => {
    setFormProduct({ ...formProduct, [e.target.name]: e.target.value });
  };

  // const handleSave = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Make POST request to JSON server
  //     await axios.post("http://localhost:3000/productData", formProduct);
  //
  //     // Clear form fields after successful save
  //     setFormProduct({
  //       sku: "",
  //       category: "",
  //       productName: "",
  //       supplierName: "",
  //       price: "",
  //     });
  //   } catch (error) {
  //     console.error("Error saving product data:", error);
  //     alert("Error saving product data. Please try again.");
  //   }
  // };

  const handleCancel = () => {
    setFormProduct({
      sku: "",
      category: "",
      productName: "",
      supplierName: "",
      price: "",
    });
  };

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
          `http://localhost:3000/productData/${id}`
      );
      const newData = { ...response.data };
      console.log("newData >>>>>", newData);
      setFormProduct(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        const res = await axios.put(`http://localhost:3000/productData/${editID}`, formProduct);
        console.log("edited", res.data);
        setFormProduct(initialValues);
        setIsEdit(false);
      } else {
        const res = await axios.post("http://localhost:3000/productData", formProduct);
        console.log("created", res.data);
        setFormProduct(initialValues);
      }
      setFormSubmitted(prev => prev + 1);
    } catch (error) {
      console.error("Error saving product data:", error);
      alert("Error saving product data. Please try again.");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white p-6 shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4">Product Form</h2>
        <div className="mb-4">
          <label htmlFor="sku" className="block mb-1">
            SKU:
          </label>
          <input
            type="text"
            id="sku"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            name="sku"
            value={formProduct.sku}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-1">
            Category:
          </label>
          <select
            id="category"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            name="category"
            value={formProduct.category}
            onChange={handleInputChange}
          >
            {categories.map((category, index) => (
              <option key={index} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="productName" className="block mb-1">
            Product Name:
          </label>
          <input
            type="text"
            id="productName"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            name="productName"
            value={formProduct.productName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-1">
            Supplier:
          </label>
          <select
            id="supplierName"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            name="supplierName"
            value={formProduct.supplierName}
            onChange={handleInputChange}
          >
            {supplierName.map((supplier, index) => (
              <option key={index} value={supplier.supplierName}>
                {supplier.supplierName}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-1">
            Price:
          </label>
          <input
            type="text"
            id="price"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            name="price"
            value={formProduct.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center gap-4 px-20">
          <button
            className="px-4 py-2 font-semibold bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none"
            onClick={handleCancel}
          >
            Clear
          </button>
          <button
            className="px-4 py-2 font-semibold bg-sky-200 text-gray-700 rounded-md hover:bg-sky-600 focus:outline-none"
            onClick={handleSave}
          > {isEdit ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
