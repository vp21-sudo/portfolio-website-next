import React from 'react'
import { motion } from 'framer-motion'


const AboutMe = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{delay:0.5, duration: 0.3 }}
        >
            <div className=' py-20 text-slate-50 flex flex-col justify-center items-center w-full h-full bg-teal-600' id='about'>
                <h1 className=' text-4xl md:text-5xl font-semibold my-8'>About me</h1>
                <div className=' w-11/12 md:w-2/3 text-lg  md:text-3xl flex flex-col justify-center items-center gap-4'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay:0.3, duration: 0.8 }}
                    >
                        <p className=' w-full text-left '>
                            I&apos;m Vishwa Prasad, welcome to my portfolio.I&apos;m driven by the endless possibilities of software engineering, my passion lies in crafting applications that solves real-world problems and designing architectures that stand the test of time.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay:0.5, duration: 0.8 }}
                    >
                    <p className=' w-full '>
                        When I&apos;m not coding, you can find me tinkering with new tech, exploring the latest design patterns, or sipping a cup of coffee. Weather it&apos;s a cup of coffee or a full-stack web application I prefer to make it from scratch as much as possible. Don&apos;t get me wrong I know that it&apos;s not a great idea to build from scratch everytime, but it&apos;s something I&apos;ve always prefered to do as it gives a unique touch to my work. Using the latest tools and technologies like tailwind CSS, Next JS makes it easy as I can build reusable custom components fast and efficiently.
                    </p>
                    
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay:0.7, duration: 0.8 }}
                    >
                    <p className=' w-full '>
                        This site is not completed yet. I&apos;m working on it, consistently adding new features everyday and improving it. So if you have any suggestions or ideas, please don&apos;t hesitate to reach out and visit regularly to see what&apos;s new.
                    </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay:1, duration: 1 }}
                    >
                    <p className=' w-full '>
                        I am always open to discuss new projects, creative ideas or opportunities to be part of your visions. Let&apos;s connect and create something together.
                    </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutMe