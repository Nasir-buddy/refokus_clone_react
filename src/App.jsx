import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Strips from './components/Strips'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'

function App() {
  return (
    <div className='bg-zinc-900 w-100% text-white font-["satoshi"] '>
        <Navbar />
        <Work />
        <Strips />
        <Products />
        <Marquees />
        <Cards />
    </div>
  )
}

export default App