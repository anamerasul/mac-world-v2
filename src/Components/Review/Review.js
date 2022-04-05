import React from 'react';
import UseLaptopReviewHook from '../Hooks/UseLaptopReviewHook';
import ReviewCart from '../ReviewCart/ReviewCart';
import Spinner from '../Spinner/Spinner';

const Review = () => {

    const [reviews] = UseLaptopReviewHook([])



    return (
        <>
            {
                reviews.length === 0 ? (<Spinner></Spinner>) : (
                    <div id="top" className="my-10">
                        <h2 className='text-center text-2xl font-bold mb-10'>What client says about our products ({reviews.length})</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4  md:gap-x-4 md:gap-y-8">
                            {
                                reviews.map(review => <ReviewCart
                                    review={review}
                                    key={review.id}
                                ></ReviewCart>)
                            }

                        </div>

                    </div>
                )
            }

        </>
    );
};

export default Review;



