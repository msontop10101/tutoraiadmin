import React, {useState} from 'react'
import LoggedinLayout from '../layout/LoggedinLayout'
import circleArrow from '../assets/images/circleArrow.png'
import EmailMsg from './Tables/EmailMsg'
import SmsMsg from './Tables/SmsMsg'
import WhatsAppMsg from './Tables/WhatsAppMsg'

const MarketingMessage = () => {
    const [selected, setSelected] = useState('email')
  return (
    <>
        <LoggedinLayout>
            <div className='p-8'>
                <div>
                    <p className='font-bold text-xl'>Message</p>
                </div>
                <div className='flex items-center gap-x-7'>
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex gap-x-5 items-center cursor-pointer' onClick={() => setSelected('email')}>
                            <img src={circleArrow} alt='arrow'/>
                            <p className='text-lg text-[#A8A8A8]' style={{ color: selected === "email" && "black", borderBottom: selected === "email" && "2px solid black" }}>Email</p>
                        </div>
                        <div className='flex gap-x-5 items-center cursor-pointer' onClick={() => setSelected('sms')}>
                            <img src={circleArrow} alt='arrow'/>
                            <p className='text-lg text-[#A8A8A8]' style={{ color: selected === "sms" && "black", borderBottom: selected === "sms" && "2px solid black" }}>SMS</p>
                        </div>
                        <div className='flex gap-x-5 items-center cursor-pointer' onClick={() => setSelected('whatsapp')}>
                            <img src={circleArrow} alt='arrow'/>
                            <p className='text-lg text-[#A8A8A8]' style={{ color: selected === "whatsapp" && "black", borderBottom: selected === "whatsapp" && "2px solid black" }}>WhatsApp</p>
                        </div>
                    </div>
                    <div>
                        {selected === 'email' ? <EmailMsg/> : selected === 'sms' ? <SmsMsg/> : <WhatsAppMsg/>}
                    </div>
                </div>
            </div>
        </LoggedinLayout>
    </>
  )
}

export default MarketingMessage