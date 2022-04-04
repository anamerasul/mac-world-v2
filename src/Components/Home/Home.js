import React from 'react';
import './Home.css'
import laptop from '../../laptop.png'


const Home = () => {
    return (
        <div className='container px-6'>
            <div className="home-main-container">
                <div className='title pl-6 max-w-[100%] order-2  md:order-1'>
                    <h1 className="text-6xl uppercase font-black "> welcome to <span class="hover:text-[#09f2b1]">mac</span>  world </h1>
                    <p className='text-3xl font-normal px-2 mt-8 mb-12 lg:mr-32'>Macworld is your ultimate guide to Apple's product universe, explaining what's new, what's best and how to make the most out of the products you love.</p>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">Next</button>

                </div>

                <div className='max-w-[100%] image-container order-1 md:order-2'>
                    <img className='object-cover' src={laptop} alt="laptop" />
                </div>
            </div>

        </div>
    );
};

export default Home;