import React, { useState } from 'react'
import LoggedinLayout from '../layout/LoggedinLayout'
import circleArrow from '../assets/images/circleArrow.png'
import Listening from '../components/Listening'
import Proficency from '../components/Proficency'
import Writing from '../components/Writing'

const PreTestContent = () => {
    const [selected, setSelected] = useState('listening')
    return (
        <>
            <LoggedinLayout>
                <div className='p-8'>
                    <div className='flex justify-between'>
                        <p className='font-bold text-3xl capitalize'>{selected}</p>
                        <div className='flex gap-x-3 items-center'>
                            <button className='font-bold text-white bg-[#26CD37] py-1 px-5 rounded-md'>+ Create</button>
                            <button className='font-bold text-white bg-[#BA191A] py-1 px-5 rounded-md'>Remove</button>
                        </div>
                    </div>
                    <div className='flex pt-10 gap-x-7 w-full'>
                        <div className='flex flex-col gap-y-4'>
                            <div className='flex gap-x-5 items-center cursor-pointer' onClick={() => setSelected('listening')}>
                                <img src={circleArrow} alt='arrow' />
                                <p className='text-lg text-[#A8A8A8]' style={{ color: selected === "listening" && "black", borderBottom: selected === "listening" && "2px solid black" }}>Listening</p>
                            </div>
                            <div className='flex gap-x-5 items-center cursor-pointer' onClick={() => setSelected('proficency')}>
                                <img src={circleArrow} alt='arrow' />
                                <p className='text-lg text-[#A8A8A8]' style={{ color: selected === "proficency" && "black", borderBottom: selected === "proficency" && "2px solid black" }}>Proficency</p>
                            </div>
                            <div className='flex gap-x-5 items-center cursor-pointer' onClick={() => setSelected('writings')}>
                                <img src={circleArrow} alt='arrow' />
                                <p className='text-lg text-[#A8A8A8]' style={{ color: selected === "writings" && "black", borderBottom: selected === "writings" && "2px solid black" }}>Writings</p>
                            </div>
                        </div>
                        <div className='w-[80%]'>
                            {selected === 'listening' ? <Listening /> : selected === 'proficency' ? <Proficency /> : <Writing />}
                        </div>
                    </div>
                </div>
            </LoggedinLayout>
        </>
    )
}

export default PreTestContent;