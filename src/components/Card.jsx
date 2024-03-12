import React from 'react'
import { GoArrowRight } from "react-icons/go";

function Card({ width, start, para, hover }) {
    return (
        <div className={`${width} bg-zinc-800 rounded-xl hover:${hover}    p-5 min-h-[29rem] flex flex-col justify-between`}>
            <div className='w-full'>
                <div className='w-full flex items-center justify-between'>
                    <h3 className=''>Get In Touch</h3>
                    <GoArrowRight />
                </div>
                <h1 className='text-3xl font-medium mt-5'>some heading</h1>
            </div>
            <div className='down w-full'>
                {
                    start && (
                        <>
                            <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a Project</h1>
                            <button className='rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-500'>Contact Us</button>
                        </>
                    )
                }
                {
                    para && (
                        <>
                            <p className=' text-sm text-zinc-500 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Card