/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import '../pages/Supplier.jsx'
import DeleteDialog from "./btn/DeleteDialog.jsx";
import EditBtn from "./btn/EditBtn.jsx";

// eslint-disable-next-line react/prop-types
const SupplierTable = ({ suppliers }) => {

    const handleEdit = () => {

    };

    const handleDelete = () => {

    }

    const generateTextFile = () => {
        const dataToExport = JSON.stringify(suppliers, null, 2);

        const blob = new Blob([dataToExport], { type: 'text/plain' });

        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'supplier_data.txt';

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
                    {suppliers.map(
                        (supplier, index) => {
                            return (
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
                                        {/*<button*/}
                                        {/*    className="px-5 py-3 gap-3 mr-2 bg-blue-500 text-black bg-sky-200 rounded-md hover:bg-sky-700 focus:outline-none"*/}
                                        {/*    onClick={handleEdit}*/}
                                        {/*>*/}
                                        {/*    Edit*/}
                                        {/*</button>*/}
                                        {/*<button*/}
                                        {/*    className="px-4 py-3 mr-2 bg-blue-500 text-black bg-rose-400 rounded-md hover:bg-rose-600 focus:outline-none"*/}
                                        {/*    onClick={handleDelete}*/}
                                        {/*>*/}
                                        {/*    Delete*/}
                                        {/*</button>*/}
                                        <div className={'flex gap-2'}>
                                            <EditBtn no1={'Supplier name'} no2={'Contact'} no3={'Address'}/>
                                            <DeleteDialog/>
                                        </div>
                                    </td>
                                </tr>
                        )
                        }
                    )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default SupplierTable;
