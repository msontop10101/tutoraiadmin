import React from 'react'
import loggedinlogo from '../../assets/images/loggedinlogo.png'
import Navigations from '../Navigations'

const SideNav = () => {
  return (
    <div className='fixed top-0 left-0 h-full bg-[white] w-[17%]'>
        <div className='py-10 px-4 h-[10vh] flex justify-center items-center'>
            <img src={loggedinlogo} alt='loggedin-logo' className=''/>
        </div>
        <div className=' h-[85vh] p-4'>
            <Navigations/>
        </div>
    </div>
  )
}

export default SideNav