import React from 'react'

function Work() {
    var image = [
        { isActive: true, top: "50%", left: "50%", url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png" },
        { isActive: false, top: "53%", left: "47%", url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png" },
        { isActive: false, top: "47%", left: "54%", url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png" },
        { isActive: false, top: "52%", left: "52%", url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png" },
        { isActive: false, top: "48%", left: "57%", url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png" },
        { isActive: true, top: "55%", left: "52%", url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png" },
    ]
    return (
        <div className='w-full'>
            <div className='relative max-w-screen-xl mx-auto text-center mt-10'>
                <h1 className='text-[30vw] leading-none font-medium tracking-wide select-none'>work</h1>
                <div className='absolute top-0 h-full w-full'>
                    {image.map((item, index) => (
                        item.isActive && (
                            <img key={index} className='absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]'
                                src={item.url}
                                style={{ top: item.top, left: item.left }}
                                alt="" />
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work