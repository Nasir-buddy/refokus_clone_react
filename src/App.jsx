import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Strips from './components/Strips'
import Products from './components/Products'

function App() {
  return (
    <div className='bg-zinc-900 w-screen text-white font-["satoshi"]'>
        <Navbar />
        <Work />
        <Strips />
        <Products />
    </div>
  )
}

export default App