import React from 'react';
import { Link } from 'react-router-dom';
import LaptopReviewHook from '../Hooks/LaptopReviewHook';
import ReviewCart from '../ReviewCart/ReviewCart';

const HomeReview = () => {
    const [reviews, setReviews] = LaptopReviewHook([])
    return (
        <div className="my-10">
            <h2 className='text-center text-2xl font-bold mb-10'>What client says about our products</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    reviews.slice(0, 3).map(review => <ReviewCart
                        review={review}
                        key={review.id}
                    ></ReviewCart>)
                }

            </div>

            <div className="mx-auto text-center mt-10">
                <Link className=' bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 text-center mt-8' to="/review">

                    see more
                </Link>

            </div>


        </div>
    );
};

export default HomeReview;