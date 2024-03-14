import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';

function Products() {
    const products = [
        {
            name: "Arqitel",
            description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            case: false,
            video: "/video/Arqitel"
        },
        {
            name: "Cula",
            description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live: true,
            case: true
        },
        {
            name: "TTR",
            description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live: true,
            case: true
        },
        {
            name: "Maniv",
            description: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
            live: true,
            case: false
        },
        {
            name: "YIR 2022",
            description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
            live: true,
            case: true
        },
    ];

    const [position, setPosition] = useState(0);
    const mover = (value) => {
        setPosition(value * 23);
    }
    return (
        <div className='relative'>
            {products.map((item, index) => (
                <Product val={item} key={index} index={index} mover={mover} />
            ))}
            <div className='absolute w-full h-full top-0 pointer-events-none '>
                <motion.div
                    initial={{ y: position, x: "-50%" }}
                    animate={{ y: position + `rem` }}
                    className='window absolute w-[32rem] h-[23rem] bg-white left-[42.5%] overflow-hidden'>
                    <motion.div
                        animate={{ y: -position + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .8 }}
                        className='w-full h-full bg-sky-100 '>
                        <video autoPlay loop muted>
                            <source src="\videos\Arqitel.webm" />
                        </video>
                    </motion.div>
                    <motion.div
                        animate={{ y: -position + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .8 }}
                        className='w-full h-full bg-sky-200 '>
                        <video autoPlay loop muted>
                            <source src="\videos\jungle.webm" />
                        </video>
                    </motion.div>
                    <motion.div
                        animate={{ y: -position + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .8 }}
                        className='w-full h-full bg-sky-300 '>
                        <video autoPlay loop muted>
                            <source src="\videos\webflow-education-promo.mp4" />
                        </video>
                    </motion.div>
                    <motion.div
                        animate={{ y: -position + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .8 }}
                        className='w-full h-full bg-sky-400 '>
                        <video autoPlay loop muted>
                            <source src="\videos\Silvr.webm" />
                        </video>
                    </motion.div>
                    <motion.div
                        animate={{ y: -position + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .8 }}
                        className='w-full h-full bg-sky-500 '>
                        <video autoPlay loop muted>
                            <source src="\videos\yahoo.webm" />
                        </video>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Products