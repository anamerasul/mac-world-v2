import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const ReviewCart = (props) => {
    const { review } = props
    return (
        <div className='shadow-lg rounded-4xl  bg-white p-4 mx-4 gap-10'>


            <div className='flex gap-8 justify-between items-center'>
                <div className='flex-shrink-0'>
                    <img className="mx-auto object-cover rounded-full h-16 w-16" src={review.picture} alt="reviewImg" />
                </div>
                <div className='flex flex-col justify-end'>
                    <span className="text-gray-600 font-bold">{review.name}

                    </span>

                    <span className='text-gray-400 text-xl' > <span className="font-medium">Comment</span>  :{review.text}</span>

                    <span className='text-gray-400 text-xl flex flex-row gap-2 ' >Ratings: {review.rate_number} <span className="flex flex-row mt-1 text-yellow-400"> {review.ratings.map(rate => <AiFillStar key={rate}></AiFillStar>)}</span></span>


                </div>


            </div>
        </div >
    );
};

export default ReviewCart;


