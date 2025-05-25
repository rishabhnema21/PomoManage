import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#features", label: "Features" },
        { href: "#contact", label: "Contact" },
    ]

    return (
        <header className='sticky top-0 left-0 md:backdrop-blur-xl z-99 md:z-99 text-white py-5 px-8'>
            <nav className='flex justify-between items-center'>
                <div id="logo" className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-blue-400">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 3h12M6 21h12M8 3v2.586a2 2 0 0 0 .586 1.414L12 10l3.414-3.414A2 2 0 0 0 16 5.586V3M8 21v-2.586a2 2 0 0 1 .586-1.414L12 14l3.414 3.414A2 2 0 0 1 16 18.414V21" />
                    </svg>
                    <a className='text-xl z-40 font-bold tracking-tighter' href="#home">
                        pomo<span className='bg-gradient-to-t from-sky-500 to-indigo-500 bg-clip-text text-transparent'>Manage</span>
                    </a>
                </div>

                {/* Desktop Navbar Menu */}
                <ul className='hidden md:flex space-x-10 items-center'>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a className='relative  font-semibold group hover:text-blue-400 ease-in duration-200' href={link.href}>{link.label} <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span> </a>

                        </li>
                    ))}
                </ul>

                {/* Hamburger Menu Icon */}
                <div id='hamburger-icon' className='md:hidden cursor-pointer z-50' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IoCloseSharp className='text-blue-400' size={25} /> : < IoMdMenu className='text-blue-400' size={25} />}
                </div>

                {/* Mobile Navbar Menu */}
                {isOpen && (
                    <div className='inset-0 flex flex-col items-start px-9 text-4xl tracking-tighter font-semibold fixed justify-center bg-[#01011e] space-y-6 z-40'>
                        {navLinks.map((link) => (
                            <a href={link.href} key={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>
                        ))}
                    </div>
                )}

            </nav>
        </header>
    )
}

export default Navbar