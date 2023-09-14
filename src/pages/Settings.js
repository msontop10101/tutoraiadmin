import React, { useState } from 'react'
import LoggedinLayout from '../layout/LoggedinLayout'
import Faq from '../components/Faq'
import Contactus from '../components/Contactus'

const Settings = () => {
  const [selected, setSelected] = useState('faqs')
  return (
    <>
      <LoggedinLayout>
        <div>
          <div>
            <div className='py-5 flex justify-between'>
              <div>
                <ul className='bg-red w-full flex gap-x-5 w-[30%] py-1'>
                  <li onClick={() => setSelected('faqs')} className={`cursor-pointer text-[#A0A0A0] font-semibold`} style={{ color: selected === "faqs" && "black", borderBottom: selected === "faqs" && "2px solid black" }}>FAQs</li>
                  <li onClick={() => setSelected('contactus')} className='cursor-pointer text-[#A0A0A0] font-semibold' style={{ color: selected === "contactus" && "black", borderBottom: selected === "contactus" && "2px solid black" }}>Contact us</li>
                </ul>
              </div>
              <div className='flex gap-x-5 items-center'>
                <p className='text-[#26CD37] font-bold'>+ Add</p>
                <button className='font-bold text-white bg-[#BA191A] py-1 px-6 rounded-md'>Remove</button>
              </div>
            </div>
            <div>
              {selected === 'faqs' ? <Faq /> : <Contactus />}
            </div>
          </div>
        </div>
      </LoggedinLayout>
    </>
  )
}

export default Settings