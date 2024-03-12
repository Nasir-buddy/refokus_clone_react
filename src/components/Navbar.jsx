import React from 'react'
import Button from './Button'

const Navbar = () => {
    return (
        <div className='max-w-screen-xl m-auto bg-zinc-900 py-6 px-5 text-white flex items-center justify-between border-b-[2px] border-zinc-600 '>
            <div className='nleft flex items-center'>
                <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                <div className='flex gap-10 ml-20'>
                    {["Home", "Work", "Culture", "", "News"].map((item, index) => {
                        return item.length === 0 ? <span className='h-7 w-[2px] bg-zinc-700'></span> :
                            <a  href='#' className='text-sm flex items-center gap-1'>
                                {(index === 1) &&
                                    <span style={{ boxShadow: "0 0 0.25em #00FF19" }}
                                        className='inline-block h-1 w-1 bg-green-500 rounded-full'>
                                    </span>}
                                {item}
                            </a>
                    })}
                </div>
            </div>
            <Button />
        </div>
    )
}

export default Navbar