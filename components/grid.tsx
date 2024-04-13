import React from 'react'
import Box from './box'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Grid = () => {
    return (
        <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 4}}
            className=' flex flex-col justify-center items-center w-full'
        >
            <div className=' py-20 bg-slate-800'>
                <h1 className=' text-slate-100 font-semibold text-3xl md:text-4xl text-left px-2 md:px-8 underline'>Tech Store:</h1>
                <div className=' w-full h-fit bg-slate-100 bg-transparent grid grid-cols-2 md:grid-cols-4 gap-2 mt-8 md:mt-1 px-2  md:gap-28 md:p-10'>
                    {
                        <>
                            <a href="https://tailwindcss.com" target='_blank'>
                                <Box>
                                    <Image src={"/tailwind-css.png"} alt="logo" width={300} height={300} className=' h-4/5 w-4/5 md:w-3/5 md:h-3/5 rounded-3xl bg-transparent' />
                                    <h1 className=' w-full text-slate-50 font-semibold text-xl md:text-3xl text-center'>Tailwind CSS</h1>
                                </Box>
                            </a>

                            <a href="https://nextjs.org" target='_blank'>
                                <Box>
                                    <Image src={"/nextjs.png"} alt="logo" width={300} height={300} className=' h-4/5 w-4/5 md:w-2/5 md:h-3/5 p-2 bg-slate-50 rounded-full' />
                                    <h1 className=' w-full text-slate-50 font-semibold text-xl md:text-3xl text-center'>Next JS</h1>
                                </Box>
                            </a>
                            <a href="https://vercel.com/" target='_blank'>
                                <Box>
                                    <Image src={"/vercel.png"} alt="logo" width={300} height={300} className=' h-4/5 w-4/5 md:w-2/5 md:h-3/5 p-2 bg-slate-50 rounded-full' />
                                    <h1 className=' w-full text-slate-50 font-semibold text-xl md:text-3xl text-center'>Vercel</h1>
                                </Box>
                            </a>
                            <a href="https://flutter.dev/" target='_blank'>
                                <Box>
                                    <Image src={"/flutter.png"} alt="logo" width={300} height={300} className=' h-4/5 w-4/5 md:w-2/5 md:h-3/5 rounded-3xl bg-transparent' />
                                    <h1 className=' w-full text-slate-50 font-semibold text-xl md:text-3xl text-center'>Flutter</h1>
                                </Box>
                            </a>
                            <a href="https://aws.amazon.com/" target='_blank'>
                                <Box>
                                    <Image src={"/aws.png"} alt="logo" width={300} height={300} className='h-3/5 w-3/5 md:w-2/5 md:h-3/5 p-2 bg-slate-50 rounded-xl' />
                                    <h1 className=' w-full text-slate-50 font-semibold text-xl md:text-3xl text-center'>AWS</h1>
                                </Box>
                            </a>
                            {/* <a href="https://react.dev/" target='_blank'>
                        <Box>
                            <Image src={"/javascript.png"} alt="logo" width={300} height={300} className=' w-2/5 h-3/5 p-5 rounded-xl bg-slate-950' />
                            <h1 className=' w-full text-slate-50 font-semibold text-xl md:text-3xl text-center'>JavaScript</h1>
                        </Box>
                    </a> */}
                            <a href="https://www.python.org" target='_blank'>
                                <Box>
                                    <Image src={"/python.png"} alt="logo" width={300} height={300} className=' h-4/5 w-4/5 md:w-2/5 md:h-3/5 rounded-3xl bg-transparent' />
                                    <h1 className=' w-full text-slate-50 font-semibold text-xl md:text-3xl text-center'>Python</h1>
                                </Box>
                            </a>
                            <a href="https://react.dev/" target='_blank'>
                                <Box>
                                    <Image src={"/react.png"} alt="logo" width={300} height={300} className=' h-4/5 w-4/5 md:w-2/5 md:h-3/5 rounded-3xl bg-transparent' />
                                    <h1 className=' w-full text-slate-50 font-semibold text-xl md:text-3xl text-center'>React & React Native</h1>
                                </Box>
                            </a>
                            <a href="https://nodejs.org/en" target='_blank'>
                                <Box>
                                    <Image src={"/nodejs.png"} alt="logo" width={300} height={300} className=' h-4/5 w-4/5 md:w-2/5 md:h-3/5 rounded-3xl bg-transparent' />
                                    <h1 className=' w-full text-slate-50 font-semibold text-xl md:text-3xl text-center'>Node JS</h1>
                                </Box>
                            </a>
                        </>
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default Grid