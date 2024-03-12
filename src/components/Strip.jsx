import React from 'react'

function Strip({val}) {
  return (
    <div className='h-12 w-[16.66%] border-b-[1.3px] border-t-[1.3px] border-r-[1.3px] border-zinc-500 flex items-center justify-between px-10 py-3'>
        <img src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Strip