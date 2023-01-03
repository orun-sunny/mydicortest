import React from 'react';
import bed from '../../assests/bed.jpg'
import ReviewCard from './ReviewCard';

const FlashSale = () => {
    const reviews = [
        {
            _id:1,
            name:'N200 Modern Style Chairs',
            price:"$129.00",
            img:bed
        },
        {
            _id:2,
            name:'Bed full set From Italia',
            price:'$499.00',
        },
          {  _id:3,
            name:'Table Chair set',
            price:'$799.00',
        },
          { _id:4,
            name:'Sofa Couch from Korean',
            price:'$99.00',
          



        }

    ]
    return (
        <div>
            <div className="text-center">
                <h3 className='text-xl  '> Daily Flash Sale </h3>

            </div>
            <div className='grid lg:grid-cols-4 gap-4'>
                {
                    reviews.map(review => <ReviewCard
                    key={review._id}
                    review={review}
                    ></ReviewCard> )
                }

            </div>
        </div>
    );
};

export default FlashSale;