import React from 'react';

const Blogs = () => {
    return (

        <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className=''>
                <div>
                    <h1 className='mb-6 text-2xl  text-gray-900 md:text-4xl font-bold'>
                        Questions
                    </h1>
                    <p className='mt-10 mb-3 font-semibold text-gray-900'>
                        What is Context API?
                    </p>
                    <p className='text-gray-600'>
                        The React Context API may be a manner for a React app to effectively manufacture world variables that may be passed around. this is often the choice to "prop drilling" or moving props from forbear to kid to parent, and so on. Context is additionally touted as a neater, lighter approach to state management exploitation revived.

                        Context API may be a (kind of) new feature further in version 16.3 of React that permits one to share state across the complete app (or a part of it) gently and with ease.
                    </p>
                    <p className='mt-10 mb-3 font-semibold text-gray-900'>
                        What are Semantic Elements with example?
                    </p>
                    <p className='text-gray-600'>
                        HTML was originally created as a nomenclature to explain documents on the first net. because the net grew and was adopted by additional folks, its wants modified.

                        Where the web was originally supposed for sharing scientific documents, currently folks wished to share alternative things still. terribly quickly, folks started desperate to build the online look nicer.
                        <br />
                        Example: article tag ,header tag , aside tag, nav tag, footer tag, etc


                    </p>
                    <p className='mt-10 mb-3 font-semibold text-gray-900'>
                        Difference between inline element vs block element ?
                    </p>
                    <p className='text-gray-600'>
                        <b>Block-level Elements:</b> A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.

                        A block-level element always takes up the full width available (stretches out to the left and right as far as it can).

                        <br />

                        <b>Inline Elements:</b> An inline element does not start on a new line.

                        An inline element only takes up as much width as necessary.

                        <br />
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;