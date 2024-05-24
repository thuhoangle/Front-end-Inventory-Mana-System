import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'
// import {useEffect, useState} from "react";
// import {ORDERS, SALES} from "../../../api/endPointAPI.js";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)
export default function BarChart({ color}) {

    const data ={
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[
            {
                // data: [4.2, 3.1, 5.6, 7.1, 8.2, 7.2, 5.3, 9.1, 3.5, 2, 9.2, 1.4],
                data: [],
                backgroundColor: color,
                borderColor: '#f26c6d',
                pointBorderColor: 'transparent',
                pointBorderWidth: 4,
            }
            ]
    }



    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: false
        },
        scale:{
            x: {
                grid:{
                    display: false,
                }
            },
            y: {
                min: 0,
                max: 10,
                ticks:{
                    stepSize: 10,
                },
                grid: {
                    borderDash: [10],
                }
            }
        }
    }

    return (
        <div className=" w-auto h-auto ">
            <Bar data ={data} options={options}></Bar>
        </div>
    )
}
// export default function BarChart({ color}) {
//     const [data, setData] = useState({
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//         datasets:[
//             {
//             // data: [4.2, 3.1, 5.6, 7.1, 8.2, 7.2, 5.3, 9.1, 3.5, 2, 9.2, 1.4],
//                 label: 'Sales',
//                 data: [],
//             backgroundColor: color,
//             borderColor: '#f26c6d',
//             pointBorderColor: 'transparent',
//             pointBorderWidth: 4,
//         },
//             {
//                 label: 'Orders',
//                 data: [],
//                 backgroundColor: color,
//                 borderColor: '#f26c6d',
//                 pointBorderColor: 'transparent',
//                 pointBorderWidth: 4,
//             }]
//     });

// useEffect(() => {
//     const fetchData = async () => {
//
//         const [salesResponse, ordersResponse] = await Promise.all([
//             fetch(SALES),
//             fetch(ORDERS)
//         ]);
//
//         const [salesData, ordersData] = await Promise.all([
//             salesResponse.json(),
//             ordersResponse.json()
//         ]);
//
//         const totalSales = salesData.map(item => item.total_price);
//         const totalOrders = ordersData.map(item => item.count);
//
//         setData({
//             ...data,
//             datasets: [
//                 { ...data.datasets[0], data: totalSales },
//                 { ...data.datasets[1], data: totalOrders },
//             ]
//         });
//     };
//     fetchData();
// }, []);
