import React from 'react';
import AboutChild from '../AboutChild/AboutChild';
import UseAboutDataHook from '../Hooks/UseAboutDataHook';

const About = () => {

    const [about] = UseAboutDataHook([])
    return (
        <div>
            <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
                <div className=''>
                    <div>
                        <h1 className='mb-6 text-2xl  text-gray-900 md:text-4xl font-bold'>
                            About us
                        </h1>

                        {
                            about.map(data => <AboutChild
                                key={data.id}
                                data={data}

                            ></AboutChild>)

                        }


                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;