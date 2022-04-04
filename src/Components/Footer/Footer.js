import React from 'react';
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
const Footer = () => {
    return (
        <footer className='bg-gray-900  py-4 mt-8 md:mt-24'>
            <div className='max-w-screen-xl mx-auto px-4'>
                <div className=' flex max-w-xs mx-auto items-center justify-between'>
                    <a
                        href='https://facebook.com/sparkgears'
                        className='text-white hover:text-gray-800 transition-colors duration-200'
                    >
                        <BsFacebook className='text-xl hover:text-blue-800 transition-colors duration-200'></BsFacebook>
                    </a>
                    <a
                        href='https://twitter.com/MdChowdhuray'
                        className='text-white  hover:text-gray-800 transition-colors duration-200'
                    >

                        <BsTwitter className='text-xl hover:text-blue-500 transition-colors duration-200'></BsTwitter>
                    </a>
                    <a
                        href='https://github.com/anamerasul'
                        className='text-white hover:text-gray-200 transition-colors duration-200'
                    >
                        <BsGithub className='text-xl hover:text-gray-200 transition-colors duration-200'></BsGithub>
                    </a>
                    <a
                        href='https://www.linkedin.com/in/anamerasul/'
                        className='text-white hover:text-gray-800 transition-colors duration-200'
                    >
                        <BsLinkedin className='text-xl hover:text-blue-500 transition-colors duration-200'></BsLinkedin>
                    </a>


                </div>
                <div className='text-center text-white pt-4 sm:pt-8 font-light flex items-center justify-center'>
                    All Rights Reserved By &copy; Mac-world | 2022-present
                </div>
            </div>
        </footer>
    );
};

export default Footer;