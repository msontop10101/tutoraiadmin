import React from 'react'

const messages = [
    {
        "name": "Dwayne Peter",
        "message": "Please i need to know why my account have been deactivated since...."
    },
    {
        "name": "Dwayne Peter",
        "message": "Please i need to know why my account have been deactivated since...."
    },
    {
        "name": "Dwayne Peter",
        "message": "Please i need to know why my account have been deactivated since...."
    }
]

const HelpCenter = () => {
    return (
        <>
            <div className='bg-[white] h-[320px] overflow-y-auto'>
                <div className='flex justify-between w-full items-center p-4'>
                    <p className='font-bold text-xl'>Help Center</p>
                    <p>more</p>
                </div>
                <div className='p-8'>
                    <p className='font-bold text-lg'>New Messages</p>
                    <div>
                        <ul className='list-disc px-4 py-2'>
                            {messages.map((msg, index) => (
                                <li key={index}>
                                    <div>
                                        <p className='font-semibold'>{msg.name}</p>
                                        <p className='text-[#6A6A6A]'>{msg.message}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HelpCenter