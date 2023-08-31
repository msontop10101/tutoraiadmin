import React from 'react';

const data = [
    {
        orderno: '#1298409488',
        name: 'Berry Thomas',
        email: 'nelsonjerry@...',
        date: '12/07/2003',
        status: 'failed',
    },
    {
        orderno: '#1298409488',
        name: 'Berry Thomas',
        email: 'nelsonjerry@...',
        date: '12/07/2003',
        status: 'paid',
    },
    {
        orderno: '#1298409488',
        name: 'Berry Thomas',
        email: 'nelsonjerry@...',
        date: '12/07/2003',
        status: 'pending',
    },
];

const InvoiceList = () => {
    return (
        <>
            <div className='bg-[white] my-2'>
                <table className="w-full text-left border-collapse ">
                    <thead>
                        <tr>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">All</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Order Number</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Email</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Name</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Date</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,index) => (
                            <tr key={index} className="hover:bg-grey-lighter w-full">
                                <td className="py-2 px-6 font-medium flex jusity-center items-center gap-x-2 w-[12%]">
                                    <div className='flex justify-center items-center'>
                                        <input type='checkbox' className='w-6 h-6' />
                                    </div>
                                </td>
                                <td className="py-1 px-6 font-medium ">{item.orderno}</td>
                                <td className="py-1 px-6 font-medium ">{item.email}</td>
                                <td className="py-1 px-6 font-medium ">{item.name}</td>
                                <td className="py-1 px-6 font-medium ">{item.date}</td>
                                <td className="py-1 px-6 font-medium ">{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default InvoiceList;
