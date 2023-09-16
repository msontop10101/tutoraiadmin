import React from 'react'

const ExportDropdown = ({closeDropdown}) => {
    return (
        <>
            <div className=' flex justify-center items-center bg-[white] rounded-lg w-[116px] h-[130px] text-lg '>
                <div>
                    <p className='p-2 cursor-pointer' onClick={closeDropdown}>as PDF</p>
                    <p className='p-2 cursor-pointer' onClick={closeDropdown}>as Excel</p>
                </div>
            </div>
        </>
    )
}

export default ExportDropdown