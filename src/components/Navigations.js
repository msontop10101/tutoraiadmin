import React from 'react'
import { Link } from 'react-router-dom'
import blacksettings from '../assets/images/blacksettings.png'
import logout from '../assets/images/logouticon.png'

const Data = [
    {
        "route": '/dashboard',
        "name": 'Dashboard'
    },
    {
        "route": '/admin',
        "name": 'Admin'
    },
    {
        "route": '/student',
        "name": 'Student'
    },
    {
        "route": '/subscribers',
        "name": 'Subscribers'
    },
    {
        "route": '/lessons',
        "name": 'Lessons'
    },
    {
        "route": '/payment',
        "name": 'Payments'
    },
    {
        "route": '/invoice',
        "name": 'Invoice'
    },
    {
        "route": '/statistics',
        "name": 'Statistics'
    },
    {
        "route": '/marketing',
        "name": 'Marketing'
    },
    {
        "route": '/pre-test-content',
        "name": 'Pre-test Content'
    }
]

const lData = [
    {
        "route": '/settings',
        "img": blacksettings,
        "name": "Settings"
    },
    {
        "route": '/logout',
        "img": logout,
        "name": "Logout"
    },
]

const Navigations = () => {
    return (
        <>
            <div className='flex flex-col h-full justify-between'>
                <ul className='w-full text-center'>
                    {Data.map((item, index) => (
                        <li key={index} className='my-1 py-1'>
                            <Link to={item.route} className='hover:bg-[#17206C] px-2 py-1 rounded-md font-semibold hover:text-white transition duration-300 ease-in-out'>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className='w-full text-center'>
                    {lData.map((item, index) => (
                        <li key={index} className='my-5 px-6'>
                            <Link to={item.route} className='font-semibold hover:text-white '>
                                <div className='flex items-center rounded-md hover:bg-[#17206C] transition duration-300 ease-in-out px-2 w-full justify-start gap-x-2'>
                                    <div>
                                        <img src={item.img} alt='nav-img' />
                                    </div>
                                    <div>
                                        {item.name}
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Navigations