import React from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
    const handleSubmit = () => {
        console.log('submitted!')
    }

    return (
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Fill this field'),
                password: Yup.string()
                    .min(8, 'Password must be at least 8 characters')
                    .required('Required'),
            })}
            onSubmit={handleSubmit}
        >
            {formik => (
                <Form className='w-full my-4 flex flex-col gap-y-6'>
                    <div>
                        <div className='pb-2'>
                            <label className='text-white font-semibold'>Email</label>
                        </div>
                        <Field name="email" type="text" className='py-3 w-full bg-white placeholder:text-[#333333] text-sm pl-5 rounded-xl'/>
                        {formik.touched.email && formik.errors.email && (
                            <div className='text-[red] text-sm'>{formik.errors.email}</div>
                        )}
                    </div>

                    <div>
                        <div className='pb-2'>
                            <label className='text-white font-semibold mb-5'>Password</label>
                        </div>
                        <Field name="password" type="password" className='py-3 w-full bg-white placeholder:text-black text-sm pl-5 rounded-xl'/>
                        {formik.touched.password && formik.errors.password && (
                            <div className='text-[red] text-sm'>{formik.errors.password}</div>
                        )}
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <button className='border-2 w-[204px] py-3 rounded-2xl border-white text-white'>Login</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm
