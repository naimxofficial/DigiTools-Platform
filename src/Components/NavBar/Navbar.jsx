import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const Navbar = ({cart}) => {
    return (
        <nav className='w-11/12 mx-auto flex items-center justify-between'>

            <div className='flex items-center'>
                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-white  rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className='hover:scale-105 transition-all'><a href="#Products">Products</a></li>
                        <li className='hover:scale-105 transition-all'><a href="#Features">Features</a></li>
                        <li className='hover:scale-105 transition-all'><a href="#Pricing">Pricing</a></li>
                        <li className='hover:scale-105 transition-all'><a href="#Testimonials">Testimonials</a></li>
                        <li className='hover:scale-105 transition-all'><a href="#FAQ">FAQ</a></li>
                    </ul>
                </div>
                <h1 className='inline-block text-2xl md:text-4xl font-extrabold bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent py-4'>DigiTools</h1>
            </div>

            <ul className='md:flex items-center gap-8 font-semibold hidden'>
                <li className='hover:bg-slate-100'><a href="#Products">Products</a></li>
                <li className='hover:bg-slate-100'><a href="#Features">Features</a></li>
                <li className='hover:bg-slate-100'><a href="#Pricing">Pricing</a></li>
                <li className='hover:bg-slate-100'><a href="#Testimonials">Testimonials</a></li>
                <li className='hover:bg-slate-100'><a href="#FAQ">FAQ</a></li>
            </ul>

            <div className='font-semibold flex items-center'>
                <div className="relative inline-block p-2 cursor-pointer">
                    <a href='#cart' className="md:btn md:btn-ghost"><IoCartOutline className="text-2xl text-gray-700" />
                        {cart.length > 0 && (
                            <span className="animate-pulse absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#9514fa] text-[10px] font-bold text-white shadow-sm">
                                {cart.length}
                            </span>
                        )}</a>
                </div>
                <button className='btn btn-ghost'>Login</button>
                <a  href='#tool' className='hover:scale-105 transition-all btn rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] shadow-none border-none'>Get Started</a>
            </div>

        </nav>
    );
};

export default Navbar;