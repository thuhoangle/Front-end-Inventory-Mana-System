import React, {useEffect, useState} from 'react'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import {getCapacity} from "../../../api/endPointAPI.js";
import axios from "axios";

Chart.register(ArcElement, Tooltip, Legend);
const GaugeChart = ({ warehouse}) =>
{
    const [accountA, setAccountA] = useState(0);
    const [freeA, setFreeA] = useState(0);
    const [accountB, setAccountB] = useState(0);
    const [freeB, setFreeB] = useState(0);

    useEffect(() => {
        fetchWarehouseCapacity('Warehouse1', setAccountA, setFreeA);

        fetchWarehouseCapacity('Warehouse2', setAccountB, setFreeB);

    async function fetchWarehouseCapacity(warehouse, setAccount, setFree) {
        try {
            const url = getCapacity(warehouse);
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            console.log('check capacity',response.data);
            setAccount(response.data[0].account_space_percentage);
            setFree(response.data[0].free_space_percentage);
        } catch (error) {
            console.error("Error fetching capacity:", error);
        }
    }

    });

    const dataGaugeA = {
        labels: ['Account space', 'Free space'],
        datasets: [{
            data: [accountA, freeA],
            // data: [300, 100],
            backgroundColor: [
                '#ff99c8',
                '#e0e1dd'
            ],
            borderColor: 'transparent',
            borderWidth: 1,
            circumference: 180,
            rotation: 270,
        }]
    };
    const dataGaugeB = {
        labels: ['Account space', 'Free space'],
        datasets: [{
            data: [accountB, freeB],
            backgroundColor: [
                '#a9def9',
                '#e0e1dd'
            ],
            borderColor: 'transparent',
            borderWidth: 1,
            circumference: 180,
            rotation: 270,
        }]
    };
    const options = {
        reponsive: true,
    }

    return (
        <div className=" w-auto h-auto ">
            {warehouse === 'WarehouseA' && <Doughnut data={dataGaugeA} options={options}></Doughnut>}
            {warehouse === 'WarehouseB' && <Doughnut data={dataGaugeB} options={options}></Doughnut>}
        </div>
    )
}
export default GaugeChart;
