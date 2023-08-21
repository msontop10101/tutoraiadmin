import React from 'react'
import logo from '../../src/assets/images/tutorailogo.svg'
import LoginForm from '../components/Forms/LoginForm'

const Login = () => {
    return (
        <>
            <div className='h-[100vh] flex items-center justify-center'>
                <div className='w-[70%] h-[80%] bg-[white] rounded-xl'>
                    <div className='w-full h-full flex rounded-xl'>
                        <div className='w-1/2 h-full'>
                            <div className='h-full flex justify-center items-center'>
                                <img src={logo} alt='logo' className='h-[70%]' />
                            </div>
                        </div>
                        <div className='w-1/2 h-full bg-gradient-to-br from-[#5119DC] to-[#562A3A] rounded-r-xl'>
                            <div className='flex items-center justify-center w-full h-full'>
                                <div className='h-[60%] w-[90%] flex justify-center items-center'>
                                    <div className='w-full h-full'>
                                        <div><p className='text-white text-3xl font-bold text-center uppercase'>Welcome</p></div>
                                        <div>
                                            <LoginForm/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login