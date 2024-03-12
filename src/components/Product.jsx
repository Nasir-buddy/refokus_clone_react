import React from 'react'
import Button from './Button'

function Product({val}) {
  return (
    <div className='w-full py-20 text-white '>
        <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className='text-6xl capitalize font-regular'>{val.name}</h1>
            <div className='w-1/3'>
                <p className='mb-10 text-[1.1rem]'>{val.description}</p>
                <div className='flex items-center gap-10'>
                {val.live && <Button />}
                {val.case && <Button title={'case study'}/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product