import React from 'react';

const data = [
    {
        "No": 1,
        "Email": "example1@example.com",
        "Name": "Barry Brandson",
        "Payment-Method": "Stripe",
        "Subscriptions": 5,
        "Price-per-Lesson": 10,
        "Total": 50,
        "Status": "Completed",
        "Paid": true
    },
    {
        "No": 2,
        "Email": "example2@example.com",
        "Name": "Barry Brandson",
        "Payment-Method": "PayPal",
        "Subscriptions": 3,
        "Price-per-Lesson": 15,
        "Total": 45,
        "Status": "Pending",
        "Paid": false
    },
];

const PaymentHistory = () => {
    return (
        <>
            <div className='bg-[white] my-2'>
                <table className="w-full text-left border-collapse ">
                    <thead>
                        <tr>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">No</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Email</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Name</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Payment Method</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Subscription</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Price per lesson</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Total</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.No} className="hover:bg-grey-lighter w-full text-sm">
                                <td className="py-2 px-6 font-medium flex jusity-center items-center gap-x-2 w-[12%]">

                                    {item.No}
                                </td>
                                <td className="py-1 px-6 font-medium ">{item.Email}</td>
                                <td className="py-1 px-6 font-medium ">{item.Name}</td>
                                <td className="py-1 px-6 font-medium ">{item['Payment-Method']}</td>
                                <td className="py-1 px-6 font-medium ">{item.Subscriptions} Lessons</td>
                                <td className="py-1 px-6 font-medium ">${item['Price-per-Lesson']}</td>
                                <td className="py-1 px-6 font-medium ">{item.Total}</td>
                                <td className="py-1 px-6 font-medium ">{item.Status}</td>
                                <td className="py-1 px-6 font-medium ">{item.Paid}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default PaymentHistory;
