import React from 'react'
import whitecircle from '../assets/images/whitecircle.png';

const Faq = () => {
    return (
        <div className='flex w-full justify-center py-14'>
            <div className='bg-[#17206C] w-[75%] rounded-md p-8'>
                <div className='flex'>
                    <div className=''>
                        <img src={whitecircle} alt='white circle' />
                    </div>
                    <div className='bg-white mx-5 w-full rounded-md p-8'>
                        <div className='flex flex-col gap-y-5 font-bold text-2xl'>
                            
                            <div className='flex items-center justify-between w-full gap-x-5'>
                                <p>Questions: </p>
                                <input
                                    type="text"
                                    id="remail"
                                    name="remail"
                                    required
                                    className='rounded-lg border border-[black] h-[53px] w-full'
                                />
                            </div>
                            <div className='flex items-center w-full justify-between gap-x-12'>
                                <p>Answer: </p>
                                <input
                                    type="text"
                                    id="remail"
                                    name="remail"
                                    required
                                    className='rounded-lg border border-[black] h-[53px] w-full'
                                />
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq