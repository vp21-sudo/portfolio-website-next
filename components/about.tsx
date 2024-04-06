import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import TypingEffect from './typing-effect'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ delay:0.2}}
        >
            <div className='  flex justify-center items-center md:mt-8 bg-slate-800 py-28 md:py-16 pt-20'>
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-slate-100 '>
                    <motion.div
                        initial={{ opacity: 0, x:-100, y:-500, scale:12}}
                        whileInView={{ opacity: 1, x:0, y:0, scale:1}}
                        viewport={{ once: true }}
                        transition={{ delay:1, duration: 1.2, }}
                        className=' flex flex-col justify-center items-center w-full'
                    >
                    <div className=' flex flex-col justify-center items-center gap-2 mx-12 md:mx-28 w-full px-8 md:px-16'>
                        <h1 className=' w-full md:w-4/5 text-left text-6xl md:text-7xl font-semibold'>Hello,</h1>
                        {/* <h2 className=' w-full text-left text-5xl md:text-8xl'>Welcome</h2> */}
                        <TypingEffect text='Welcome to my website.' delay={0.25} className=' text-4xl md:text-7xl h-32 md:h-20 w-full md:w-4/5 text-left transition-all ease-in-out duration-150' />
                    </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x:50}}
                        whileInView={{ opacity: 1, x:-0}}
                        viewport={{ once: true }}
                        transition={{ delay:1, duration: 0.8, }}
                        className=' flex flex-col justify-center items-center w-full'
                    >
                    <div className=' flex justify-center items-center'>
                        <Image src={"/bg.jpg"} alt="Image" width={800} height={800} className=' shadow-2xl shadow-slate-700 md:w-4/5 md:h-4/5 md:mt-20 rounded-3xl p-2' />
                    </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default About