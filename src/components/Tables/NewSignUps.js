import React from 'react';

const data = [
    {
        no: 1,
        name: 'Berry Thomas',
        email: 'nelsonjerry@...',
        country: 'USA',
        DOB: "12/07/1999",
        phone: '+13379973990',
        date: "March 6, 2018",
    },
    {
        no: 2,
        name: 'Berry Thomas',
        email: 'nelsonjerry@...',
        country: 'USA',
        DOB: "12/07/1999",
        phone: '+13379973990',
        date: "March 6, 2018",
    },
    {
        no: 3,
        name: 'Berry Thomas',
        email: 'nelsonjerry@...',
        country: 'USA',
        phone: '+13379973990',
        date: "March 6, 2018",
    },
];

const NewSignUps = () => {
    return (
        <>
            <div className='my-2'>
                <table className="w-full text-left border-collapse ">
                    <thead>
                        <tr>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Name</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Country</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Phone Number</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Date</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.no} className="hover:bg-grey-lighter w-full">
                                <td className="py-2 px-6 font-medium flex jusity-center items-center gap-x-2">
                                    <div className='flex justify-center items-center'>
                                        <input type='checkbox' className='w-6 h-6' />
                                    </div>
                                    <div>{item.name}</div>
                                </td>
                                <td className="py-1 px-6 font-medium ">{item.country}</td>
                                <td className="py-1 px-6 font-medium ">{item.phone}</td>
                                <td className="py-1 px-6 font-medium ">{item.date}</td>
                                <td className="py-1 px-6 font-medium ">{item.email}</td>
                                <td className="py-1 px-6 font-medium">
                                    <div className='flex gap-x-5'>
                                        <button className={`bg-[#17206C] text-sm py-1 px-6 text-white rounded-lg `}>View</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default NewSignUps;
