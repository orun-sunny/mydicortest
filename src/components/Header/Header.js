import React from 'react';
import Navbar from '../Navbar/Navbar';
import slide1 from '../../assests/slide1-home1.jpg'
import bedroom from '../../assests/bedroom.jpg'
import kitchen from '../../assests/kitchen.jpg'
import office from '../../assests/office.jpg'



const Header = () => {
    return (
        <div>


            <Navbar></Navbar>
            <div className= "pl-24 grid lg:grid-cols-4 gap-4">

                <div className="card w-96 image-full py-8 pl-2">
                    <figure className="">
                        <img src={bedroom} alt="Furniture" className=""/>
                    </figure>
                    <div className="card-body items-center text-center">


                        <div className="card-actions py-44 justify-center">
                            <button className="btn btn-outline ">BedRoom</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 image-full py-8 pl-2">
                    <figure className="">
                        <img src={bedroom} alt="Furniture" className=""/>
                    </figure>
                    <div className="card-body items-center text-center">


                        <div className="card-actions py-44 justify-center">
                            <button className="btn btn-outline ">BedRoom</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 image-full py-8 pl-2">
                    <figure className="">
                        <img src={kitchen} alt="Furniture" className=""/>
                    </figure>
                    <div className="card-body items-center text-center">


                        <div className="card py-44 justify-center">
                            <button className="btn btn-outline ">Kitchen</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 image-full py-8 pl-2">
                    <figure className="">
                        <img src={office} alt="Furniture" className=""/>
                    </figure>
                    <div className="card-body items-center text-center">


                        <div className="card-actions py-44 justify-center">
                            <button className="btn btn-outline ">office</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Header;