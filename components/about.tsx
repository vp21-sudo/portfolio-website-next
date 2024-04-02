import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
   <div className='  flex justify-center items-center mt-32' id='about'>
     <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-slate-100 '>
        <div className=' flex flex-col justify-start items-start gap-2 px-2 md:px-8'>
            <h1 className=' w-full text-left text-2xl md:text-4xl font-semibold'>Hello,</h1>
            <p className=' w-full text-xl '>
            I&apos;m Vishwa Prasad, welcome to my portfolio.I&apos;m driven by the endless possibilities of software engineering, my passion lies in crafting applications that solves real-world problems and designing architectures that stand the test of time.
            </p>
            <p className=' w-full text-xl '>
            When I&apos;m not coding, you can find me tinkering with new tech, exploring the latest design patterns, or sipping a cup of coffee. Weather it&apos;s a cup of coffee or a full-stack web application I prefer to make it from scratch as much as possible. Don&apos;t get me wrong I know that it&apos;s not a great idea to build from scratch everytime, but it&apos;s something I&apos;ve always prefered to do as it gives a unique touch to my work. Using the latest tools and technologies like tailwind CSS, Next JS makes it easy as I can build reusable custom components fast and efficiently.
            </p>
            <p className=' w-full text-xl '>
                This site is not completed yet. I&apos;m working on it, consistently adding new features everyday and improving it. So if you have any suggestions or ideas, please don&apos;t hesitate to reach out and visit regularly to see what&apos;s new.
            </p>
            <p className=' w-full text-xl '>
                I am always open to discuss new projects, creative ideas or opportunities to be part of your visions. Let&apos;s connect and create something together.
            </p>
        </div>
        <div className=' flex justify-center items-center md:pe-12'>
            <Image src={"/bg.jpg"} alt="logo" width={1800} height={1800} className=' w-full h-full p-2 rounded-lg md:me-4'/>
        </div>
    </div>
   </div>
  )
}

export default About