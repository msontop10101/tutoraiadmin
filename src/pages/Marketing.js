import React from 'react'
import LoggedinLayout from '../layout/LoggedinLayout'
import searchicon from '../assets/images/searchicon.png'
import TimedPlans from '../components/Tables/TimedPlans'

const Marketing = () => {
  return (
    <>
      <LoggedinLayout>
        <div>
            <div>
              <div className='py-5 flex w-full justify-between' style={{ borderBottom: '1px solid gray' }}>
                <div className='w-[40%]'>
                  <p className='font-bold text-xl'>Price setup</p>
                </div>
                <div className='flex w-[60%] justify-between'>
                  <div className='flex items-center bg-[white] rounded-full pl-10 gap-x-10 w-[70%] '>
                    <img src={searchicon} alt='searchicon' />
                    <input placeholder='Search' className="focus:outline-none py-1 bg-[transparent]" />
                  </div>
                  <div className='flex gap-x-5 items-center'>
                    <button className='font-bold text-white bg-[#BA191A] py-1 px-5 rounded-md'>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          <div>
            <div className='p-20'>
              <TimedPlans/>
            </div>
          </div>
        </div>
      </LoggedinLayout>
    </>
  )
}

export default Marketing