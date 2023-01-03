import React from 'react';
import feature1 from '../../assests/feature1.png'
import feature2 from '../../assests/feature2.png'
import feature3 from '../../assests/feature3.png'
import feature4 from '../../assests/feature4.png'
import Service from './Service';



const Services = () => {
    const services =[
        {
            _id:1,
            name:'Amazing Value Every Day',
            description:'Items prices that fit your budget. ',
            img:feature1
        },
        {
            _id:2,
            name:'Free Shipping Over $35*',
            description:' Popular delivery on 1 - 2 days',
            img:feature2
        },
        {
            _id:3,
            name:'Amazing Value Every Day',
            description:' Our team on hand seven days a week',
            img:feature3
        },
        {
            _id:4,
            name:'Amazing Value Every Day',
            description:'All things home, all in one place. ',
            img:feature4
        },
    ]
    return (
        <div className='my-20 pl-2'>
     <div className="text-center">
        <h3 className='text-xl  '>Services we have </h3>

     </div>
     <div className='grid lg:grid-cols-4 '>
        {
            services.map(service=> <Service
            key={service._id}
            service={service}
            >

            </Service> )
        }

     </div>
            
        </div>
    );
};

export default Services;