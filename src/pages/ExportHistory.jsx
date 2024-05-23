import React from 'react'
import DeleteDialog from "../components/btn/DeleteDialog.jsx";

const ExportHistory = () => {
    return (
        <>

            <div className="overflow-x-auto flex flex-col pt-6 mx-3 pr-2">
                <div className="pb-2 justify-start items-center inline-flex text-black text-2xl font-bold">
                    <div>
                        View Export History
                    </div>
                </div>
                <table className="min-w-full bg-white rounded-md">
                    <thead>
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Eid</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Employee
                            name
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">001</td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Lorem Ipsum</td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <DeleteDialog/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ExportHistory
