import React from 'react'
import LoggedinLayout from '../layout/LoggedinLayout'
import searchicon from '../assets/images/searchicon.png'
import filter from '../assets/images/filter.png'
import NewSignUps from '../components/Tables/NewSignUps'
import SubscribersTable from '../components/Tables/SubscribersTable'

const Subscribers = () => {
  return (
    <LoggedinLayout>
      <>
        <div>
          <p className='font-bold text-lg py-2'>SUBSCRIBERS</p>
          <div className='border border-[black] rounded-md p-4'>
            <div className='py-5 flex'>
              <div className='w-[30%]'>
                <p className='text-[#7B7B7B]'>New Signup</p>
              </div>
              <div className='flex w-[70%] justify-between'>
                <div className='flex items-center bg-[white]  rounded-full pl-10 gap-x-10 w-[50%] '>
                  <img src={searchicon} alt='searchicon' />
                  <input placeholder='Search' className="focus:outline-none py-1 bg-[transparent]" />
                </div>
                <div className='flex gap-x-5 items-center'>
                  <div>
                    <img src={filter} alt='filter' />
                  </div>
                  <button className='font-bold text-white bg-[#5407B7] py-1 px-5 rounded-md'>Export</button>
                  <button className='font-bold text-white bg-[#BA191A] py-1 px-5 rounded-md'>Remove</button>
                </div>
              </div>
            </div>
            <div>
              <NewSignUps/>
            </div>
          </div>


          <div className='border border-[black] rounded-md p-4 my-5'>
            <div className='py-5 flex'>
              <div className='w-[30%]'>
                <p className='text-[#7B7B7B]'>Subscribers</p>
              </div>
              <div className='flex w-[70%] justify-between'>
                <div className='flex items-center bg-[white]  rounded-full pl-10 gap-x-10 w-[50%] '>
                  <img src={searchicon} alt='searchicon' />
                  <input placeholder='Search' className="focus:outline-none py-1 bg-[transparent]" />
                </div>
                <div className='flex gap-x-5 items-center'>
                  <div>
                    <img src={filter} alt='filter' />
                  </div>
                  <button className='font-bold text-white bg-[#5407B7] py-1 px-5 rounded-md'>Export</button>
                  <button className='font-bold text-white bg-[#BA191A] py-1 px-5 rounded-md'>Remove</button>
                </div>
              </div>
            </div>
            <div>
              <SubscribersTable/>
            </div>
          </div>
        </div>
      </>
    </LoggedinLayout>
  )
}

export default Subscribers