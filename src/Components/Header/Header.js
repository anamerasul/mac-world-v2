import React from 'react';
import CustomLink from '../CustomLInk/CustomLink';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='sticky top-0 bg-gray-800 text-white px-12 py-8 flex justify-center shadow-lg  md:justify-between'>
            <div className='hidden md:block'>
                <Link to='/' className='font-sans font-bold text-xl text-white'>MAC-WORLD</Link>


            </div>
            <div className='flex gap-4 text-xl'>
                <CustomLink to='/'>HOME</CustomLink>
                <CustomLink to='/reviews'>REVIEWS</CustomLink>
                <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
                <CustomLink to='/blogs'>BLOGS</CustomLink>
                <CustomLink to='/about'>ABOUT</CustomLink>
            </div>
        </div>
    );
};

export default Header;