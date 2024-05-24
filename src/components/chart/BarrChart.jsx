import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'
import {useEffect, useState} from "react";
import {ORDERS, SALES} from "../../../api/endPointAPI.js";
import axios from "axios";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const BarChart = ({ section }) => {
    const[sales, setSales] = useState(0);
    const[orders, setOrders] = useState(0);

    useEffect(() => {

        async function fetchDataSales() {
            try {
                const response = await axios.get(SALES, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                console.log('check bar sales',response.data);
                setSales(response.data[0].total_price);
            } catch (error) {
                console.error('Error fetching sales this month:', error);
            }
        }

        fetchDataSales();

        async function fetchDataOrders() {
            try {
                const response = await axios.get(ORDERS, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                // console.log('check bar order',response.data);
                setOrders(response.data[0].count);
            } catch (error) {
                console.error('Error fetching orders this month:', error);
            }
        }
        fetchDataOrders();

    }, []);


    const dataSale ={
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[
            {
            // data: [4.2, 3.1, 5.6, 7.1, 8.2, 7.2, 5.3, 9.1, 3.5, 2, 9.2, 1.4],
                label: 'Sales',
                data: [sales],
            backgroundColor: '#fb8f67',
            borderColor: '#f26c6d',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
        }]
    }

    const dataOrder ={
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[
            {
                label: 'Orders',
                data: [orders],
                backgroundColor: '#2ec4b6',
                borderColor: '#f26c6d',
                pointBorderColor: 'transparent',
                pointBorderWidth: 4,
            }]
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
            {section === 'Sales' && <Bar data ={dataSale} options={options}></Bar>}
            {section === 'Orders' && <Bar data ={dataOrder} options={options}></Bar>}
        </div>
    )
}

export default BarChart;


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

//     const fetchData = async () => {
//         try {
//             const [salesResponse, ordersResponse] = await Promise.all([
//                 fetch(SALES),
//                 fetch(ORDERS)
//             ]);
//
//             if (!salesResponse.ok || !ordersResponse.ok) {
//                 throw new Error('API request failed'); // Handle errors gracefully
//             }
//
//             const [salesData, ordersData] = await Promise.all([
//                 salesResponse.json(),
//                 ordersResponse.json()
//             ]);
//
//             const totalSales = salesData.map(item => item.total_price);
//             const totalOrders = ordersData.map(item => item.count);
//
//             setData({
//                 ...data,
//                 datasets: [
//                     { ...data.datasets[0], data: totalSales },
//                     { ...data.datasets[1], data: totalOrders },
//                 ]
//             });
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };
//     fetchData();
// }, []);
