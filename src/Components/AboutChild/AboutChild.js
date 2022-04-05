import React from 'react';

const AboutChild = (props) => {


    const { title, description } = props.data
    return (
        <div>
            <p className='mt-10 mb-3 font-semibold text-gray-900'>
                {title} </p>
            <p className='text-gray-600'>
                {description}
            </p>
        </div>
    );
};

export default AboutChild;