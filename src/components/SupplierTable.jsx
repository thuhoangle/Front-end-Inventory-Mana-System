import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteDialog from "./btn/DeleteDialog.jsx";
// import { WiMoonAltWaxingGibbous1 } from "react-icons/wi";
import {Button} from "@chakra-ui/react";

const SupplierTable = ({ data, handleClickEdit }) => {
  const [suppliersData, setSuppliersData] = useState([]);

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/supplierData");
        setSuppliersData(res.data);
      } catch (error) {
        console.log("Error fetching suppliers:", error);
      }
    };
    const intervalId = setInterval(fetchSuppliers, 500);
    return () => clearInterval(intervalId);
  }, []);


  const deleteSupplier = async (id) => {
    try {
      // Perform delete operation
      await axios.delete(`http://localhost:3000/supplierData/${id}`);
      // Optionally, you can also update the suppliersData state after successful delete
      const updatedSuppliers = suppliersData.filter(supplier => supplier.id !== id);
      setSuppliersData(updatedSuppliers);
    } catch (error) {
      console.error('Error deleting supplier:', error);
    }
  };

  const generateTextFile = () => {
    const dataToExport = JSON.stringify(suppliersData, null, 2);

    const blob = new Blob([dataToExport], { type: "text/plain" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "supplier_data.txt";

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };



  return (
    <div className="overflow-x-auto justify-start">
      <button
        className="px-4 py-2 mb-4 bg-sky-200 text-black rounded-md hover:bg-sky-700 focus:outline-none"
        onClick={generateTextFile}
      >
        Generate Text File
      </button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-3 py-3 w-10 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
              Num
            </th>
            <th className="px-4 py-3 w-40 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
              Supplier Name
            </th>
            <th className="px-4 py-3 w-40 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
              Contact
            </th>
            <th className="px-4 py-3 w-56 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
              Address
            </th>
            <th className="px-4 py-3 w-40 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider whitespace-no-wrap">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {suppliersData.map(
            (
              supplier,
              index // Use suppliersData instead of suppliers
            ) => (
              <tr key={index}>
                <td className="px-3 py-3 border-b border-gray-200">
                  {index + 1}
                </td>
                <td className="px-4 py-3 border-b border-gray-200">
                  {supplier.supplierName}
                </td>
                <td className="px-4 py-3 border-b border-gray-200">
                  {supplier.contact}
                </td>
                <td className="px-4 py-3 border-b border-gray-200">
                  {supplier.address}
                </td>
                <td className="py-3 border-b border-gray-200 text-center">
                  <div className={"flex gap-2"}>
                    <Button colorScheme={'twitter'} onClick={() => handleClickEdit(supplier.id)}>Edit</Button>
                    {/*<EditBtn*/}
                    {/*  no1={"Supplier name"}*/}
                    {/*  no2={"Contact"}*/}
                    {/*  no3={"Address"}*/}
                    {/*  onClick={() => editSupplier(supplier.id)}*/}
                    {/*  save={updateSupplier}*/}
                    {/*  handleChange={handleChange}*/}
                    {/*  dataForm={dataForm}*/}
                    {/*/>*/}
                    <DeleteDialog onClick={() => deleteSupplier(supplier.id)} />
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierTable;
