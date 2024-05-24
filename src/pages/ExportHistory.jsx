import React, { useEffect, useState } from 'react'
import DeleteDialog from "../components/btn/DeleteDialog.jsx";
import axios from 'axios';
import { EXPORT_HISTORY_DATA } from '../../api/endPointAPI.js';

const ExportHistory = () => {
    const [exportHistoryData,setExportHistoryData] = useState([])

    useEffect(()=>
    {
        axios.get(EXPORT_HISTORY_DATA,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
        .then(res=>
            {
                console.log(res.data)
                setExportHistoryData(res.data)
            }
        )
    },[])



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
                        {
                            exportHistoryData.map((data,index)=>(
                                <tr>
                                {/*implement API sau*/}
                                {/*<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{index + 1}</td>*/}
                                {/*<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{export.Ename}</td>*/}
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{data.eid}</td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{data.employeename}</td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <DeleteDialog/>
                                </td>
                            </tr>
                            ))
                        }
                   
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ExportHistory
