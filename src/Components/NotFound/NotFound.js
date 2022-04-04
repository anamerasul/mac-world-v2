import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='px-4 py-32 mx-auto max-w-7xl'>
            <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5'>
                <div>
                    <p className='mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase'>
                        Error 404
                    </p>
                    <h1 className='mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl'>
                        Oops! The page you're looking for isn't here.
                    </h1>
                    <p className='mb-5 text-base text-left text-gray-800 md:text-xl'>
                        You might have the wrong address, or the page may have moved.
                    </p>
                    <Link to='/' className='w-full mb-2 py-2 px-3 mt-3 bg-blue-900 hover:bg-blue-700 text-white sm:w-auto sm:mb-0'>
                        Back to homepage
                    </Link>
                </div>
                <div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;