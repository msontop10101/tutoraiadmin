import React, { useState } from 'react'
import { Line } from "react-chartjs-2";
import { Chart, LinearScale, PointElement, LineElement, CategoryScale } from 'chart.js';
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);
Chart.register(CategoryScale);

const StudentsSignedUp = () => {
    const [timeFrame, setTimeFrame] = useState('yearly');
    const [chartData, setChartData] = useState({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [0, 1000, 1005, 550, 300, 500, 1000, 1500],
            },
        ],
    });

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    const handleTimeFrameChange = (newTimeFrame) => {
        setTimeFrame(newTimeFrame);

        let newChartData;
        if (newTimeFrame === 'yearly') {
            newChartData = {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                    {
                        label: "Yearly Data",
                        backgroundColor: "rgb(255, 99, 132)",
                        borderColor: "rgb(255, 99, 132)",
                        data: [1000, 2000, 1500, 2500, 3000, 3500, 4000, 4500, 5000],
                    },
                ],
            };
        } else if (newTimeFrame === 'monthly') {
            newChartData = {
                labels: ["Week1", "Week2", "Week3", "Week4"],
                datasets: [
                    {
                        label: "Monthly Data",
                        backgroundColor: "rgb(255, 99, 132)",
                        borderColor: "rgb(255, 99, 132)",
                        data: [500, 1000, 1500],
                    },
                ],
            };
        } else if (newTimeFrame === 'weekly') {
            newChartData = {
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
                datasets: [
                    {
                        label: "Weekly Data",
                        backgroundColor: "rgb(255, 99, 132)",
                        borderColor: "rgb(255, 99, 132)",
                        data: [500, 100, 600, 700, 500]
                    },
                ],
            };
        }
        setChartData(newChartData);
    };

    return (
        <>
            <div className='bg-white h-[450px] pb-20 pt-5 px-5 rounded-md shadow-md' >
                <div className='flex justify-between py-2'>
                    <div>
                        <p className='font-bold text-2xl'>Students Signed-Up</p>
                        
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <select onChange={(e) => handleTimeFrameChange(e.target.value)} className='border border-[gray] rounded-md'>
                            <option value="yearly">Yearly</option>
                            <option value="monthly">Monthly</option>
                            <option value="weekly">Weekly</option>
                        </select>
                        <p className='text-[#28CC25] cursor-pointer'>+ <span className='underline'>Export</span></p>
                    </div>
                </div>
                <Line data={chartData} options={options} />
            </div>
        </>
    )
}

export default StudentsSignedUp
