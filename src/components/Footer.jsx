import React from 'react'
function Footer() {

    return (
        <div className='max-w-screen-xl mx-auto flex items-center gap-20'>
            <div className='w-[50%]'>
                <h1 className='text-[9rem] py-24 font-semibold'>Refokus.</h1>
            </div>
            <div className='flex flex-col '>
                <h1 className='text-xl mb-9'>Social</h1>
                {["social", "instagram", "twitter (x?)", "linkedin",].map((item, index) => (
                    <a key={index} className='text-zinc-500 mt-3' href="">{item}</a>
                ))}
            </div>
            <div className='flex flex-col '>
                <h1 className='text-xl mb-9'>Social</h1>
                {["social", "instagram", "twitter (x?)", "linkedin",].map((item, index) => (
                    <a key={index} className='text-zinc-500 mt-3' href="">{item}</a>
                ))}
            </div>
            <div className='max-w-[20%] mt-0 text-right '><p className='mr-16'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste accusantium nemo, ab nesciunt dolor aut.
            </p>
            
            </div>
        </div>
    )
}

export default Footer