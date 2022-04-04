import React from 'react';
import { ImSpinner11 } from 'react-icons/im';

const Spinner = () => {
    return (
        <div>
            <div className='flex h-[84vh] items-center justify-center'>
                <button
                    type='button'
                    className='inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-blue-800 hover:bg-cyan-200 transition ease-in-out duration-150 cursor-not-allowed'
                    disabled=''
                >
                    <ImSpinner11 className='animate-spin ml-1 mr-3 h-5 w-5 text-white'></ImSpinner11>
                    Please Wait... processing data ......
                </button>


            </div>
        </div>
    );
};

export default Spinner;