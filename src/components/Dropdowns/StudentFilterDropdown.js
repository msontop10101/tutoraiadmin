import React, { useState } from 'react'

const StudentFilterDropdown = ({ closeDropdown }) => {
    const [selectPlan, seteSlectplan] = useState('30mins')
    return (
        <>
            <div className=' flex bg-[white] rounded-lg w-[408px] h-[400px] text-lg p-6'>
                <div className='w-full flex flex-col gap-y-2'>
                    <div className='w-full flex flex-col gap-y-2'>
                        <p className='font-bold'>Country</p>
                        <input placeholder='input name' className='px-2 border border-gray w-full rounded-md py-2' />
                    </div>
                    <div className='w-full flex flex-col gap-y-2'>
                        <p className='font-bold'>Subscribtion plan</p>
                        <div className='flex flex-wrap gap-4'>
                            <div onClick={() => seteSlectplan('30mins')} className={`border border-[black] rounded-md font-semibold px-2 ${selectPlan === '30mins' && 'bg-[#17206C] text-white'}`}>30 mins</div>
                            <div onClick={() => seteSlectplan('60mins')} className={`border border-[black] rounded-md font-semibold px-2 ${selectPlan === '60mins' && 'bg-[#17206C] text-white'}`}>60 mins</div>
                            <div onClick={() => seteSlectplan('New')} className={`border border-[black] rounded-md font-semibold px-2 ${selectPlan === 'New' && 'bg-[#17206C] text-white'}`}>New sign-ups</div>
                            <div onClick={() => seteSlectplan('Unsubscribed')} className={`border border-[black] rounded-md font-semibold px-2 ${selectPlan === 'Unsubscribed' && 'bg-[#17206C] text-white'}`}>Unsubscribed</div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-y-2'>
                        <p className='font-bold'>Subscription</p>
                        <div>
                            <select className='border border-black p-[1px] rounded-md'>
                                <option value="">Select</option>
                                <option value="8">8 Lessons</option>
                                <option value="10">10 Lessons</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-full flex justify-center'>
                        <button
                            onClick={closeDropdown}
                            className={`bg-[#17206C] text-white px-8 py-[1px] rounded-full font-semibold`}
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentFilterDropdown;