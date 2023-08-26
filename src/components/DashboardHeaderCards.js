import React from 'react'

const DashboardHeaderCards = ({children}) => {
  return (
    <>
        <div className='w-[23%] h-[125px] bg-[white] border border-[#878787] flex justify-center items-center font-bold text-3xl'>
            {children}
        </div>
    </>
  )
}

export default DashboardHeaderCards