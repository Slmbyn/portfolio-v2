import React from 'react'
import Link from "next/link"

function Navbar() {
  return (
    <nav>
        <div className='flex flex-wrap item-center justify-between mx-auto p-8'>
            <Link href={"/"} className='text-5xl text-white font-semibold'>LOGO</Link>
            <div className='menu'></div>
        </div>
    </nav>
  )
}

export default Navbar