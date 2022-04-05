import React from 'react';
import UseQuestionAnswerHook from '../Hooks/UseQuestionAnswerHook';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';
import Spinner from '../Spinner/Spinner';

const Blogs = () => {
    const [questionAnswer] = UseQuestionAnswerHook([])



    return (
        <>
            {
                questionAnswer.length === 0 ? (<Spinner></Spinner>) : (

                    <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
                        <div className=''>
                            <div>

                                <h1 className='mb-6 text-2xl  text-gray-900 md:text-4xl font-bold'>
                                    Questions
                                </h1>
                                {

                                    questionAnswer.map(data =>

                                        <QuestionAnswer
                                            key={data.id}
                                            data={data}
                                        ></QuestionAnswer>
                                    )
                                }
                            </div>
                        </div>
                    </section >

                )
            }

        </>



    );
};

export default Blogs;