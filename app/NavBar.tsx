import React from 'react'
import { FaBug } from "react-icons/fa";
import Link from 'next/link'
export default function NavBar() {
  return (
    <nav className='border border-gray-300 w-full h-[60px] flex gap-6 justify-start items-center p-4'>
       <Link href='/'><FaBug className="text-black" /></Link> 
        <h1 className='text-zinc-500 hover:text-zinc-800'><Link href='/'>Dashboard</Link></h1>
        <h1 className='text-zinc-500 hover:text-zinc-800'><Link href='/issues'>Issues</Link></h1>
    </nav>
  )
}
