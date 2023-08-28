import React from 'react'
import LoggedinLayout from '../layout/LoggedinLayout'
import studentdb from '../assets/images/studentdb.png'

const StudentProfile = () => {
    return (
        <LoggedinLayout>
            <>
                <div>
                    <p className='font-bold text-lg uppercase my-5'>Student profile</p>
                    <div className='p-8'>
                        <img src={studentdb} alt='studentdb' />
                        <div className='bg-white rounded-md flex flex-col gap-y-3 p-4 my-5 w-[30%]'>
                            <p className='font-bold text-lg'>Kelvin Montague</p>
                            <p><span className='font-bold'>Gender:</span> Male</p>
                            <p><span className='font-bold'>Country:</span> United State</p>
                            <p><span className='font-bold'>Date Of Birth:</span> 12/07/2002</p>
                            <p><span className='font-bold'>Phone Number:</span> +13480802032</p>
                            <p><span className='font-bold'>Email:</span> kelvinmong@gmail.com</p>
                            <p><span className='font-bold'>Subscription:</span> 16 Lessons</p>
                            <p><span className='font-bold'>Status:</span> Inactive/Unsubscribe</p>
                        </div>
                    </div>
                    <div className='w-full flex justify-center mb-5'>
                        <div className='w-[80%]'>
                            <div className='bg-white rounded-md flex justify-evenly p-8'>
                                <div className='flex flex-col gap-y-2'>
                                    <p className='font-bold text-lg'>Lessons</p>
                                    <p className='text-[#434141]'><span className='font-semibold'>Total Lesson:</span> 24 Lessons </p>
                                    <p className='text-[#434141]'><span className='font-semibold'>Total Time:</span> 30mins </p>
                                    <p className='text-[#434141]'><span className='font-semibold'>Attempted:</span> 1 Lesson </p>
                                    <button className={`bg-[#17206C] text-sm py-2 px-10 text-white rounded-lg font-bold`}>Details</button>
                                </div>
                                <div className='flex flex-col gap-y-2'>
                                    <p className='font-bold text-lg text-center'>Assignments</p>
                                    <p className='text-[#434141]'><span className='font-semibold'>Total Assignments:</span> 24 </p>
                                    <p className='text-[#434141]'><span className='font-semibold'>Attempted:</span> 12 </p>
                                    <p className='text-[#434141]'><span className='font-semibold'>unattempted:</span> 4 </p>
                                    <div className='text-[#8E8E8E] text-sm flex justify-between'><p>Pass: 45%</p><p>Failed: 37%</p></div>
                                    <button className={`bg-[#17206C] text-sm py-2 px-10 text-white rounded-lg font-bold`}>Details</button>
                                </div>
                                <div className='flex flex-col gap-y-2'>
                                    <p className='font-bold text-lg text-center'>Exam</p>
                                    <p className='text-[#434141]'><span className='font-semibold'>Total Exam:</span> 24 Lessons</p>
                                    <div className='text-[#8E8E8E] text-sm flex justify-between'><p>Pass: 45%</p><p>Failed: 37%</p></div>
                                    <button className={`bg-[#17206C] text-sm py-2 px-10 text-white rounded-lg font-bold`}>Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </LoggedinLayout>
    )
}

export default StudentProfile