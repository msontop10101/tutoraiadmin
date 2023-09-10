import React from 'react'
import whitecircle from '../assets/images/whitecircle.png'

const QuestionCard = () => {
  return (
    <>
        <div className='w-full flex'>
            <div className=''>
                <img src={whitecircle} alt='white circle'/>
            </div>
            <div className='bg-white mx-5 w-full rounded-md p-8'>
                <div className='flex flex-col gap-y-5 font-bold text-2xl'>
                    <div><p>English Level: </p></div>
                    <div><p>Questions: </p></div>
                    <div><p>Option: </p></div>
                    <div><p>Answer: </p></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default QuestionCard