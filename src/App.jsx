import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Strips from './components/Strips'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='bg-zinc-900 w-100% text-white font-semibold '>
        <Navbar />
        <Work />
        <Strips />
        <Products />
        <Marquees />
        <Cards />
        <Footer />
    </div>
  )
}

export default App