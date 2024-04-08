import React from 'react';
import DeleteDialog from "./btn/DeleteDialog.jsx";

const OrderTable = ({ orders, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">#</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Reference</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{index + 1}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{order.date}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{order.reference}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{order.supplier}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 focus:outline-none"
                  onClick={() => onEdit(index)}
                >
                  Edit
                </button>
                {/*<button*/}
                {/*  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"*/}
                {/*  onClick={() => onDelete(index)}*/}
                {/*>*/}
                {/*  Delete*/}
                {/*</button>*/}
                <DeleteDialog/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
