import React from 'react';
import searchicon from '../../assets/images/searchicon.png'
import filter from '../../assets/images/filter.png'

const data = [
    {
        no: 1,
        name: "Berry Thomas",
        phone: "+1339739930",
        subscription: "30 mins plan",
        plan: 'Plan_1',
        status: "Received"
    },
    {
        no: 2,
        name: "Berry Thomas",
        phone: "+1339739930",
        subscription: "30 mins plan",
        plan: 'Plan_1',
        status: "Received"
    },
    {
        no: 3,
        name: "Berry Thomas",
        phone: "+1339739930",
        subscription: "30 mins plan",
        plan: 'Plan_1',
        status: "Received"
    },
];

const SmsMsg = () => {
    return (
        <>
            <div className='flex flex-col gap-y-8'>
                <div className='my-2 p-12 bg-white rounded-md flex flex-col gap-y-5'>
                    <div className='py-5 flex w-full justify-between'>
                        <div className='w-[40%]'>
                            <p className='font-bold text-lg'>SMS</p>
                        </div>
                        <div className='flex w-[60%] justify-between'>
                            <div className='flex items-center bg-[white] border border-[#ABABAB] rounded-full pl-10 gap-x-10 w-[50%] '>
                                <img src={searchicon} alt='searchicon' />
                                <input placeholder='Search' className="focus:outline-none py-1 bg-[transparent]" />
                            </div>
                            <div className='flex gap-x-5 items-center'>
                                <img src={filter} alt='filter'/>
                                <button className='font-bold text-white bg-[#17206C] py-1 px-5 rounded-md'>Compose</button>
                            </div>
                        </div>
                    </div>
                    <table className="w-full text-left border-collapse ">
                        <thead>
                            <tr>
                                <th className="py-4 px-2 bg-grey-lightest font-bold uppercase text-sm text-[#808080] "></th>
                                <th className="py-4 pr-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">No</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Name</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Phone Number</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Subscription</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Plan</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Status</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] "></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className="hover:bg-grey-lighter w-full">
                                    <td className="py-2 px-2 font-medium flex jusity-center items-center gap-x-2">
                                        <div className='flex justify-center items-center'>
                                            <input type='checkbox' className='w-6 h-6' />
                                        </div>
                                    </td>
                                    <td className="py-1 pr-6 font-medium ">{item.no}</td>
                                    <td className="py-1 px-6 font-medium ">{item.name}</td>
                                    <td className="py-1 px-6 font-medium ">{item.phone}</td>
                                    <td className="py-1 px-6 font-medium ">{item.subscription}</td>
                                    <td className="py-1 px-6 font-medium ">{item.plan}</td>
                                    <td className="py-1 px-6 font-medium ">{item.status}</td>
                                    <td className="py-1 px-6 font-medium">
                                        <div className='flex gap-x-5'>
                                            <button className={`bg-[#26CD37] text-sm py-1 px-6 text-white rounded-lg `}>Send</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default SmsMsg;
