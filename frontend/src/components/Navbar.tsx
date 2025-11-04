import React from 'react'

const Navbar = () => {
    return (
        <nav className="backdrop-blur-md bg-white/40 border-b border-white/30 shadow-sm sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                <h1 className="text-2xl font-semibold text-[#3b73b8] tracking-wide">
                    🌙 Mufadz
                </h1>
                <ul className="flex space-x-6 text-sm font-medium">
                    <li><a href="#" className="hover:text-[#4477b2] transition">Home</a></li>
                    <li><a href="#" className="hover:text-[#4477b2] transition">Kalender</a></li>
                    <li><a href="#" className="hover:text-[#4477b2] transition">Jadwal</a></li>
                    <li><a href="#" className="hover:text-[#4477b2] transition">Tentang</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
