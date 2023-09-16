import React, { useState } from 'react';
import logo from '../../assets/images/logoimg.png';
import searchicon from '../../assets/images/searchicon.png';

const FeedbackModal = ({ closeModal }) => {
    const [isModalOpen, setIsModalOpen] = useState(true);






    return (
        <>

            <div
                id="popup-modal"
                tabIndex="-1"
                className="bg-[gray] bg-opacity-50 fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full"
            >
                <div className='w-full h-full flex justify-center items-center my-20'>
                    <div className='w-[30%] h-[390px] bg-[white] rounded-lg p-10'>
                        <div className='w-full flex justify-center items-center h-full'>
                            <div className='flex flex-col gap-y-8'>
                                <div className='flex flex-col gap-y-4'>
                                    <p className='font-bold text-xl text-[#7D7D7D]'>Feedback</p>
                                    <div className='bg-[#F4F4F4] p-2'>
                                        <p className='text-[#797979] text-md'>Lorem ipsum dolor sit amet consectetur. Arcu orci est commodo tortor donec. Arcu morbi aliquet ornare blandit sit mus ornare imperdiet scelerisque. In ac condimentum lacus aliquet lorem mattis. Venenatis mi sagittis purus et auctor volutpat ultrices purus a.</p>
                                    </div>
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

export default FeedbackModal;
