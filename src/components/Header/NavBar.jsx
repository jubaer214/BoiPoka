import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
    const links = <>
        <Link to="/"><li className='mr-3 hover:border-1 border-green-500 px-4 py-2 rounded-lg text-gray-400'>Home</li></Link>
        <Link to="/readList"><li className='mr-3 hover:border-1 border-green-500 px-4 py-2 rounded-lg text-gray-400'>Listed Books</li></Link>
        <Link to="/"><li className='mr-3 hover:border-1 border-green-500 px-4 py-2 rounded-lg text-gray-400'>Pages to Read</li></Link>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                    </div>
                    <Link to="/"><a className="btn btn-ghost text-xl">Book Vibe</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {links}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <a className="btn mr-3 bg-green-500 font-bold text-white">Sign In</a>
                    <a className="btn bg-blue-300 font-bold text-white">Sign Up</a>
                </div>
                </div>
        </div>
    );
};

export default NavBar;