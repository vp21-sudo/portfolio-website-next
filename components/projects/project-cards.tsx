import Image from 'next/image'
import React from 'react'
import TechText from './tech-text'
import Link from 'next/link'
import { animate, motion, useAnimation } from "framer-motion"
import NorthEast from '@mui/icons-material/NorthEast'

interface Props {
    name: string,
    imgUrl: string,
    description: string,
    webiste?: string,
    images?: string,
    github: string,
    techs?: Array<string>
}

const ProjectCard = ({ name, imgUrl, description, webiste, images, github, techs }: Props) => {
    const controls = useAnimation()
    const linkVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.1, duration: 0.3, ease: "backInOut" }
        }
    };
    const linkVariants2 = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.1, duration: 0.3, ease: "backInOut" }
        },
    };
    return (
        <div className=' w-full h-64 md:h-96  grid  grid-cols-4 grid-rows-4 gap-1 p-4 justify-center items-start border-2 border-slate-900 rounded-xl shadow-2xl bg-slate-200'>
            <h1 className=' row-span-1 col-span-2 flex justify-start items-center md:mt-4 text-xl capitalize md:text-4xl font-semibold'>{name}</h1>
            <motion.div className=' relative row-span-4 col-span-2 rounded-2xl w-full h-full group hover:cursor-pointer transition-all ease-in-out duration-300'
                initial="hidden"
                onHoverStart={() => { controls.start("visible") }}
                onTapStart={() => controls.start("visible")}
                onHoverEnd={() => { controls.start("hidden") }}
            >
                <div className=' absolute z-30 inset-0 rounded-3xl w-full h-full backdrop-blur-xl hidden group-hover:flex flex-col text-slate-50 justify-around items-center group-hover:scale-105 '>
                    <motion.a href={webiste || images}
                        target='_blank'
                        variants={linkVariants}
                        initial="hidden"
                        animate={controls}
                        className=' text-lg md:text-3xl text-blue-950 font-semibold border-2 p-2 rounded-2xl border-blue-900 '
                        whileHover={{ scale: 1.3 }}
                    >{webiste ? 'Website' : 'Images'}<NorthEast /></motion.a>
                    <motion.a href={github}
                        target='_blank'
                        variants={linkVariants2}
                        initial="hidden"
                        animate={controls}
                        className=' text-lg md:text-3xl text-blue-950 font-semibold border-2 p-2 rounded-2xl border-blue-900  '
                        whileHover={{ scale: 1.3 }}
                    >Github<NorthEast></NorthEast></motion.a>
                </div>
                <Image src={imgUrl} alt='Project Image' width={1200} height={1200} className='rounded-2xl z-20 transition-all ease-in-out duration-300 w-full h-full object-contain object-center' />
            </motion.div>
            <div className=' col-span-2 row-span-3 md:row-span-2 w-full h-full text-sm md:text-md font-medium overflow-scroll md:overflow-hidden'>
                <p>{description}</p>
            </div>
            <div className=' h-fit  col-span-3 md:col-span-2 md:w-2/3 row-span-3 md:row-span-1 flex flex-wrap gap-1'>
                {
                    techs && techs.map((tech, index) => <TechText key={index}>{tech}</TechText>)
                }
            </div>
        </div>
    )
}

export default ProjectCard