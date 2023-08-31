import React from 'react';

const data30 = [
    {
        planid: 'Plan_4',
        discount: '0%',
        lessons: '8',
        priceperlesson: "$0.5",
    },
    {
        planid: 'Plan_5',
        discount: '0%',
        lessons: '8',
        priceperlesson: "$0.5",
    },
    {
        planid: 'Plan_6',
        discount: '0%',
        lessons: '8',
        priceperlesson: "$0.5",
    }
];

const TimedPlans = () => {
    return (
        <>
            <div className='flex flex-col gap-y-8'>
                <div className='my-2 p-12 bg-white rounded-md flex flex-col gap-y-5'>
                    <div className='py-5' style={{ borderBottom: '1px solid #777777' }}>
                        <p className='text-[#777777]'>30 mins plan</p>
                    </div>
                    <table className="w-full text-left border-collapse ">
                        <thead>
                            <tr>
                                <th className="py-4 bg-grey-lightest font-bold uppercase text-sm text-[#808080] "></th>
                                <th className="py-4 pr-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Plan Id</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Discount</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Lessons</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Price Per Lesson</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] "></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data30.map((item, index) => (
                                <tr key={index} className="hover:bg-grey-lighter w-full">
                                    <td className="py-2 font-medium flex jusity-center items-center gap-x-2">
                                        <div className='flex justify-center items-center'>
                                            <input type='checkbox' className='w-6 h-6' />
                                        </div>
                                    </td>
                                    <td className="py-1 pr-6 font-medium ">{item.planid}</td>
                                    <td className="py-1 px-6 font-medium ">{item.discount}</td>
                                    <td className="py-1 px-6 font-medium ">{item.lessons}</td>
                                    <td className="py-1 px-6 font-medium ">{item.priceperlesson}</td>
                                    <td className="py-1 px-6 font-medium">
                                        <div className='flex gap-x-5'>
                                            <button className={`bg-[#17206C] text-sm py-1 px-6 text-white rounded-lg `}>Edit</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='my-2 p-12 bg-white rounded-md flex flex-col gap-y-5'>
                    <div className='py-5' style={{ borderBottom: '1px solid #777777' }}>
                        <p className='text-[#777777]'>60 mins plan</p>
                    </div>
                    <table className="w-full text-left border-collapse ">
                        <thead>
                            <tr>
                                <th className="py-4 bg-grey-lightest font-bold uppercase text-sm text-[#808080] "></th>
                                <th className="py-4 pr-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Plan Id</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Discount</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Lessons</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Price Per Lesson</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] "></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data30.map((item, index) => (
                                <tr key={index} className="hover:bg-grey-lighter w-full">
                                    <td className="py-2 font-medium flex jusity-center items-center gap-x-2">
                                        <div className='flex justify-center items-center'>
                                            <input type='checkbox' className='w-6 h-6' />
                                        </div>
                                    </td>
                                    <td className="py-1 pr-6 font-medium ">{item.planid}</td>
                                    <td className="py-1 px-6 font-medium ">{item.discount}</td>
                                    <td className="py-1 px-6 font-medium ">{item.lessons}</td>
                                    <td className="py-1 px-6 font-medium ">{item.priceperlesson}</td>
                                    <td className="py-1 px-6 font-medium">
                                        <div className='flex gap-x-5'>
                                            <button className={`bg-[#17206C] text-sm py-1 px-6 text-white rounded-lg `}>Edit</button>
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

export default TimedPlans;
