import React from 'react'
import {Button} from "@chakra-ui/react";
import DeleteDialog from "../components/btn/DeleteDialog.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import {
    PRODUCT_DATA,
    SUPPLIER_DATA,
    PRODUCT_CATEGORY,
    WAREHOUSE,
  } from "../../api/endPointAPI";


const Export = () => {
  const [supplierName, setSupplierName] = useState([]);
  const initialValues = {
    pid: "",
    pname: "",
    suppliername: "",
    costprice: "",
    unitprice: "",
    TName: "",
  };
  const [formProduct, setFormProduct] = useState(initialValues);
  const [warehouse,setWarehouse] = useState()
  const [productName,setProductName]=useState()

  useEffect(() => {
    const fetchWarehouses = async ()=>
        {
            
                await axios.get(WAREHOUSE)
                .then(res=>
                    setWarehouse(res.data)
                )
                .catch(err=>
                    {
                        console.log("Error due to ", err)
                    }
                )
        }



    const fetchSuppliersName = async () => {
      try {
        const res = await axios.get(SUPPLIER_DATA);
        const uniqueSupplierNames = Array.from(
          new Set(res.data.map((item) => item.suppliername))
        );
        setSupplierName(uniqueSupplierNames);
        // console.table(uniqueSupplierNames);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchProductName = async () => {
        try {
          const res = await axios.get(PRODUCT_DATA);
          setProductName(res.data)
        } catch (error) {
          console.error("Error fetching product name:", error);
        }
      };

    fetchSuppliersName();
    fetchWarehouses()
    fetchProductName()
  }, []);

  const handleInputChange = (e) => {
    setFormProduct({ ...formProduct, [e.target.name]: e.target.value });
  };
    return (
        <div className="overflow-x-auto h-screen flex flex-col justify-between p-10 gap-5">
            <div>
                <div className='pb-2'>
                    <div className=" justify-start items-center inline-flex text-black text-2xl font-bold">
                        Export
                    </div>
                    <div className={"flex gap-4 justify-between"}>
                    <div className="justify-start  items-start py-5 flex shrink w-fit flex-row gap-12 ">
                        <div className="gap-1 flex-col justify-center items-start inline-flex basis-1/2">
                            <div className="text-md">
                                Warehouse
                            </div>
                            <select
                                name="warehouse"
                                // value={export.warehouse}
                                // onChange={handleInputChange}
                                className="w-full px-2 py-1 bg-white rounded-md border border-zinc-400 justify-start items-center flex text-base"

                            >
                                <option value="">Select Warehouse</option>
                               {
                                warehouse?.map((item,index)=>
                                (<option key={index} value={item.wname}>{item.wname}</option>
                                ))
                               }
                            </select>
                        </div>

                        <div className="gap-1 w-full flex-col justify-center items-start inline-flex">
            <div className="text-xl font-normal">
              Supplier
            </div>
                <select
                  name="suppliername"
                  value={formProduct.suppliername}
                  onChange={handleInputChange}
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

                        <div className="w-fit flex-col justify-center items-start inline-flex basis-1/2 gap-1">
                            <div className="text-md">
                                Product name
                            </div>
                            <select
                                name="pName"
                                // value={export.pName}
                                // onChange={handleInputChange}
                                className="w-full px-2 py-1 bg-white rounded-md border border-zinc-400 justify-start items-center flex text-base"

                            >
                                <option value="">Select Product</option>
                               {
                                productName?.map((product,index)=>
                                (<option key={index} value={product.pname}>{product.pname}</option>))
                               }
                            </select>
                        </div>
                        <div className="gap-1 w-fit flex-col justify-center items-start inline-flex basis-1/2">
                            <div className="text-md">
                                Quantity
                            </div>
                            <input
                                type="text"
                                name="quantity"
                                className="w-full px-2 py-1 bg-white rounded-lg shadow border border-gray-300 justify-between items-center inline-flex"
                            />
                        </div>
                    </div>


                    <div className=" flex items-center py-5 justify-end gap-3 mt-4">
                        <button
                            className="w-30 px-4 py-2 bg-blue font-semibold hover:bg-sky-300 rounded-full shadow border border-sky-500 justify-center items-center gap-2 flex text-neutral-50 text-base  "
                            // onClick={handleSave}
                        >
                            Export
                        </button>
                    </div>
                    {/*</div>*/}


                </div>
                </div>
                <table className="min-w-full bg-white overflow-y-scroll rounded-md">
                    <thead>
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Eid</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Warehouse
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Product</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Qty</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                    <tr>
                        {/*implement API sau*/}
                        {/*<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{index + 1}</td>*/}
                        {/*<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{export.Ename}</td>*/}
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">001</td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Lorem Ipsum</td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Lorem Ipsum</td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">25</td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <DeleteDialog/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className=" flex justify-end py-10 w-full">
                <button
                    className="w-full px-4 py-2 bg-blue font-semibold hover:bg-sky-300 rounded-full shadow border border-sky-500 justify-center items-center gap-2 flex text-neutral-50 text-base  "
                    // onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    )
}
export default Export
