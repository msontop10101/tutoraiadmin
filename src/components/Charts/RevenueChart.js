import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart, LinearScale, PointElement, LineElement, CategoryScale } from 'chart.js';
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);
Chart.register(CategoryScale);



const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const data = {
    labels: labels,
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 1000, 1005, 550, 300, 500, 1000, 1500],
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
};

const RevenueChart = () => {
    return (
        <>
            <div className='bg-white my-2 h-[300px]' >
                <Line data={data} options={options}/>
            </div>
        </>
    )
}

export default RevenueChart