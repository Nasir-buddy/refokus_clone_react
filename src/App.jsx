import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Strips from './components/Strips'

function App() {
  return (
    <div className='bg-zinc-900 h-screen w-screen text-white font-["satoshi"]'>
        <Navbar />
        <Work />
        <Strips />
    </div>
  )
}

export default App