import React from 'react';

const data = [
    {
      no: 1,
      email: "example1@example.com",
      phone: "123-456-7890",
      name: "John Doe",
      role: "User",
      status: "Enable",
    },
    {
      no: 2,
      email: "example2@example.com",
      phone: "123-456-7890",
      name: "Jane Doe",
      role: "Editor",
      status: "Disable",
    },
    {
      no: 3,
      email: "example3@example.com",
      phone: "123-456-7890",
      name: "Bob Smith",
      role: "Viewer",
      status: "Enable",
    },
  ];

const AllUsers = () => {
    return (
        <>
            <div className='bg-[white] my-2'>
                <p className='font-bold text-lg p-5 '>USERS</p>
                <table className="w-full text-left border-collapse ">
                    <thead>
                        <tr>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">No</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Email</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Phone</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Name</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Role</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.no} className="hover:bg-grey-lighter">
                                <td className="py-2 px-6 font-medium">{item.no}</td>
                                <td className="py-2 px-6 font-medium">{item.email}</td>
                                <td className="py-2 px-6 font-medium">{item.phone}</td>
                                <td className="py-2 px-6 font-medium">{item.name}</td>
                                <td className="py-2 px-6 font-medium">{item.role}</td>
                                <td className="py-2 px-6 font-medium">
                                    <div className='flex gap-x-5'>
                                        <button className='bg-[#26CD37] py-1 px-6 text-white rounded-lg'>Enable</button>
                                        <button className='bg-[#BA191A] py-1 px-6 text-white rounded-lg'>Disable</button>
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

export default AllUsers;
