import React from 'react'
import rating from '../assets/images/rating.png'

const reviews = [
    {
        "title": "A good learning app",
        "review": "This app teaches more like your are having a physical class. It really helps get parent involves for child under 15 to monitor and assist their child",
        "by": "by declan",
        "time": "5 hours ago",
    },
    {
        "title": "A good learning app",
        "review": "This app teaches more like your are having a physical class. It really helps get parent involves for child under 15 to monitor and assist their child",
        "by": "by declan",
        "time": "5 hours ago",
    },
    {
        "title": "A good learning app",
        "review": "This app teaches more like your are having a physical class. It really helps get parent involves for child under 15 to monitor and assist their child",
        "by": "by declan",
        "time": "5 hours ago",
    }
]

const RecentReviews = () => {
    return (
        <>
            <div className='bg-[white] h-[320px] overflow-y-auto'>
                <div className='flex justify-between w-full items-center p-4'>
                    <p className='font-bold text-xl'>Recent Reviews</p>
                    <p>view</p>
                </div>
                <div className='p-8'>
                    <div>
                        <ul className='px-4 py-2'>
                            {reviews.map((reviews, index) => (
                                <li key={index} className='my-3'>
                                    <div className='flex flex-col gap-y-1'>
                                        <div><img src={rating} alt='rating' /></div>
                                        <p className='font-bold text-lg'>{reviews.title}</p>
                                        <p>{reviews.review}</p>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex items-center gap-x-4'>
                                                <p className='text-[#2A68E1] font-bold'>{reviews.by}</p>
                                                <div className='flex items-center gap-x-1'>
                                                    <div className='w-[5px] h-[5px] bg-[#FD0B0B] rounded-full'></div>
                                                    <p className='font-semibold'>{reviews.time}</p>
                                                </div>
                                            </div>
                                            <div><p className='font-bold '>reply</p></div>
                                        </div>
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

export default RecentReviews