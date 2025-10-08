import React from 'react';
import BookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className='md:flex  justify-around items-center px-20 py-10 my-10 rounded-xl bg-gray-100'>
                <div>
                    <h1 className='font-mono text-5xl mb-10'>Books To Freshen Up Your Bookshelf</h1>
                    <button className='btn bg-green-400 font-bold text-white'>View The List</button>
                </div>
                <div >
                    <img className='w-[400px]' src={BookImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;