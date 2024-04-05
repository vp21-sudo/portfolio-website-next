import Image from 'next/image'
import React from 'react'

interface Props{
    children: React.ReactNode
}

const Box = ({children}: Props) => {
  return (
    <div className=' w-full h-48 md:h-60 bg-slate-950 border-2 border-slate-50 p-2 flex justify-center items-center rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-slate-600 transition-all ease-in-out duration-100 hover:cursor-pointer'>
        <div className=' h-full w-full flex flex-col gap-5 justify-center items-center'>
            {children}
        </div>
    </div>
  )
}

export default Box