"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import CircularProgressBar from '@/components/circular-progress';
import Image from 'next/image';
const Page = () => {
  const [scroll, setScroll] = useState(0);
  const { scrollYProgress } = useScroll()
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log(latest)
    setScroll(latest)
  });
  return (
    <div className=' relative md:w-screen grid grid-flow-row md:grid-flow-col grid-cols-1 grid-row-3 md:grid-cols-2 md:grid-rows-2 gap-5  pt-20 p-4'>
      <div className=' sticky top-20 flex flex-col gap-5'>
        <motion.div
          className=' z-50 absolute inset-0 md:static h-fit bg-red-400 flex justify-center p-8 items-center border-4 border-black'>
          <CircularProgressBar percentage={scrollYProgress.get() * 100} />
        </motion.div>
        <motion.div className=' flex mt-36 h-fit md:mt-0 justify-center p-8 items-center border-4 border-black'>
          <div className=' w-full h-full z-10 grid gap-2 grid-cols-1 md:grid-cols-2'>
            <Image src={"/fancy.jpg"} alt='project image' width={1200} height={1200} className=' w-full h-full object-cover object-center rounded-2xl' />
            <Image src={"/fancy.jpg"} alt='project image' width={1200} height={1200} className=' w-full h-full object-cover object-center rounded-2xl' />
          </div>
        </motion.div>
        {scrollYProgress.get() >= 1 && <motion.button>
          Next Project
        </motion.button>
        }
      </div>
      <div className=' relative flex justify-center pt-40 bg-slate-700 z-0 p-8 text-2xl items-start border-4 border-black row-span-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus rerum voluptates saepe ex ab eaque natus exercitationem, eius quos itaque vero placeat maxime temporibus blanditiis aliquid dolores, similique esse vel? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima tenetur magnam ab ipsa? Minima impedit cumque consectetur ex placeat quos exercitationem reiciendis ducimus, velit, voluptate necessitatibus ipsam repellendus numquam. Pariatur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, autem provident illum sunt consequatur nihil sapiente ipsum facere, inventore, rerum rem nobis? Dolor itaque vel sapiente voluptas, repellendus nostrum ipsa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptatem! Repellendus nobis aspernatur minus quisquam, temporibus voluptatum saepe recusandae quaerat, similique eos molestiae beatae nemo accusamus qui laborum corporis? Dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem natus cumque sapiente adipisci eaque autem eius, reiciendis, dolores recusandae consequatur fugiat maiores doloremque, odio modi quasi consequuntur provident reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur officiis natus incidunt nihil molestias eos obcaecati eum voluptatum harum eius, inventore facere non, cupiditate, in ad aspernatur est? Ducimus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quia expedita ea repellat laborum impedit placeat accusantium fuga consequatur possimus dolor esse, cumque commodi debitis nemo officia porro, reiciendis quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum molestias culpa facere explicabo id earum pariatur sapiente, quam dolores architecto animi dolor repudiandae quasi nulla consequuntur voluptatum tenetur numquam ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure eveniet aperiam adipisci reprehenderit ratione tempora id, minima in quas consequuntur magni sit temporibus. Pariatur amet neque porro molestiae mollitia officiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem deserunt eum iste qui corrupti. Nobis quo repudiandae quae. Nihil ut, sequi quod quibusdam aut iure eius deleniti praesentium omnis debitis.</div>
    </div>
  )
}

export default Page