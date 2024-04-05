import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'

// eslint-disable-next-line no-unused-vars
import React from 'react'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)
export default function LineChart() {


    const data1 = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets:[{
            data: [4.2, 3.1, 5.6, 7.1, 8.2, 7.2, 5.3, 9.1, 3.5, 2, 9.2, 1.4],
            backgroundColor: 'transparent',
            borderColor: '#f26c6d',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.5
        }]
    };


    const options = {
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
        <Line data ={data1} options={options}></Line>
    </div>
  )
}
