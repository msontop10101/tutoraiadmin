import React from 'react';

const data = [
    { no: 1, orderNumber: '#1280948-488', email: 'nelsonjeby@...', name: 'Berry thomas', date: '12/07/2003', status: 'Processed' },
    { no: 2, orderNumber: '#1280948-488', email: 'nelsonjeby@...', name: 'Berry thomas', date: '12/07/2003', status: 'Failed' },
    { no: 3, orderNumber: '#1280948-488', email: 'nelsonjeby@...', name: 'Berry thomas', date: '12/07/2003', status: 'Pending' },
    { no: 4, orderNumber: '#1280948-488', email: 'nelsonjeby@...', name: 'Berry thomas', date: '12/07/2003', status: 'Paid' },
    { no: 5, orderNumber: '#1280948-488', email: 'nelsonjeby@...', name: 'Berry thomas', date: '12/07/2003', status: 'Paid' },
];

const InvoiceAndOrderTable = () => {
    return (
        <>
            <div className='bg-[white] my-2'>
                <p className='font-bold text-lg p-5 '>Recent Invoice and Orders </p>
                <table className="w-full text-left border-collapse ">
                    <thead>
                        <tr>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] border-b border-grey-light">No</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] border-b border-grey-light">Order Number</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] border-b border-grey-light">Email</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] border-b border-grey-light">Name</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] border-b border-grey-light">Date</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] border-b border-grey-light">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.no} className="hover:bg-grey-lighter">
                                <td className="py-1 px-6 font-semibold">{item.no}</td>
                                <td className="py-1 px-6 font-semibold">{item.orderNumber}</td>
                                <td className="py-1 px-6 font-semibold">{item.email}</td>
                                <td className="py-1 px-6 font-semibold">{item.name}</td>
                                <td className="py-1 px-6 font-semibold">{item.date}</td>
                                <td className="py-1 px-6 font-semibold">{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default InvoiceAndOrderTable;
