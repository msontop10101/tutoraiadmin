import React, { useState } from 'react'
import subscribes from '../../assets/images/subscribes.png'
import unsubscribes from '../../assets/images/unsubscribes.png'
import { Line } from "react-chartjs-2";
import { Chart, LinearScale, PointElement, LineElement, CategoryScale } from 'chart.js';
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);
Chart.register(CategoryScale);

const SubscriberAnalysisChart = () => {
    const [timeFrame, setTimeFrame] = useState('yearly');
    const [chartData, setChartData] = useState({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Subscribers",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [0, 1000, 1005, 550, 300, 500, 1000, 1500],
                fill: false,
            },
            {
                label: "Unsubscribers",
                backgroundColor: "rgb(99, 132, 255)",
                borderColor: "rgb(99, 132, 255)",
                data: [0, 500, 2000, 600, 200, 400, 800, 1200],
                fill: false,
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
                        label: "Yearly Subscribers",
                        backgroundColor: "rgb(255, 99, 132)",
                        borderColor: "rgb(255, 99, 132)",
                        data: [1000, 2000, 1500, 2000, 1500, 1000, 1000, 2000, 1500, 1000, 1250, 1400],
                        fill: false,
                    },
                    {
                        label: "Yearly Unsubscribers",
                        backgroundColor: "rgb(99, 132, 255)",
                        borderColor: "rgb(99, 132, 255)",
                        data: [500, 700, 800, 200, 300, 200, 200, 400, 500, 100, 50, 200],
                        fill: false,
                    },
                ],
            };
        } else if (newTimeFrame === 'monthly') {
            newChartData = {
                labels: ["Week1", "Week2", "Week3", "Week4"],
                datasets: [
                    {
                        label: "Monthly Subscribers",
                        backgroundColor: "rgb(255, 99, 132)",
                        borderColor: "rgb(255, 99, 132)",
                        data: [500, 700, 800, 200],
                        fill: false,
                    },
                    {
                        label: "Monthly Unsubscribers",
                        backgroundColor: "rgb(99, 132, 255)",
                        borderColor: "rgb(99, 132, 255)",
                        data: [1000, 500, 700, 600],
                        fill: false,
                    },
                ],
            };
        } else if (newTimeFrame === 'weekly') {
            newChartData = {
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
                datasets: [
                    {
                        label: "Weekly Subscribers",
                        backgroundColor: "rgb(255, 99, 132)",
                        borderColor: "rgb(255, 99, 132)",
                        data: [1000],
                        fill: false,
                    },
                    {
                        label: "Weekly Unsubscribers",
                        backgroundColor: "rgb(99, 132, 255)",
                        borderColor: "rgb(99, 132, 255)",
                        data: [500],
                        fill: false,
                    },
                ],
            };
        }
        setChartData(newChartData);
    };

    return (
        <>
            <div className='bg-white h-[450px] pb-28 pt-5 px-5 rounded-md shadow-md' >
                <div className='flex justify-between py-2'>
                    <div className='flex flex-col gap-y-2'>
                        <p className='font-bold text-2xl'>Subscriber Analysis</p>
                        <div className='flex flex-col gap-y-[1px]'>
                            <div className='flex items-center gap-x-2'>
                                <img src={subscribes} alt='subscribes' />
                                <p className='text-[#00A3FF] text-md'>Subscribed</p>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <img src={unsubscribes} alt='unsubscribes' />
                                <p className='text-[#F30E0E] text-md'>Unsubscribed</p>
                            </div>
                        </div>
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

export default SubscriberAnalysisChart
