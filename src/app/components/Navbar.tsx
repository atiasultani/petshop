import React from 'react'
import Link from 'next/link'


export const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-gray-800 text-white px-20 py-4'>
      {/*logo and navebar*/}
      <h1>Our Pet</h1>
      <div className='flex gap-20'>
        <Link href="/about" >About</Link>
        <Link href="/home">Home</Link>
        <Link href="/contact-us">Contact Us</Link>
      </div>
      
    </div>
  )
}
