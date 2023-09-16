import React, {useState} from 'react';
import FeedbackModal from '../Modal/FeedbackModal';

const data = [
    {
        no: 1,
        name: 'Berry Thomas',
        email: 'nelsonjerry@...',
        country: 'USA',
        phone: '+13379973990',
        number: 12345,
        feedback: 'Lorem ipsum dolor sit amet consectetur. Arcu orci est commodo tortor donec. Arcu morbi aliquet ornare blandit sit mus ornare imperdiet scelerisque. In ac condimentum lacus aliquet lorem mattis. Venenatis mi sagittis purus et auctor volutpat ultrices purus a.',
    },
    {
        no: 2,
        name: 'Berry Thomas',
        email: 'nelsonjerry@...',
        country: 'USA',
        phone: '+13379973990',
        number: 12345,
        feedback: 'Great service!',
    },
    {
        no: 3,
        name: 'Berry Thomas',
        email: 'nelsonjerry@...',
        country: 'USA',
        phone: '+13379973990',
        number: 12345,
        feedback: 'Great service!',
    },
];

const Unsubscribed = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className={`${isModalOpen === true ? 'block' : 'hidden'}`}>
                <FeedbackModal closeModal={closeModal}/>
            </div>
            <div className='bg-[white] my-2'>
                <table className="w-full text-left border-collapse ">
                    <thead>
                        <tr>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">All</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Name</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Email</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Country</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Phone</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Number</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#808080] ">Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.no} className="hover:bg-grey-lighter w-full">
                                <td className="py-2 px-6 font-medium flex jusity-center items-center gap-x-2 w-[12%]">
                                    <div className='flex justify-center items-center'>
                                        <input type='checkbox' className='w-6 h-6' />
                                    </div>
                                    <div>{item.no}</div>
                                </td>
                                <td className="py-1 px-6 font-medium ">{item.name}</td>
                                <td className="py-1 px-6 font-medium ">{item.email}</td>
                                <td className="py-1 px-6 font-medium ">{item.country}</td>
                                <td className="py-1 px-6 font-medium ">{item.phone}</td>
                                <td className="py-1 px-6 font-medium ">{item.number}</td>
                                <td className="py-1 px-6 font-medium ">
                                    <div className='w-[100px] overflow-hidden truncate border border-[#999999] rounded-md p-1'>
                                        {item.feedback}
                                    </div>
                                </td>
                                <td className="py-1 px-6 font-medium">
                                    <div className='flex gap-x-5'>
                                        <button onClick={() => setIsModalOpen(true)} className={`bg-[#17206C] text-sm py-1 px-1 text-white rounded-lg `}>View Feedback</button>
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

export default Unsubscribed;
