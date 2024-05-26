import React from 'react'
import DeleteDialog from "../components/btn/DeleteDialog.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  EXPORT_DATA,
  PRODUCT_DATA,
  SUPPLIER_DATA,
  WAREHOUSE,
} from "../../api/endPointAPI";

const Export = () => {
  const initiateExportData = {
    warehouse: '',
    supplier: '',
    productName: '',
    quantity: ''
  };

  const [supplierName, setSupplierName] = useState([]);
  const [warehouse, setWarehouse] = useState([]);
  const [productName, setProductName] = useState([]);
  const [exportData, setExportData] = useState(initiateExportData);
  const [exportTable, setExportTable] = useState([]);

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const res = await axios.get(WAREHOUSE, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setWarehouse(res.data);
      } catch (err) {
        console.log("Error:", err);
      }
    };

    const fetchSuppliersName = async () => {
      try {
        const res = await axios.get(SUPPLIER_DATA, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const uniqueSupplierNames = Array.from(
          new Set(res.data.map((item) => item.suppliername))
        );
        setSupplierName(uniqueSupplierNames);
      } catch (error) {
        console.error("Error fetching supplier names:", error);
      }
    };

    fetchSuppliersName();
    fetchWarehouses();
  }, []);

  const fetchProductName = async (supplierName) => {
    try {
      const res = await axios.get(`https://luoi-lot-ca-pf3yfmx32q-de.a.run.app/typye/order/products/${supplierName}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProductName(res.data);
    } catch (error) {
      console.error("Error fetching product names:", error);
    }
  };

  const handleChangeWareHouse = (event) => {
    setExportData({ ...exportData, warehouse: event.target.value });
  };

  const handleChangeSupplier = (event) => {
    const supplier = event.target.value;
    setExportData({ ...exportData, supplier: supplier });
    fetchProductName(supplier); // Fetch product names when supplier changes
  };

  const handleChangeProductName = (event) => {
    setExportData({ ...exportData, productName: event.target.value });
  };

  const handleChangeQuantity = (event) => {
    setExportData({ ...exportData, quantity: event.target.value });
  };

  const handleExport = () => {
    setExportTable([...exportTable, exportData]);
  };

  const handleDelete = (index) => {
    setExportTable(exportTable.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    try {
      for (let data of exportTable) {
        await axios.post(
          EXPORT_DATA,
          {
            warehouseName: data.warehouse,
            productName: data.productName,
            supplierName: data.supplier,
            exportQuantity: data.quantity,
            employeeName: `${localStorage.getItem('first_name')} ${localStorage.getItem('last_name')}`
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      }
      setExportTable([]);
    } catch (error) {
      console.error("Error saving export data:", error);
    }
  };

  return (
    <div className="overflow-x-auto h-screen  flex flex-col justify-between mx-3 pr-2 pt-6">
      <div className="min-w-screen">
        <div className="pb-2">
          <div className="justify-start items-center inline-flex text-black text-2xl font-bold">
            Export
          </div>
          <div className="flex gap-4 justify-between flex-col md:flex-row bg-white px-4  rounded-lg shadow-md ">
            <div className="justify-start  items-start py-5 flex shrink w-fit flex-col md:flex-row gap-12 ">
              <div className="w-full gap-1 flex-col justify-center items-start inline-flex ">
                <div className="text-md font-medium">Warehouse</div>
                <select
                  name="warehouse"
                  value={exportData.warehouse}
                  onChange={handleChangeWareHouse}
                  className="w-full px-2 py-1 bg-white rounded-md border border-zinc-400 justify-start items-center flex text-base"
                >
                  <option value="">Select Warehouse</option>
                  {warehouse?.map((item, index) => (
                    <option key={index} value={item.wname}>
                      {item.wname}
                    </option>
                  ))}
                </select>
              </div>

              <div className="gap-1 w-full flex-col justify-center items-start inline-flex">
                <div className="text-md font-medium">Supplier</div>
                <select
                  name="suppliername"
                  value={exportData.supplier}
                  onChange={handleChangeSupplier}
                  className="w-full px-2 py-1 bg-white rounded-lg shadow border border-gray-300 justify-between items-center "
                >
                  <option value="">Select Supplier</option>
                  {supplierName.map((supplier, index) => (
                    <option key={index} value={supplier}>
                      {supplier}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full flex-col justify-center items-start inline-flex  gap-1">
                <div className="text-md font-medium">Product name</div>
                <select
                  name="pName"
                  value={exportData.productName}
                  onChange={handleChangeProductName}
                  className="w-full px-2 py-1 bg-white rounded-md border border-zinc-400 justify-start items-center flex text-base"
                >
                  <option value="">Select Product</option>
                  {productName?.map((product, index) => (
                    <option key={index} value={product.pname}>
                      {product.pname}
                    </option>
                  ))}
                </select>
              </div>
              <div className="gap-1 w-full flex-col justify-center items-start inline-flex ">
                <div className="text-md font-medium">Quantity</div>
                <input
                  value={exportData.quantity}
                  onChange={handleChangeQuantity}
                  type="text"
                  name="quantity"
                  className="w-full px-2 py-1 bg-white rounded-lg shadow border border-gray-300 justify-between items-center inline-flex"
                />
              </div>
            </div>
            <div className=" flex items-center py-5 justify-start md:justify-end gap-3 mt-4">
              <button
                className="w-30 px-4 py-2 bg-blue font-semibold hover:bg-sky-300 rounded-full shadow border border-sky-500 justify-center items-center gap-2 flex text-neutral-50 text-base  "
                onClick={handleExport}
              >
                Export
              </button>
            </div>
          </div>
        </div>
        <table className="min-w-full bg-white overflow-y-scroll rounded-md">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Eid
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Warehouse
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Qty
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {exportTable?.map((data, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{index}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{data.warehouse}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{data.productName}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{data.quantity}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <DeleteDialog onClick={() => handleDelete(index)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" flex justify-end py-10 w-full">
        <button
          className="w-full px-4 py-2 mb-8 bg-blue font-semibold hover:bg-sky-300 rounded-full shadow border border-sky-500 justify-center items-center gap-2 flex text-neutral-50 text-base  "
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Export;
