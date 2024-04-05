import React from 'react'
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1 , scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
    <div className=' flex justify-center items-center h-8 bg-slate-950 text-slate-100 '>
      <p className=' font-semibold text-md'>2024 | Created by VP.</p>
    </div>
    </motion.div>
  )
}

export default Footer