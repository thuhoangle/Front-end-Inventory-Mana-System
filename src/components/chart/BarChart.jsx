import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import { useEffect, useState } from "react";
import { ORDERS, SALES } from "../../../api/endPointAPI.js";
import axios from "axios";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

const BarChart = ({ section }) => {
    const [sales, setSales] = useState(Array(12).fill(0));
    const [orders, setOrders] = useState(Array(12).fill(0));

    useEffect(() => {
        async function fetchDataSales() {
            try {
                const response = await axios.get(SALES, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                // console.log('check bar sales',response.data);
                const salesData = response.data.map(item => parseFloat(item.total_price));
                setSales(salesData);
            } catch (error) {
                console.error('Error fetching sales data:', error);
            }
        }

        async function fetchDataOrders() {
            try {
                const response = await axios.get(ORDERS, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                const ordersData = response.data.map(item => parseInt(item.count, 10));
                setOrders(ordersData);
            } catch (error) {
                console.error('Error fetching orders data:', error);
            }
        }

        fetchDataSales();
        fetchDataOrders();
    }, []);

    const dataSale = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                // label: 'Sales',
                data: sales,
                backgroundColor: '#fb8f67',
                borderColor: '#f26c6d',
                pointBorderColor: 'transparent',
                pointBorderWidth: 4,
            }
        ]
    };

    const dataOrder = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                // label: 'Orders',
                data: orders,
                backgroundColor: '#2ec4b6',
                borderColor: '#f26c6d',
                pointBorderColor: 'transparent',
                pointBorderWidth: 4,
            }
        ]
    };

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: false
        },
        // scales: {
        //     x: {
        //         grid: {
        //             display: false,
        //         }
        //     },
        //     y: {
        //         min: 0,
        //         ticks: {
        //             stepSize: 50, // Adjust this based on your data range
        //         },
        //         grid: {
        //             borderDash: [10],
        //         }
        //     }
        // }
    };

    return (
        <div className="w-auto h-auto">
            {section === 'Sales' && <Bar data={dataSale} options={options}></Bar>}
            {section === 'Orders' && <Bar data={dataOrder} options={options}></Bar>}
        </div>
    );
}

export default BarChart;
