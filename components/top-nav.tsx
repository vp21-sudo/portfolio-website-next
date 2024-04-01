"use client"
import Image from 'next/image'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'

const TopNav = () => {
  const [toggleMenu, settoggleMenu] = useState(false)
  return (
    <>
      <nav className=' hidden fixed inset-0 w-full h-20 md:flex justify-between items-center z-50 bg-slate-900 px-4 shadow-md shadow-slate-400'>
        <Image src="/vp.png" alt="logo" width={80} height={80} className=' w-fit h-full p-2 rounded-xl me-4 hover:cursor-pointer' />
        <div className=' flex justify-center items-center '>
          <Link href="#"><h1 className=' text-3xl font-bold text-teal-600 mx-12 hover:text-teal-500 transition-colors ease-in-out duration-300'>Home</h1></Link>
          <Link href="#about"><h1 className=' text-3xl font-bold text-teal-600 mx-12 hover:text-teal-500 transition-colors ease-in-out duration-300'>About</h1></Link>
          <Link href="#projects"><h1 className=' text-3xl font-bold text-teal-600 mx-12 hover:text-teal-500 transition-colors ease-in-out duration-300'>Projects</h1></Link>
          <Link href="#Contact"><h1 className=' text-3xl font-bold text-teal-600 mx-12 hover:text-teal-500 transition-colors ease-in-out duration-300'>Contact</h1></Link>
        </div>
      </nav>
      <nav className=' md:hidden absolute inset-0 w-screen h-20 flex justify-between items-center bg-slate-900 px-4 shadow-sm shadow-slate-400'>
        <Image src={"/vp.png"} alt="logo" width={60} height={60} className=' rounded-xl me-4 hover:cursor-pointer' />
        <button className="md:hidden" onClick={() => settoggleMenu(!toggleMenu)}>
          {toggleMenu ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
      <div className=' md:hidden translate-x-96 absolute left-0 top-10 z-20  w-screen h-screen bg-slate-900 flex flex-col justify-center items-center  gap-10'>
        <Link href="#"><h1 className=' text-3xl font-bold text-teal-600 mx-12 hover:text-teal-500 transition-colors ease-in-out duration-300'>Home</h1></Link>
        <Link href="#about"><h1 className=' text-3xl font-bold text-teal-600 mx-12 hover:text-teal-500 transition-colors ease-in-out duration-300'>About</h1></Link>
        <Link href="#projects"><h1 className=' text-3xl font-bold text-teal-600 mx-12 hover:text-teal-500 transition-colors ease-in-out duration-300'>Projects</h1></Link>
        <Link href="#Contact"><h1 className=' text-3xl font-bold text-teal-600 mx-12 hover:text-teal-500 transition-colors ease-in-out duration-300'>Contact</h1></Link>
      </div>
    </>
  )
}

export default TopNav