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
    <div className='sticky top-0 shadow-xl px-4 sm:px-8 lg:px-16 py-4 z-50 bg-white/95 backdrop-blur-sm'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo */}
        <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800 hover:text-indigo-600 transition-colors duration-300'>
          Clement K. Ndimuangu
        </h1>
        
        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-8 uppercase text-sm font-semibold'>
          {data.map((item)=>{
            return <SingleNavbar key={nanoid()} item={item}/>
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className='md:hidden text-2xl text-gray-800 hover:text-indigo-600 transition-colors duration-300 z-50'
          aria-label='Toggle menu'
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className='flex flex-col gap-6 uppercase text-sm font-semibold pt-20 px-8'>
          {data.map((item)=>{
            return (
              <div key={nanoid()} onClick={toggleMenu}>
                <SingleNavbar item={item}/>
              </div>
            )
          })}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className='md:hidden fixed inset-0 bg-black/50 z-40'
          onClick={toggleMenu}
        />
      )}
    </div>
  )
}
export default Navbar