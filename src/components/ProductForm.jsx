import { useState, useEffect } from "react";
import axios from "axios";

import {
  PRODUCT_DATA,
  SUPPLIER_DATA,
  PRODUCT_CATEGORY,
} from "../../api/endPointAPI";

const ProductForm = () => {
  const initialValues = {
    pid: "",
    pname: "",
    suppliername: "",
    costprice: "",
    unitprice: "",
    TName: "",
  };

  const [formProduct, setFormProduct] = useState(initialValues);

  const [supplierName, setSupplierName] = useState([]);
  const [productType, setProductType] = useState([]);

  const handleInputChange = (e) => {
    setFormProduct({ ...formProduct, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(PRODUCT_CATEGORY);
        const productTypeName = Array.from(
          new Set(res.data.map((item) => item.tname))
        );
        setProductType(productTypeName);
        console.table(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchSuppliersName = async () => {
      try {
        const res = await axios.get(SUPPLIER_DATA);
        const uniqueSupplierNames = Array.from(
          new Set(res.data.map((item) => item.suppliername))
        );
        setSupplierName(uniqueSupplierNames);
        console.table(uniqueSupplierNames);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchSuppliersName();
    fetchCategories();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(PRODUCT_DATA, formProduct);
      setFormProduct(initialValues);
      console.table(res.data);
    } catch (error) {
      console.error("Error saving product data:", error);
      alert("Error saving product data. Please try again.");
    }
  };

  const handleCancel = () => {
    setFormProduct(initialValues);
  };


  return (
    <div className="max-w-screen pt-5 pb-5 px-3 bg-white rounded-lg border flex-col justify-start gap-2 inline-flex">
      {/*<div className="w-[1120px] pt-5 pb-2.5 justify-start items-start inline-flex">*/}
      <div className="pb-2 justify-start items-center inline-flex text-black text-2xl font-bold">
        <div>
          Product form
        </div>
      </div>
      <div className={"gap-1"}>
      <div className="justify-between items-center py-5 flex shrink w-fit flex-row gap-3 ">
          <div className="gap-1 flex-col justify-center items-start inline-flex">
            <div className="text-xl font-normal ">
              SKU
            </div>
                <input
                  type="text"
                  name="pid"
                  value={formProduct.pid}
                  className="w-max  px-2 py-1 bg-white rounded-md border border-zinc-400 justify-start items-center flex text-base"
                  onChange={handleInputChange}
                />
          </div>

          <div className="w-fit flex-col justify-center items-start inline-flex gap-1">
            <div className="text-xl font-normal">
              Product name
            </div>
            <input
                  type="text"
                  name="pname"
                  value={formProduct.pname}
                  onChange={handleInputChange}
                  className="max-w-fit px-2 py-1 bg-white rounded-md border border-zinc-400 justify-start items-center flex text-base"
            />
          </div>
          <div className="gap-1 w-full flex-col justify-center items-start inline-flex">
            <div className="text-xl font-normal ">
              Category
            </div>
              <select
                  name="TName"
                  value={formProduct.TName}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 bg-white rounded-md border border-zinc-400 justify-start items-center flex text-base"

                >
                  <option value="">Select Category</option>
                  {productType.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
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
          <div className="gap-1 w-fit flex-col justify-center items-start inline-flex basis-1/2">
            <div className="flex text-xl font-normal ">
              Cost price
            </div>
              <input
                  type="text"
                  name="costprice"
                  value={formProduct.costprice}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 bg-white rounded-lg shadow border border-gray-300 justify-between items-center inline-flex"
              />
          </div>
          <div className="gap-1 w-fit flex-col justify-center items-start inline-flex basis-1/2">
            <div className="text-xl font-normal">
              Unit price
            </div>
                <input
                  type="text"
                  name="unitprice"
                  value={formProduct.unitprice}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 bg-white rounded-lg shadow border border-gray-300 justify-between items-center inline-flex"
                />
          </div>
        </div>

        <div className=" flex items-center py-5 justify-end gap-3">
          <butoon
            className="w-30 px-3.5 py-2 text-base font-medium bg-gray-300 rounded-lg shadow border border-gray-300 justify-center items-center gap-2 flex"
            onClick={handleCancel}
          >
              Clear
          </butoon>
          <button
            className="w-30 px-3.5 py-2 bg-blue hover:bg-sky-300 rounded-lg shadow border border-sky-500 justify-center items-center gap-2 flex text-neutral-50 text-base font-medium "
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

// import { useState, useEffect } from "react";
// import axios from "axios";

// import { PRODUCT_DATA, SUPPLIER_DATA, PRODUCT_CATEGORY } from "../../api/endPointAPI";

// const ProductForm = ({ editID, setFormSubmitted }) => {
//   const initialValues = {
//     pid: '',
//     pname: '',
//     suppliername: '',
//     costprice: '',
//     unitprice: '',
//     TName: '',
//   }
//   const [formProduct, setFormProduct] = useState(initialValues);

//   const [categories, setCategories] = useState([]);
//   const [supplierNames, setSupplierName] = useState([]);
//   const [productType, setProductType] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get(PRODUCT_CATEGORY);
//         const productTypeName = Array.from(new Set(res.data.map(item => item.tname)));
//         setProductType(productTypeName);
//         console.table(res.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     const fetchSuppliersName = async () => {
//       try {
//         const res = await axios.get(SUPPLIER_DATA);
//         const uniqueSupplierNames = Array.from(new Set(res.data.map(item => item.suppliername)));
//         setSupplierName(uniqueSupplierNames);
//         console.table(uniqueSupplierNames);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchSuppliersName();
//     fetchCategories(); // Call fetchCategories function here
//   }, []);

//   const handleInputChange = (e) => {
//     setFormProduct({ ...formProduct, [e.target.name]: e.target.value });
//   };

//   const handleCancel = () => {
//   };

//   const [isEdit, setIsEdit] = useState(false);
//   useEffect(() => {
//     if (editID) {
//       // Fetch data if editID is provided (edit mode)
//       setIsEdit(true);
//       fetchData(editID);
//     } else {
//       setIsEdit(false);
//     }
//   }, [editID]);

//   const fetchData = async (id) => {
//     try {
//       const response = await axios.get(
//           `${PRODUCT_DATA}/${id}`
//       );
//       const newData = { ...response.data };
//       console.log("newData >>>>>", newData);
//       setFormProduct(newData);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleChange = (e) => {
//     const {name, value} = e.target;
//     setFormProduct((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSave = async (e) => {
//     e.preventDefault();
//      try {
//     //   if (isEdit) {
//     //     const res = await axios.put(`${PRODUCT_DATA}/${editID}`, formProduct);
//     //     console.log("edited", res.data);
//     //     setFormProduct(initialValues);
//     //     setIsEdit(false);
//     //   } else {
//         const res = await axios.post(PRODUCT_DATA, formProduct);
//         JSON.stringify(res.data);
//         console.table("created", res.data);
//         setFormProduct(initialValues);
//       // }
//       // setFormSubmitted(prev => prev + 1);
//     } catch (error) {
//       console.error("Error saving product data:", error);
//       alert("Error saving product data. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center">
//       <div className="bg-white p-6 shadow-md rounded-md">
//         <h2 className="text-xl font-semibold mb-4">Product Form</h2>
//         <div className="mb-4">
//           <label htmlFor="pid" className="block mb-1">
//             SKU:
//           </label>
//           <input
//             type="text"
//             id="pid"
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//             name='pid'
//             value={formProduct.pid}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="TName" className="block mb-1">
//             Category:
//           </label>
//           <select
//             id="TName"
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//             name='TName'
//             value={formProduct.TName}
//             onChange={handleChange}
//           >
//             {productType.map((type, index) => (
//               <option key={index} value={type.tname}>
//                 {type}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="pname" className="block mb-1">
//             Product Name:
//           </label>
//           <input
//             type="text"
//             id="pname"
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//             name='pname'
//             value={formProduct.pname}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="suppliername" className="block mb-1">
//             Supplier:
//           </label>
//           <select
//             id="suppliername"
//             className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:border-blue-500"
//             name='suppliername'
//             value={formProduct.suppliername}
//             onChange={handleInputChange}
//           >
//             {supplierNames.map((supplierName, index) => (
//               <option key={index} value={supplierName.suppliername}>
//                 {supplierName}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="costprice" className="block mb-1">
//             Cost Price:
//           </label>
//           <input
//             type="text"
//             id="costprice"
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//             name='costprice'
//             value={formProduct.costprice}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="unitprice" className="block mb-1">
//             Unit Price:
//           </label>
//           <input
//             type="text"
//             id="unitprice"
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//             name='unitprice'
//             value={formProduct.unitprice}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="flex justify-center gap-4 px-20">
//           <button
//             className="px-4 py-2 font-semibold bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none"
//             onClick={handleCancel}
//           >
//             Clear
//           </button>
//           <button
//             className="px-4 py-2 font-semibold bg-sky-200 text-gray-700 rounded-md hover:bg-sky-600 focus:outline-none"
//             onClick={handleSave}
//           > {isEdit ? "Update" : "Create"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductForm;
