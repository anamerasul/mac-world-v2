import React from 'react';

const QuestionAnswer = (props) => {
    const { question, answer } = props.data
    return (
        <div>

            <p className='mt-10 mb-3 font-semibold text-gray-900'>
                {question}
            </p>
            <p className='text-gray-600'>
                {answer}
            </p>

        </div>
    );
};

export default QuestionAnswer;