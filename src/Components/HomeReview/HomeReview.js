import React from 'react';
import { Link } from 'react-router-dom';
import UseLaptopReviewHook from '../Hooks/UseLaptopReviewHook';
import ReviewCart from '../ReviewCart/ReviewCart';

const HomeReview = () => {
    const [reviews] = UseLaptopReviewHook([])
    return (
        <div className="my-10">
            <h2 className='text-center text-2xl font-bold mb-10 uppercase'>Our client review ({reviews.slice(0, 3).length})</h2>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4  md:gap-x-4 md:gap-y-8">
                {
                    reviews.slice(0, 3).map(review => <ReviewCart
                        review={review}
                        key={review.id}
                    ></ReviewCart>)
                }

            </div>

            <div className="mx-auto text-center mt-10">
                <Link className=' bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 text-center mt-8' to="/reviews">

                    see all review
                </Link>

            </div>


        </div>
    );
};

export default HomeReview;