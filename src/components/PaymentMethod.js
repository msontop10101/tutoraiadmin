import React from 'react'
import paypal from '../assets/images/PayPal.png'
import stripe from '../assets/images/Stripe.png'
import flutterwave from '../assets/images/Flutterwave.png'

const PaymentMethod = () => {
    return (
        <>
            <div className='w-full p-5 flex flex-col gap-y-8'>
                <div className='flex justify-between w-[40%]'>
                    <div className='flex items-center gap-x-2'>
                        <img src={paypal} alt='paypal' />
                        <p className='font-semibold'>Paypal</p>
                    </div>
                    <div className='flex gap-x-5'>
                        <button className='font-bold text-white bg-[#1D7210] py-1 px-6 rounded-md'>Enable</button>
                        <button className='font-bold text-white bg-[#BA191A] bg-opacity-50 py-1 px-6 rounded-md'>Disable</button>
                    </div>
                </div>
                <div className='flex justify-between w-[40%]'>
                    <div className='flex items-center gap-x-2'>
                        <img src={stripe} alt='stripe' />
                        <p className='font-semibold'>Stripe</p>
                    </div>
                    <div className='flex gap-x-5'>
                        <button className='font-bold text-white bg-[#1D7210] py-1 px-6 rounded-md'>Enable</button>
                        <button className='font-bold text-white bg-[#BA191A] bg-opacity-50 py-1 px-6 rounded-md'>Disable</button>
                    </div>
                </div>
                <div className='flex justify-between w-[40%]'>
                    <div className='flex items-center gap-x-2'>
                        <img src={flutterwave} alt='flutterwave' />
                        <p className='font-semibold'>Flutterwave</p>
                    </div>
                    <div className='flex gap-x-5'>
                        <button className='font-bold text-white bg-[#1D7210] py-1 px-6 rounded-md'>Enable</button>
                        <button className='font-bold text-white bg-[#BA191A] bg-opacity-50 py-1 px-6 rounded-md'>Disable</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentMethod