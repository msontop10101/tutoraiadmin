import React, { useState } from 'react';
import logo from '../../assets/images/logoimg.png';
import searchicon from '../../assets/images/searchicon.png';

const SuccessModal = ({closeModal}) => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    

    



    return (
        <>
            
                <div
                    id="popup-modal"
                    tabIndex="-1"
                    className="bg-[gray] bg-opacity-50 fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full"
                >
                    <div className='w-full h-full flex justify-center items-center my-20'>
                        <div className='w-[30%] h-[204px] bg-[white] rounded-lg p-4'>
                            <div className='w-full flex justify-center items-center h-full'>
                                <div className='flex flex-col gap-y-2'>
                                    <div className='text-center flex flex-col gap-y-2'>
                                        <p className='font-bold text-lg'>SUCCESSFUL</p>
                                        <p className='text-[#797979] text-sm'>You have successfully created a user</p>
                                    </div>
                                    <div className='w-full flex justify-center'>
                                        <button
                                            onClick={closeModal}
                                            className={`bg-[#17206C] text-white px-8 py-[1px] rounded-full font-semibold`}
                                        >
                                            OK
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default SuccessModal;
