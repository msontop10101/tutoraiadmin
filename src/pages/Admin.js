import React, { useState } from 'react'
import LoggedinLayout from '../layout/LoggedinLayout'
import AdminSignupForm from '../components/Forms/AdminSignupForm'
import AllUsers from '../components/Tables/AllUsers'
import searchicon from '../assets/images/searchicon.png'
import { Link } from 'react-router-dom'



const Admin = () => {
  const [selected, setSelected] = useState('add-admin')
  return (
    <LoggedinLayout>
      <>
        <div className='py-5 flex'>
          <ul className='bg-red w-full flex gap-x-5 w-[30%] py-1'>
            <li onClick={() => setSelected('add-admin')} className={`cursor-pointer text-[#A0A0A0] font-semibold`} style={{ color: selected === "add-admin" && "black", borderBottom: selected === "add-admin" && "2px solid black" }}>Add Administrator</li>
            <li onClick={() => setSelected('all-users')} className='cursor-pointer text-[#A0A0A0] font-semibold' style={{ color: selected === "all-users" && "black", borderBottom: selected === "all-users" && "2px solid black" }}>All Users</li>
          </ul>
          {selected === 'all-users' && <div className='flex w-[150%] justify-between'>
            <div className='flex items-center bg-white rounded-full pl-10 gap-x-10 w-[50%]'>
              <img src={searchicon} alt='searchicon' />
              <input placeholder='Search' className="focus:outline-none py-1" />
            </div>
            <div className='flex gap-x-5'>
              <button className='font-bold text-white bg-[#26CD37] py-1 px-5 rounded-md' onClick={() => setSelected('add-admin')}>+ Add</button>
              <button className='font-bold text-white bg-[#BA191A] py-1 px-5 rounded-md' onClick={() => setSelected('add-admin')}>Remove</button>
            </div>
          </div>}
        </div>
        <div>
          {selected === 'add-admin' ? <AdminSignupForm /> : <AllUsers />}
        </div>
      </>
    </LoggedinLayout>
  )
}

export default Admin