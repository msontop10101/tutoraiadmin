import React from 'react'
import profilepic from '../../assets/images/profilepic.png'
import notification from '../../assets/images/notification.png'
import settings from '../../assets/images/settings.png'

const Header = () => {
    return (
        <>
            <div className='bg-[#17206C] w-full h-[7vh] flex justify-between px-5'>
                <div className='h-full flex items-center'>
                    <div className='bg-[#D9D9D9] rounded-md h-[5vh] flex gap-x-1 items-center px-3'>
                        <div>
                            <img src={profilepic} alt='profile-pic' className='object-contain h-[4vh]' />
                        </div>
                        <p className='font-semibold text-sm'>Merissa joseline</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-3'>
                    <div><img src={notification} alt='notification'/></div>
                    <div><img src={settings} alt='settings'/></div>
                </div>
            </div>
        </>
    )
}

export default Header