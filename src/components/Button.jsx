import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
function Button({title = "Get Started"}) {
  return (
    <div className='min-w-[7.5vw] bg-zinc-100 text-black rounded-full px-4 py-2 flex items-center justify-between '>
    <span className='text-sm font-medium'>{title}</span>
    <IoIosReturnRight />
    </div>
  )
}

export default Button 