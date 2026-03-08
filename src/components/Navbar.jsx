import {data} from '../data/navbarData'
import SingleNavbar from './SingleNavbar'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='sticky top-0 z-50 bg-dark-100/95 backdrop-blur-xl border-b border-gold-400/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-5'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <a href="/" className='group'>
            <h1 className='font-serif text-xl sm:text-2xl lg:text-3xl text-champagne-100 hover:text-gold-400 transition-colors duration-500'>
              C<span className='text-gold-400'>.</span> Ndimuangu
            </h1>
          </a>
          
          {/* Desktop Navigation */}
          <nav className='hidden md:flex gap-10 uppercase text-xs tracking-[0.2em] font-medium'>
            {data.map((item)=>{
              return <SingleNavbar key={nanoid()} item={item}/>
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className='md:hidden w-12 h-12 flex items-center justify-center text-xl text-champagne-300 hover:text-gold-400 transition-colors duration-300 z-50 glass-card'
            aria-label='Toggle menu'
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed top-0 right-0 h-screen w-72 bg-dark-100/98 backdrop-blur-xl border-l border-gold-400/10 shadow-elegant transform transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className='flex flex-col gap-2 uppercase text-xs tracking-[0.2em] font-medium pt-24 px-8'>
          {data.map((item)=>{
            return (
              <div key={nanoid()} onClick={toggleMenu}>
                <SingleNavbar item={item}/>
              </div>
            )
          })}
        </nav>
        
        {/* Mobile footer info */}
        <div className='absolute bottom-8 left-8 right-8'>
          <div className='divider-gold mb-6'></div>
          <p className='text-champagne-500 text-xs'>Software Engineer</p>
          <p className='text-gold-400 text-sm font-medium mt-1'>Dallas, TX</p>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className='md:hidden fixed inset-0 bg-dark-500/80 backdrop-blur-sm z-40'
          onClick={toggleMenu}
        />
      )}
    </div>
  )
}
export default Navbar