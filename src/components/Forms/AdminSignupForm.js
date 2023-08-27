import React from "react";
import { Formik, Form, Field, } from "formik";

const AdminSignupForm = () => {
    return (
        <>
            <div className="bg-white p-14 my-2 mx-10">
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        phone: "",
                        password: "",
                        confirmPassword: "",
                        privilegeLevel: "view-only",
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className=" rounded-lg">
                            <div className="bg-[#E4E5EF] p-6">
                                <div className="mb-4">
                                    <div className='pb-2'>
                                        <label className=' font-bold text-lg'>Name</label>
                                    </div>
                                    <Field name="name" type="text" className='py-3 w-full bg-white placeholder:text-[#333333] text-sm pl-5 rounded-xl focus:outline-none' />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                        Email
                                    </label>
                                    <Field
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="w-full border border-gray-300 p-3 rounded-lg"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                                        Phone Number
                                    </label>
                                    <Field
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        className="w-full border border-gray-300 p-3 rounded-lg"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                                        Password
                                    </label>
                                    <Field
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="w-full border border-gray-300 p-3 rounded-lg"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
                                        Confirm Password
                                    </label>
                                    <Field
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        className="w-full border border-gray-300 p-3 rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="bg-white mt-2 flex justify-between">
                                <div className="mb-4 bg-[#E4E5EF] p-4 rounded-md">
                                    <label htmlFor="privilegeLevel" className="block text-gray-700 font-bold mb-2">
                                        Upload picture
                                    </label>
                                    <p className="bg-white p-2">+Add file</p>
                                </div>
                                <div className="mb-4 bg-[#E4E5EF] p-4 rounded-md">
                                    <label htmlFor="privilegeLevel" className="block text-gray-700 font-bold mb-2">
                                        <p className="bg-white p-2">Privilege Level</p>
                                    </label>
                                    <Field as="select" name="privilegeLevel" className="bg-[#E4E5EF]">
                                        <option value="">Select a privilege level</option>
                                        <option value="view-only">View Only</option>
                                    </Field>
                                </div>
                            </div>
                            <div className="w-full flex justify-end">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`bg-[#17206C] text-white px-8 py-2 rounded-md font-semibold ${isSubmitting && "opacity-50 cursor-not-allowed"
                                        }`}
                                >
                                    + Create
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default AdminSignupForm;
