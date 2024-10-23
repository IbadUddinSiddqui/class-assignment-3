import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black min-w-full inline-flex flex-grow text-white'>
        <div className='container mx-auto grid grid-cols-1 text-center  '>
            <div>
                <h3>About Us</h3>
                <p className='text-sm'> We are a dedicated Organization</p>
            </div>
        </div>

        <div>
            <h3 className='text-lg font-semibold mb-4 '> Links</h3>
            <ul className='inline-flex '>
                <li className='mb-2 p-2 mt-0 hover:text-blue-500 '><Link href='/' className='hover:underline'>Home</Link></li>
                <li className='mb-2 p-2 mt-0 hover:text-blue-500 '><Link href='/about' className='hover:underline'>About</Link></li>
                <li className='mb-2 p-2 mt-0 hover:text-blue-500 '><Link href='/services' className='hover:underline'>Services</Link></li>
                <li className='mb-2 p-2 mt-0 hover:text-blue-500 '><Link href='/contact' className='hover:underline'>Contact</Link></li>
            </ul>
        </div>
        
    </footer>
  )
}

export default Footer