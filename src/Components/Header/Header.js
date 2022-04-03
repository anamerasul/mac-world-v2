import React, { useState } from 'react';
import CustomLink from '../CustomLInk/CustomLink';
import { Link } from 'react-router-dom';
import { MdLegendToggle } from 'react-icons/md';
import './Header.css'
const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="flex flex-wrap items-center justify-between px-2 py-3 sticky top-0 bg-gray-800 shadow-lg  text-white mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
                        <Link to='/'
                            className="text-4xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-fuchsia-300 md:text-white "
                        >
                            MAC-WORLD
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <MdLegendToggle ></MdLegendToggle>
                        </button>
                    </div>
                    <div
                        className={
                            "md:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col md:flex-row list-none  md:ml-auto">
                            <li className="nav-item">
                                <CustomLink className="px-3 py-2 flex items-center uppercase" to='/'>HOME</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="px-3 py-2 flex items-center uppercase" to='/reviews'>Review</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="px-3 py-2 flex items-center uppercase" to='/dashboard'>DASHBOARD</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="px-3 py-2 flex items-center uppercase" to='/blogs'>Blogs</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="px-3 py-2 flex items-center uppercase" to='/about'>About</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="px-3 py-2 flex items-center uppercase" to='/faq'>F.a.q</CustomLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;



