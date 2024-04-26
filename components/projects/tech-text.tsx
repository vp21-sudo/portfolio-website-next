import React from 'react'

interface Props {
    children: string
}

const TechText = ({children}: Props) => {
  return (
    <div className=' w-fit h-fit p-1 px-2 rounded capitalize text-slate-900 bg-slate-300 text-xs md:text-sm font-semibold'>
        {children}
    </div>
  )
}

export default TechText