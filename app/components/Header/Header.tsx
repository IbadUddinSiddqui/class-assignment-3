import React from 'react'

const Header = () => {
  return (
<header>
    <nav className=' inline-flex bg-black p-6 min-w-full top-0 '>
        <ul className='inline-flex '>
            <li className='bg-white  px-3 py-2 hover:text-blue-500 hover:shadow-md hover:shadow-blue-500 mx-3 text-black rounded-2xl '>Home</li>
            <li className='bg-white px-3  py-2 hover:text-blue-500 hover:shadow-md hover:shadow-blue-500 mx-3 text-black rounded-2xl '>About</li>
            <li className='bg-white  px-3 py-2 hover:text-blue-500 hover:shadow-md hover:shadow-blue-500 mx-3 text-black rounded-2xl '>Services</li>
            <li className='bg-white  px-3 py-2 hover:text-blue-500 hover:shadow-md hover:shadow-blue-500 mx-3 text-black rounded-2xl '>Contact</li>

        </ul>
    </nav>
</header>
  )  

}

export default Header