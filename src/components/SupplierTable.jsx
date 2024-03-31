import React, { useState } from "react";

const suppliers = [
    {
        supplierName: "Chill",
        contact: "+72738901",
        address: "randomAddress",
    },
];

const SupplierTable = () => {
    const [setSupplierName] = useState("");
    const [setContact] = useState("");
    const [setAddress] = useState("");

    const handleEdit = () => {
        // Implement save functionality here
        console.log("Supplier Name:", supplier.supplierName);
        console.log("Contact:", supplier.contact);
        console.log("Address:", supplier.address);
    };

    const handleDetete = () => {
        // Implement cancel functionality here
        setSupplierName("");
        setContact("");
        setAddress("");
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
                            Num
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
                            Supplier Name
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
                            Contact
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
                            Address
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-xs leading-4 font-medium text-black uppercase tracking-wider">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {suppliers.map((supplier, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                {"#"}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                {supplier.supplierName}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                {supplier.contact}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                {supplier.address}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
                                <button
                                    className="px-4 py-2 mr-2 bg-blue-500 text-black bg-sky-200 rounded-md hover:bg-sky-700 focus:outline-none"
                                    onClick={handleEdit}
                                >
                                    Edit
                                </button>
                                <button
                                    className="px-4 py-2 mr-2 bg-blue-500 text-black bg-red-600 rounded-md hover:bg-red-800 focus:outline-none"
                                    onClick={handleDetete}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SupplierTable;
