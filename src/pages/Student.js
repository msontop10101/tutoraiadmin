import React, { useState } from 'react'
import LoggedinLayout from '../layout/LoggedinLayout'
import searchicon from '../assets/images/searchicon.png'
import filter from '../assets/images/filter.png'
import Unsubscribed from '../components/Tables/Unsubscribed'
import Subscribed from '../components/Tables/Subscribed'
import ExportDropdown from '../components/Dropdowns/ExportDropdown'
import StudentFilterDropdown from '../components/Dropdowns/StudentFilterDropdown'

const Student = () => {
  const [selected, setSelected] = useState('unsubscribed')
  const [edropdown, setEdropdown] = useState(false)
  const [fdropdown, setFdropdown] = useState(false)

  const closeDropdown = () => {
    setEdropdown(false)
  }
  const closeFDropdown = () => {
    setFdropdown(false)
  }
  return (
    <LoggedinLayout>
      <>
        <div className='py-5 flex'>
          <ul className='bg-red w-full flex gap-x-5 w-[30%] py-1'>
            <li onClick={() => setSelected('subscribed')} className={`cursor-pointer text-[#A0A0A0] font-semibold`} style={{ color: selected === "subscribed" && "black", borderBottom: selected === "subscribed" && "2px solid black" }}>Subscribed</li>
            <li onClick={() => setSelected('unsubscribed')} className='cursor-pointer text-[#A0A0A0] font-semibold' style={{ color: selected === "unsubscribed" && "black", borderBottom: selected === "unsubscribed" && "2px solid black" }}>Unsubscribed</li>
          </ul>
          <div className='flex w-[150%] justify-between'>
            <div className='flex items-center bg-[transparent] border border-[#ABABAB] rounded-full pl-10 gap-x-10 w-[50%] '>
              <img src={searchicon} alt='searchicon' />
              <input placeholder='Search' className="focus:outline-none py-1 bg-[transparent]" />
            </div>
            <div className='flex gap-x-5 items-center relative'>
              <div className='relative'>
                <img src={filter} alt='filter' onClick={() => setFdropdown(!fdropdown)} />
                <div className={`absolute top-10 right-10 ${fdropdown === true ? 'block' : 'hidden'}`}>
                  <StudentFilterDropdown closeDropdown={closeFDropdown} />
                </div>
              </div>
              <div className='bg-[red]'>
                <button className='font-bold text-white bg-[#5407B7] py-1 px-5 rounded-md' onClick={() => setEdropdown(!edropdown)}>Export</button>
                <div className={`${edropdown ? 'block' : 'hidden'} absolute top-10 right-7`}>
                  <ExportDropdown closeDropdown={closeDropdown} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {selected === 'subscribed' ? <Subscribed /> : <Unsubscribed />}
        </div>
      </>
    </LoggedinLayout>
  )
}

export default Student