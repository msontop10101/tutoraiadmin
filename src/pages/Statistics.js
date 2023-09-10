import React from 'react'
import LoggedinLayout from '../layout/LoggedinLayout'
import StudentsSignedUp from '../components/Charts/StudentsSignedUp'
import SubscribersAnalysis from '../components/Charts/SubscribersAnalysis'

const Statistics = () => {
  return (
    <>
      <LoggedinLayout>
        <div className='w-[100%] flex gap-x-10 my-10'>
          <div className='w-[50%]'>
            <StudentsSignedUp/>
          </div>
          <div className='w-[50%]'>
            <SubscribersAnalysis/>
          </div>
        </div>
      </LoggedinLayout>
    </>
  )
}

export default Statistics