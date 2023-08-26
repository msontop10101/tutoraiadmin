import React from 'react'
import LoggedinLayout from '../layout/LoggedinLayout'
import DashboardHeaderCards from '../components/DashboardHeaderCards'
import RevenueChart from '../components/Charts/RevenueChart'

const Dashboard = () => {
  return (
    <LoggedinLayout>
      <>
        <div className=' my-2'>
          <div className='w-full flex justify-between'>
            <DashboardHeaderCards>
              <div className='h-full w-full flex flex-col justify-center items-center relative'>
                <div className='absolute top-1 right-2 text-sm font-bold'><p>+create</p></div>
                <p>Lessons</p>
              </div>
            </DashboardHeaderCards>
            <DashboardHeaderCards>
              <div className='h-full w-full flex flex-col justify-center items-center relative'>
                <div className='absolute top-1 left-2'>
                  <p className='text-[20px] font-bold'>Students</p>
                  <p className='text-sm font-medium'>All users</p>
                </div>
                <p className='pt-10'>20,000</p>
              </div>
            </DashboardHeaderCards>
            <DashboardHeaderCards>
              <div className='h-full w-full flex flex-col justify-center items-center relative'>
                <div className='absolute top-1 left-2'>
                  <p className='text-[20px] font-bold'>Subscribers</p>
                  <div className='flex items-center gap-x-1'>
                    <div className='w-[10px] h-[10px] bg-[#09F62F] rounded-full'></div>
                    <p className='text-sm font-medium'>Active subscribers</p>
                  </div>
                </div>
                <p className='text-[#09F62F] pt-10'>15,000</p>
              </div>
            </DashboardHeaderCards>
            <DashboardHeaderCards>
              <div className='text-center'>
                <p>Administrator</p>
                <p className='text-[#ED1515]'>3</p>
              </div>
            </DashboardHeaderCards>
          </div>
        </div>
        <div>
          <RevenueChart/>
        </div>
        <div>
          
        </div>
      </>
    </LoggedinLayout>
  )
}

export default Dashboard