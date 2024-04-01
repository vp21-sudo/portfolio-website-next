import React from 'react'
import Box from './box'
import Image from 'next/image'

const Grid = () => {
    return (
        <div className=' w-full h-fit bg-slate-100 bg-transparent mt-12 grid grid-cols-1 md:grid-cols-4 gap-10 p-10'>
            {
                <>
                    <a href="https://tailwindcss.com" target='_blank'>
                        <Box>
                            <Image src={"/tailwind-css.png"} alt="logo" width={300} height={300} className=' w-3/5 h-3/5 rounded-3xl bg-transparent' />
                            <h1 className=' w-full text-slate-50 font-semibold text-xl md:text-3xl text-center'>Tailwind CSS</h1>
                        </Box>
                    </a>
                    <a href="https://nextjs.org" target='_blank'>
                        <Box>
                            <Image src={"/nextjs.png"} alt="logo" width={300} height={300} className=' w-2/5 h-3/5 p-5 rounded-3xl bg-slate-50' />
                            <h1 className=' w-full text-slate-50 font-semibold text-xl md:text-3xl text-center'>Next JS</h1>
                        </Box>
                    </a>
                    <a href="https://vercel.com/" target='_blank'>
                        <Box>
                            <Image src={"/vercel.png"} alt="logo" width={300} height={300} className=' w-2/5 h-3/5 p-5 rounded-full bg-slate-50' />
                            <h1 className=' w-full text-slate-50 font-semibold text-xl md:text-3xl text-center'>Vercel</h1>
                        </Box>
                    </a>
                    <a href="https://flutter.dev/" target='_blank'>
                        <Box>
                            <Image src={"/flutter.png"} alt="logo" width={300} height={300} className=' w-2/5 h-3/5 p-5 rounded-xl bg-slate-950' />
                            <h1 className=' w-full text-slate-50 font-semibold text-xl md:text-3xl text-center'>Flutter</h1>
                        </Box>
                    </a>
                    <a href="https://aws.amazon.com/" target='_blank'>
                        <Box>
                            <Image src={"/aws.png"} alt="logo" width={300} height={300} className=' w-2/5 h-3/5 p-5 rounded-xl bg-slate-50' />
                            <h1 className=' w-full text-slate-50 font-semibold text-xl md:text-3xl text-center'>AWS</h1>
                        </Box>
                    </a>
                    <a href="https://react.dev/" target='_blank'>
                        <Box>
                            <Image src={"/javascript.png"} alt="logo" width={300} height={300} className=' w-2/5 h-3/5 p-5 rounded-xl bg-slate-950' />
                            <h1 className=' w-full text-slate-50 font-semibold text-xl md:text-3xl text-center'>JavaScript</h1>
                        </Box>
                    </a>
                    <a href="https://www.python.org" target='_blank'>
                        <Box>
                            <Image src={"/python.png"} alt="logo" width={300} height={300} className=' w-2/5 h-3/5 p-5 rounded-xl bg-slate-950' />
                            <h1 className=' w-full text-slate-50 font-semibold text-xl md:text-3xl text-center'>Python</h1>
                        </Box>
                    </a>
                    <a href="https://react.dev/" target='_blank'>
                        <Box>
                            <Image src={"/react.png"} alt="logo" width={300} height={300} className=' w-2/5 h-3/5 p-5 rounded-xl bg-slate-950' />
                            <h1 className=' w-full text-slate-50 font-semibold text-xl md:text-3xl text-center'>React & React Native</h1>
                        </Box>
                    </a>
                    <a href="https://nodejs.org/en" target='_blank'>
                        <Box>
                            <Image src={"/nodejs.png"} alt="logo" width={300} height={300} className=' w-2/5 h-3/5 p-5 rounded-xl bg-slate-950' />
                            <h1 className=' w-full text-slate-50 font-semibold text-xl md:text-3xl text-center'>Node JS</h1>
                        </Box>
                    </a>
                </>
            }
        </div>
    )
}

export default Grid