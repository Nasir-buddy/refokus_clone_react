import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Strips from './components/Strips'
import Products from './components/Products'
import Marquees from './components/Marquees'

function App() {
  return (
    <div className='bg-zinc-900 w-screen text-white font-["satoshi"] '>
        <Navbar />
        <Work />
        <Strips />
        <Products />
        <Marquees />
    </div>
  )
}

export default App