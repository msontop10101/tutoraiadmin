import React, { useState } from 'react';
import logo from '../../assets/images/logoimg.png';
import searchicon from '../../assets/images/searchicon.png';

const InvoiceModal = ({closeModal}) => {
    const [formData, setFormData] = useState({
        remail: '',
        issueddate: '',
        paymentmethod: '',
        name: '',
        email: '',
        lessons: '',
        price: '',
        totalprice: '',
        totalamount: '',
        note: '',
    });

    

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;

        // Update the form data based on the input type
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleInputClick = (event) => {
        event.stopPropagation();
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting (page refresh)

        // Here, you can handle the form submission, e.g., send data to a server
        console.log('Form data submitted:', formData);

        // Close the modal or perform any other action
        closeModal();
    };

    return (
        <>
            

            
                <div
                    id="popup-modal"
                    tabIndex="-1"
                    className="bg-[gray] bg-opacity-50 fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full"
                    
                >
                    <div className='w-full h-full flex justify-center items-center my-20'>
                        <div className='w-[40%] bg-[white] rounded-lg p-4'>
                            <div className='w-full'>
                                <div className='flex items-center font-bold justify-between py-[1px]' style={{ borderBottom: '1px solid black' }}>
                                    <div className='flex items-center'>
                                        <img src={logo} alt='logo' />
                                        <p>Tutor AI</p>
                                    </div>
                                    <div className='flex items-center gap-x-2'>
                                        <p className='text-xl'>Create New Invoice</p>
                                        <div onClick={closeModal}><p  className='cursor-pointer text-xs'>[close]</p></div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center py-2'>
                                    <div className='font-bold flex text-lg gap-x-2'>
                                        <p>Invoice</p>
                                        <p>#27544894579</p>
                                    </div>
                                    <div>
                                        <p className='text-[#A3A3A3] text-sm'>Copy link</p>
                                    </div>
                                </div>
                                <div>
                                    <form className='flex flex-col gap-y-6' onSubmit={handleSubmit}>
                                        <div className='flex flex-col'>
                                            <label className='text-lg'>Recipient Email</label>
                                            <input
                                                type="text"
                                                id="remail"
                                                name="remail"
                                                value={formData.remail}
                                                onChange={handleInputChange}
                                                onClick={handleInputClick}
                                                required
                                                className='rounded-lg border border-[#777777] h-[53px]'
                                            />
                                        </div>
                                        <div className='flex flex-row gap-x-2 items-center'>
                                            <label className='text-lg'>Issued on</label>
                                            <input
                                                type="text"
                                                id="issueddate"
                                                name="issueddate"
                                                value={formData.issueddate}
                                                onChange={handleInputChange}
                                                required
                                                className='rounded-lg border border-[#777777] h-[53px]'
                                            />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label>Payment Method:</label>
                                            <div className='w-[70%] px-5 flex items-center gap-x-2 bg-white rounded-lg border border-[#777777]'>
                                                <div>
                                                    <img src={searchicon} alt='search icon' />
                                                </div>
                                                <input
                                                    type="text"
                                                    id="paymentmethod"
                                                    name="paymentmethod"
                                                    value={formData.paymentmethod}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder='Paypal'
                                                    className='rounded-lg border border-[white] h-[53px] w-full'
                                                />
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center w-[80%] justify-between gap-x-4'>
                                            <label>Name: </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className='rounded-lg border border-[#777777] h-[53px] w-full'
                                            />
                                        </div>
                                        <div className='flex flex-row items-center w-[80%] justify-between gap-x-4'>
                                            <label>Email: </label>
                                            <input
                                                type="text"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className='rounded-lg border border-[#777777] h-[53px] w-full'
                                            />
                                        </div>
                                        <div className='flex justify-between w-full'>
                                            <div className='flex flex-col w-[40%]'>
                                                <label className='text-lg'>Lessons</label>
                                                <input
                                                    type="text"
                                                    id="lessons"
                                                    name="lessons"
                                                    value={formData.lessons}
                                                    onChange={handleInputChange}
                                                    required
                                                    className='rounded-lg border border-[#777777] h-[53px] w-full'
                                                />
                                            </div>
                                            <div className='flex flex-col w-[10%]'>
                                                <label className='text-lg'>Price</label>
                                                <input
                                                    type="text"
                                                    id="price"
                                                    name="price"
                                                    value={formData.price}
                                                    onChange={handleInputChange}
                                                    required
                                                    className='rounded-lg border border-[#777777] h-[53px] w-[full]'
                                                />
                                            </div>
                                            <div className='flex flex-col w-[20%]'>
                                                <label className='text-lg'>Total Price</label>
                                                <input
                                                    type="text"
                                                    id="totalprice"
                                                    name="totalprice"
                                                    value={formData.totalprice}
                                                    onChange={handleInputChange}
                                                    required
                                                    className='rounded-lg border border-[#777777] h-[53px] w-full'
                                                />
                                            </div>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div>
                                                <p className='font-bold text-lg'>+ Add</p>
                                            </div>
                                            <div className='flex flex-row gap-x-2'>
                                                <label className='font-bold text-lg'>Total Amount: </label>
                                                <input
                                                    type="text"
                                                    id="totalamount"
                                                    name="totalamount"
                                                    value={formData.totalamount}
                                                    onChange={handleInputChange}
                                                    required
                                                    className='rounded-lg border border-[#777777] h-[33px]'
                                                />
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <label className='text-[#ABABAB]'>Note</label>
                                            <textarea
                                                value={formData.note}
                                                onChange={handleInputChange}
                                                name="note"
                                                rows='5'
                                                className='rounded-lg border border-[#777777]'
                                            />
                                        </div>
                                        <div className='w-full flex justify-end'>
                                            <button className='font-bold text-white text-md bg-[#17206C] py-2 px-6 rounded-lg'>
                                                Preview
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default InvoiceModal;
