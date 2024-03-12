import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
function Button() {
  return (
    <div className='min-w-40 bg-zinc-100 text-black rounded-full px-4 py-2 flex items-center justify-between '>
    <span className='text-sm font-medium'>Get Started</span>
    <IoIosReturnRight />
    </div>
  )
}

export default Button 