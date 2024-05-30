import Image from 'next/image'
import { ChevronUp } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import TypingEffect from './typing-effect'

const About = () => {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
            className=" bg-[url('/earth.jpg')] bg-cover bg-no-repeat w-full h-screen object-center"
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1}}
            viewport={{ once:false }}
            style={{translateY: -(scrollYProgress.get() * 100)}}
        >
            <div className=' flex justify-center items-center h-full py-28 md:py-34 pt-20'>
                <div className=' relative grid grid-cols-1 md:grid-cols-2 gap-2 w-full text-slate-50 '>
                    <motion.div
                        initial={{ opacity: 0, x:50}}
                        whileInView={{ opacity: 1, x:0}}
                        viewport={{ once: true }}
                        transition={{ delay:0.8, duration: 1, ease:"easeIn"}}
                        className=' flex flex-col justify-center items-center w-full'
                        style={{translateY: -(scrollYProgress.get() * 4000)}}
                    >
                    <div className=' flex flex-col justify-center items-center gap-2 mx-12 md:mx-28 w-full px-8 md:px-16'>
                        <h1 className=' w-full md:w-4/5 text-left text-6xl md:text-7xl font-semibold'>Hello,</h1>
                        {/* <h2 className=' w-full text-left text-5xl md:text-8xl'>Welcome</h2> */}
                        <TypingEffect text='Welcome to my website.' delay={0.26} className=' text-4xl md:text-7xl h-32 md:h-20 w-full md:w-4/5 text-left transition-all ease-in-out duration-150' />
                    </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x:-50}}
                        whileInView={{ opacity: 1, x:0}}
                        viewport={{ once: true }}
                        transition={{ delay:0.2, duration: 0.6, ease:"easeIn"}}
                        className=' flex flex-col justify-center items-center w-full'
                        style={{translateY: -(scrollYProgress.get() * 4000)}}
                    >
                    <div className=' flex justify-center items-center p-4'>
                        <Image src={"/bg2.jpg"} alt="Image" width={800} height={800} className=' shadow-md shadow-slate-700 md:w-4/6 md:h-6/6 md:mt-20' />
                    </div>
                    </motion.div>
                </div>
                {/* <div className=' absolute w-full h-full inset-0 z-50 flex justify-center items-end'> */}
                <motion.div
                        initial={{ opacity: 0, y:120}}
                        whileInView={{ opacity: 1, y:-20}}
                        viewport={{ once: true }}
                        transition={{ delay:1.2, duration: 1, ease:"backInOut"}}
                        className=' absolute w-full h-full inset-0 z-30 flex justify-center items-end'
                        // style={{translateY: -(scrollYProgress.get() * 4000)}}
                    >
                <ChevronUp className=' text-5xl' size={68} color=' #ffffff' />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About