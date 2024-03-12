import React from 'react'

function Marquee({iamgeUrls}) {
  return (
    <div className='w-full flex items-center gap-20 py-7 whitespace-nowrap overflow-hidden'>
        {iamgeUrls.map((item, index)=>(
            <img src={item} alt="" />
        ))}
        {iamgeUrls.map((item, index)=>(
            <img src={item} alt="" />
        ))}
    </div>
  )
}

export default Marquee