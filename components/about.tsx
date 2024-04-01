import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
   <div className='  flex justify-center items-center mt-32'>
     <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-slate-100 '>
        <div className=' flex flex-col justify-start items-start gap-5 px-12'>
            <h1 className=' w-full text-center text-2xl md:text-4xl font-semibold'>Hello there</h1>
            <p className=' w-full text-xl '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis veniam exercitationem nulla dolorum velit earum assumenda facere maxime repellat, distinctio ullam natus laudantium ipsam cumque libero illo! Placeat, rerum!
            </p>
            <p className=' w-full text-xl '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis veniam exercitationem nulla dolorum velit earum assumenda facere maxime repellat, distinctio ullam natus laudantium ipsam cumque libero illo! Placeat, rerum!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis veniam exercitationem nulla dolorum velit earum assumenda facere maxime repellat, distinctio ullam natus laudantium ipsam cumque libero illo! Placeat, rerum!
            </p>
            <p className=' w-full text-xl '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis veniam exercitationem nulla dolorum velit earum assumenda facere maxime repellat, distinctio ullam natus laudantium ipsam cumque libero illo! Placeat, rerum!
            </p>
        </div>
        <div className=' flex justify-center items-center md:pe-12'>
            <Image src={"/bg.jpg"} alt="logo" width={1800} height={1800} className=' w-full h-full rounded-lg me-4 hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 hover:shadow-2xl hover:shadow-slate-600'/>
        </div>
    </div>
   </div>
  )
}

export default About