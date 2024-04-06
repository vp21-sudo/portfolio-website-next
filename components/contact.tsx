"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { handleContactMeForm } from '@/app/actions'
import { useFormStatus, useFormState } from 'react-dom'
import Loading from './loaders'
import Submit from './submit-btn'

const Contact = () => {
    const initialState = {
        message: '',
        error: false
    }
    const [state, formAction] = useFormState<any, FormData>(handleContactMeForm, initialState)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 2 }}
        >
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 w-full items-center py-20 bg-teal-600'>
                <div className=' w-full px-8 h-4/5 md:p-4 md:ms-12 rounded-xl'>
                    <Image src="/contact.jpg" alt="logo" width={400} height={400} className=' w-full h-full object-cover rounded-xl' />
                </div>
                <div className='  w-full px-8 rounded-xl text-slate-50 transition-all ease-in-out duration-200'>
                    {
                        state?.error ? <div className=' w-full text-center text-xl md:text-3xl font-semibold h-40 md:h-40 rounded-lg flex justify-center items-center bg-slate-700 text-red-200'>{state?.message}</div> :
                        !state?.error && state?.message?.length > 0 ?
                        <div className=' w-full text-center text-xl md:text-3xl font-semibold h-40 md:h-40 rounded-lg flex justify-center items-center bg-slate-700 text-blue-500'>{state?.message}</div>
                        :
                            <>
                                <h1 className=' w-full text-2xl text-center md:text-4xl font-semibold mb-2'>Contact Me:</h1>
                                <form action={formAction} >
                                    <div className=' w-full flex flex-col justify-center items-center'>
                                        <input type="text" placeholder='Name' required name='name' className=' w-full md:w-4/5 p-2 rounded-lg bg-slate-800 border-2 border-slate-50 text-slate-50 mb-4 text-lg md:text-2xl' />
                                        <input type="email" placeholder='Email' required name='email' className=' w-full md:w-4/5 p-2 rounded-lg bg-slate-800 border-2 border-slate-50 text-slate-50 mb-4 text-lg md:text-2xl' />
                                        <textarea placeholder='Message' rows={5} name='message' className=' resize-none w-full md:w-4/5 p-2 rounded-lg bg-slate-800 border-2 border-slate-50 text-slate-50 mb-4 text-lg md:text-2xl' />
                                        <Submit/>
                                    </div>
                                </form>
                            </>
                    }
                </div>
            </div >
        </motion.div>

    )
}

export default Contact