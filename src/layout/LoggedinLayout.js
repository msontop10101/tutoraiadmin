import React from 'react'
import Header from '../components/Layout/Header'
import SideNav from '../components/Layout/SideNav'

const LoggedinLayout = ({ children }) => {
    return (
        <div className='bg-[#F6F6FC]'>
            <div className='flex w-full'>
                <div className='w-[20%] h-[100vh] bg-[white]'>
                    <SideNav />
                </div>
                <div className='w-full'>
                    <div className=''>
                        <Header />
                    </div>
                    <div className='mx-5'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoggedinLayout