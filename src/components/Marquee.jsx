import { motion } from 'framer-motion'
import React from 'react'

function Marquee({ iamgeUrls, direction }) {
  return (
    <motion.div className='w-full flex overflow-hidden'>
      <motion.div
        initial={{ x: direction === 'left' ? '0' : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : '0' }}
        transition={{ ease: 'linear', duration: 15, repeat: Infinity }} 
        className='flex flex-shrink-0 gap-20 py-10 pr-40'>
        {iamgeUrls.map((item, index) => (
          <img key={index} src={item} alt="" className='flex-shrink-0 w-[6vw]' />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === 'left' ? '0' : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : '0' }}
        transition={{ ease: 'linear', duration: 15, repeat: Infinity }} 
        className='flex flex-shrink-0 gap-20 py-10 pr-40'>
        {iamgeUrls.map((item, index) => (
          <img key={index} src={item} alt="" className='flex-shrink-0 w-[6vw]' />
        ))}
      </motion.div>

    </motion.div>
  )
}

export default Marquee