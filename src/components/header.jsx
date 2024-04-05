import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
    return (
        <div>
            <div className='bg-slate-800 text-white flex justify-between h-20 align-middle items-center px-8 text-lg font-bold'>

                <h3 className='text-2xl'>Blog Me</h3>
                <nav className='flex gap-8'>
                    {/* <a href=''>Home</a> */}
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'text-yellow-200 underline underline-offset-4' : '')}>Home</NavLink>
                    <NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-yellow-200 underline underline-offset-4' : '')}>Blog</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-yellow-200 underline underline-offset-4' : '')}>About</NavLink>
                    {/* <a href=''>Blog</a>
                    <a href=''>Contact</a> */}
                </nav>
                <button className='bg-blue-300 text-black h-12 p-2 rounded-md cursor-pointer'>Log in</button>
            </div>
        </div>
    )
}

export default Header
