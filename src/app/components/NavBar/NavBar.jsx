'use client'

import Link from 'next/link'
import React from 'react'
import './NavBar.css'

const NavBar = () => {

    const handleMenuToggle=()=>{

        console.log('Menu toggle clicked');
        const menu = document.getElementById('menu');

            if (menu.classList.contains('changeOff')) {
                    menu.classList.remove('changeOff');
                    menu.classList.add('change');
                } else {
                    menu.classList.remove('change');
                    menu.classList.add('changeOff');
                }


 
    }

  return (
    <>
        <nav className='rounded-b-2xl  w-full py-6 px-6 md:px-16 fixed flex justify-between items-center glassNav z-30'>
            <span>
                <h1 className='text-2xl font-bold'>OsvaldoSantillan</h1>
            </span>

            <ul className='hidden gap-4 text-lg font-semibold text-gray-700 xl:flex'>
                <li className='hover:scale-110 transition-transform duration-500 ease-in-out'>
                    <Link href="/home" className=' rounded-full py-3 px-8 transition-colors duration-500 ease-in-out   hover:bg-gray-200'>Home</Link>
                </li>
                <li className='hover:scale-110 transition-transform duration-500 ease-in-out'>
                    <Link href="/about" className='rounded-full py-3 px-8 transition-colors duration-500 ease-in-out   hover:bg-gray-200'>About</Link>
                </li>
                <li className='hover:scale-110 transition-transform duration-500 ease-in-out'>
                    <Link href="/services" className='rounded-full py-3 px-8 transition-colors duration-500 ease-in-out   hover:bg-gray-200'>Services</Link>
                </li>
                <li className='hover:scale-110 transition-transform duration-500 ease-in-out'>
                    <Link href="/portfolio" className='rounded-full py-3 px-8 transition-colors duration-500 ease-in-out   hover:bg-gray-200'>Portfolio</Link>
                </li>
                <li className='hover:scale-110 transition-transform duration-500 ease-in-out'>
                    <Link href="/blog" className='rounded-full py-3 px-8 transition-colors duration-500 ease-in-out   hover:bg-gray-200 scale'>Blog</Link>
                </li>
                <li className='hover:scale-110 transition-transform duration-500 ease-in-out'>
                    <Link href="/contact" className='transform bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-full py-3 px-8 transition-all duration-500 ease-in-out   hover:scale-110'>Contact</Link>
                </li>
            </ul>
            <div className='xl:hidden relative' onClick={handleMenuToggle}>
                <button className='text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                   
                </button>
                <div id='menu' className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 changeOff' >
                    <ul className='flex flex-col gap-2 p-4'>
                        <li>
                            <Link href="#about" className='block px-4 py-2 text-gray-700 hover:bg-gray-200'>Home</Link>
                        </li>
                        <li>
                            <Link href="#projects" className='block px-4 py-2 text-gray-700 hover:bg-gray-200'>About</Link>
                        </li>
                        <li>
                            <Link href="#skills" className='block px-4 py-2 text-gray-700 hover:bg-gray-200'>Services</Link>
                        </li>
                        <li>
                            <Link href="#contact" className='block px-4 py-2 text-gray-700 hover:bg-gray-200'>Portfolio</Link>
                        </li>
                        <li>
                            <Link href="#contact" className='block px-4 py-2 text-gray-700 hover:bg-gray-200'>Blog</Link>
                        </li>
                        <li>
                            <Link href="#contact" className='bg-gray-200 block px-4 py-2 rounded-full hover:bg-gray-300'>Contact</Link>
                        </li>
                    </ul>
                </div>    
            </div>
        </nav>
    </>
  )
}

export default NavBar