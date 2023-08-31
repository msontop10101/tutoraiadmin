import React from 'react'
import searchicon from '../assets/images/searchicon.png'
import LoggedinLayout from '../layout/LoggedinLayout'
import InvoiceList from '../components/Tables/InvoiceList'

const Invoice = () => {
  return (
    <>
      <LoggedinLayout>
        <div className='flex flex-col gap-y-10'>
          <div>
            <div className='py-5 flex w-full justify-between'>
              <div className='w-[40%]'>
                <p className='font-bold text-lg'>Order & Invoice</p>
              </div>
              <div className='flex w-[60%] justify-between'>
                <div className='flex items-center bg-[white] border border-[#ABABAB] rounded-full pl-10 gap-x-10 w-[50%] '>
                  <img src={searchicon} alt='searchicon' />
                  <input placeholder='Search' className="focus:outline-none py-1 bg-[transparent]" />
                </div>
                <div className='flex gap-x-5 items-center'>
                  <button className='font-bold text-white bg-[#5407B7] py-1 px-5 rounded-md'>Export</button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='w-[30%] h-[125px] bg-[white] flex justify-center items-center font-bold text-3xl rounded-md'>
              <div className='flex flex-col gap-y-2'>
                <p className='font-bold text-3xl'>Total Invoice</p>
                <p className='font-semibold text-2xl'>$120K</p>
              </div>
            </div>
            <div className='w-[30%] h-[125px] bg-[white] flex justify-center items-center font-bold text-3xl rounded-md'>
              <div className='flex flex-col gap-y-2'>
                <p className='font-bold text-3xl'>Paid Invoice</p>
                <p className='font-semibold text-2xl'>$115K</p>
              </div>
            </div>
            <div className='w-[30%] h-[125px] bg-[white] flex justify-center items-center font-bold text-3xl rounded-md'>
              <div className='flex flex-col gap-y-2'>
                <p className='font-bold text-3xl'>Pending Invoice</p>
                <p className='font-semibold text-2xl'>$15K</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-5'>
            <div className='w-full flex justify-end'>
              <p className='text-[#17F112] font-bold text-xl'>+ Create</p>
            </div>
            <div>
              <InvoiceList />
            </div>
          </div>
        </div>
      </LoggedinLayout>
    </>
  )
}

export default Invoice