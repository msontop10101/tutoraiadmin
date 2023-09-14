import React from 'react'
import radioimg from '../assets/images/radioimg.png'

const Contactus = () => {
    return (
        <>
            <div className='w-full flex justify-center py-10'>
                <div className='w-[90%] flex flex-col gap-y-8'>
                    <div className='flex items-center justify-between w-[30%]'>
                        <div className='flex gap-x-5 items-center'>
                            <div className='justify-center items-center'>
                                <img src={radioimg} alt='radio-img' />
                            </div>
                            <p className='font-bold text-xl'>Facebook</p>
                        </div>
                        <div>
                            <button className='font-bold text-white text-sm bg-[#17206C] py-[1px] px-6 rounded-lg'>
                                Edit
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-[30%]'>
                        <div className='flex gap-x-5 items-center'>
                            <div className='justify-center items-center'>
                                <img src={radioimg} alt='radio-img' />
                            </div>
                            <p className='font-bold text-xl'>Twitter</p>
                        </div>
                        <div>
                            <button className='font-bold text-white text-sm bg-[#17206C] py-[1px] px-6 rounded-lg'>
                                Edit
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-[30%]'>
                        <div className='flex gap-x-5 items-center'>
                            <div className='justify-center items-center'>
                                <img src={radioimg} alt='radio-img' />
                            </div>
                            <p className='font-bold text-xl'>Email</p>
                        </div>
                        <div>
                            <button className='font-bold text-white text-sm bg-[#17206C] py-[1px] px-6 rounded-lg'>
                                Edit
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-[30%]'>
                        <div className='flex gap-x-5 items-center'>
                            <div className='justify-center items-center'>
                                <img src={radioimg} alt='radio-img' />
                            </div>
                            <p className='font-bold text-xl'>Phone Number</p>
                        </div>
                        <div>
                            <button className='font-bold text-white text-sm bg-[#17206C] py-[1px] px-6 rounded-lg'>
                                Edit
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-[30%]'>
                        <div className='flex gap-x-5 items-center'>
                            <div className='justify-center items-center'>
                                <img src={radioimg} alt='radio-img' />
                            </div>
                            <p className='font-bold text-xl'>Instagram</p>
                        </div>
                        <div>
                            <button className='font-bold text-white text-sm bg-[#17206C] py-[1px] px-6 rounded-lg'>
                                Edit
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Contactus