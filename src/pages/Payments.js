import React, { useState } from 'react'
import LoggedinLayout from '../layout/LoggedinLayout'
import searchicon from '../assets/images/searchicon.png'
import PaymentMethod from '../components/PaymentMethod'
import PaymentHistory from '../components/Tables/PaymentHistory'

const Payments = () => {
  const [selected, setSelected] = useState('payment-method')
  return (
    <>
      <LoggedinLayout>
        <div>
          <div className='py-5 flex'>
            <ul className='bg-red w-full flex gap-x-5 w-[30%] py-1'>
              <li onClick={() => setSelected('payment-method')} className={`cursor-pointer text-[#A0A0A0] font-semibold`} style={{ color: selected === "payment-method" && "black", borderBottom: selected === "payment-method" && "2px solid black" }}>Payment Method</li>
              <li onClick={() => setSelected('payment-history')} className='cursor-pointer text-[#A0A0A0] font-semibold' style={{ color: selected === "payment-history" && "black", borderBottom: selected === "payment-history" && "2px solid black" }}>Payment History</li>
            </ul>
            <div className='flex w-[150%] justify-between'>
              <div className='flex items-center bg-[white] rounded-full pl-10 gap-x-10 w-[60%] '>
                <img src={searchicon} alt='searchicon' />
                <input placeholder='Search' className="focus:outline-none py-1 bg-[transparent]" />
              </div>
              <div className='flex gap-x-5 items-center'>
                <button className='font-bold text-white bg-[#17206C] py-1 px-6 rounded-md'>+ Create</button>
              </div>
            </div>
          </div>
          <div>
          {selected === 'payment-method' ? <PaymentMethod/> : <PaymentHistory/> }
          </div>
        </div>
      </LoggedinLayout>
    </>
  )
}

export default Payments