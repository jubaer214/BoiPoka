import React from 'react';
import BookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className='flex justify-around items-center p-4 my-10 rounded-xl bg-gray-100'>
                <div>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus .</h1>
                    <button className='btn btn-primary'>Click Me</button>
                </div>
                <div >
                    <img className='w-[400px]' src={BookImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;