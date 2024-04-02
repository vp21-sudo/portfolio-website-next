"use client"
import Image from 'next/image'
import Link from 'next/link'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'

const TopNav = () => {
  const [toggleMenu, settoggleMenu] = useState(false)
  return (
    <div className=' w-screen'>
      <nav className=' hidden fixed inset-0 w-screen h-20 md:flex justify-between items-center z-50 bg-slate-900 px-4 shadow-md shadow-slate-400'>
        <Image src="/vp.png" alt="logo" width={80} height={80} className=' w-fit h-full p-3 rounded-xl me-4 hover:cursor-pointer' />
        <div className=' flex justify-center items-center '>
          <Link href="#"><h1 className=' text-3xl font-bold text-teal-600 mx-4 px-8 py-3 hover:bg-slate-700 rounded-lg hover:text-teal-300 transition-colors ease-in-out duration-300'>Home</h1></Link>
          <Link href="#projects"><h1 className=' text-3xl font-bold text-teal-600 mx-4 px-8 py-3 hover:bg-slate-700 rounded-lg hover:text-teal-300 transition-colors ease-in-out duration-300'>Projects</h1></Link>
          <Link href="#Contact"><h1 className=' text-3xl font-bold text-teal-600 mx-4 px-8 py-3 hover:bg-slate-700 rounded-lg hover:text-teal-300 transition-colors ease-in-out duration-300'>Contact</h1></Link>
          <Link href="https://github.com/vp21-sudo" target='_blank'><h1 className=' text-3xl font-bold text-teal-600 mx-4 px-8 py-3 hover:bg-slate-700 rounded-lg hover:text-teal-300 transition-colors ease-in-out duration-300'>Github<ArrowOutwardIcon fontSize='small' /></h1></Link>
        </div>
      </nav>
      <nav className=' md:hidden fixed inset-0 w-screen h-20 z-30 flex justify-between items-center bg-slate-900 px-4 shadow-sm shadow-slate-400'>
        <Image src={"/vp.png"} alt="logo" width={60} height={60} className=' rounded-xl me-4 hover:cursor-pointer' />
        <button className="md:hidden" onClick={() => settoggleMenu(!toggleMenu)}>
          {toggleMenu ? <CloseIcon className=' text-slate-100' fontSize='large' /> : <MenuIcon className=' text-slate-100' fontSize='large' />}
        </button>
        <div className={' md:hidden fixed left-0 top-20 z-10  w-screen h-screen bg-slate-900 flex flex-col justify-start items-center  gap-5 transition-all ease-in-out duration-300'
          + (toggleMenu ? ' translate-x-0 ' : ' translate-x-full ')
        }>
          <Link onClick={e=>settoggleMenu(false)} href="#"><h1 className=' text-3xl font-bold text-teal-600 mx-4 px-8 py-3 hover:bg-slate-700 rounded-lg hover:text-teal-300 transition-colors ease-in-out duration-300'>Home</h1></Link>
          <Link onClick={e=>settoggleMenu(false)} href="#projects"><h1 className=' text-3xl font-bold text-teal-600 mx-4 px-8 py-3 hover:bg-slate-700 rounded-lg hover:text-teal-300 transition-colors ease-in-out duration-300'>Projects</h1></Link>
          <Link onClick={e=>settoggleMenu(false)} href="#Contact"><h1 className=' text-3xl font-bold text-teal-600 mx-4 px-8 py-3 hover:bg-slate-700 rounded-lg hover:text-teal-300 transition-colors ease-in-out duration-300'>Contact</h1></Link>
          <Link onClick={e=>settoggleMenu(false)} href="https://github.com/vp21-sudo" target='_blank'><h1 className=' text-3xl font-bold text-teal-600 mx-4 px-8 py-3 hover:bg-slate-700 rounded-lg hover:text-teal-300 transition-colors ease-in-out duration-300'>Github<ArrowOutwardIcon fontSize='small' /></h1></Link>
        </div>
      </nav>
    </div>
  )
}

export default TopNav