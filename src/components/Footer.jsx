import React from 'react'
function Footer() {

    return (
        <div className='max-w-screen-xl mx-auto flex items-center gap-20'>
            {/* <div className='w-[50%] '>
                <h1 className='text-[9rem] py-24 font-semibold'>Refokus.</h1>
            </div> */}
            <div className="w-[50%] hover:p-4 transition-all duration-500 select-none">
                <p className=" group relative w-max">
                    <span className='text-[9rem] font-semibold '>Refokus.</span>
                    <span className="mb-10 absolute -bottom-1 left-0 w-0 transition-all duration-500  h-1 bg-indigo-600 group-hover:w-full"></span>
                </p>
                </div>
                <div className='flex flex-col mb-10'>
                    <h1 className='text-xl mb-9 '>Social</h1>
                    {["social", "instagram", "twitter (x?)", "linkedin",].map((item, index) => (
                        <a key={index} className='text-zinc-500 mt-3' href="">{item}</a>
                    ))}
                </div>
                <div className='flex flex-col mb-10'>
                    <h1 className='text-xl mb-9 '>Social</h1>
                    {["social", "instagram", "twitter (x?)", "linkedin",].map((item, index) => (
                        <a key={index} className='text-zinc-500 mt-3' href="">{item}</a>
                    ))}
                </div>
                <div className='max-w-[20%] mt-0 text-right '><p className='mr-16'>
                We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.
                </p>
                </div>
            </div>
            )
}

            export default Footer