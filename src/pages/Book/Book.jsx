import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';
const Book = ({ singleBook }) => {
    // console.log(singleBook)
    const {bookId, bookName, author, image, category, rating, tags } = singleBook;

    return (
        <Link to={`bookDetails/${bookId}`}>
            <div className='border-1 border-gray-300 rounded-xl p-4 max-w-[320px] max-h-fit '>
            <div className='bg-gray-100 p-5 mb-5 flex justify-center items-center max-h-[400px] rounded-xl'>
                <img  className='max-h-[200px] rotate-2 w-fit' src={image} alt="" />
            </div>
            <div>
                <div className='flex gap-7 mb-3'>
                    <p className='bg-gray-100 py-1 px-2 rounded-2xl text-green-400'>{tags[0]}</p>
                    <p className='bg-gray-100 py-1 px-2 rounded-2xl text-green-400'>{tags[1]} </p>
                </div>
                <div className='mb-3'>
                    <h2 className='font-bold '>{bookName}</h2>
                    <p className='text-gray-600'><small>By: { author }</small></p>
                </div>
                <div className='border-1 border-dashed border-gray-400 mb-3'></div>
                <div className='text-gray-600 flex justify-between items-center'>
                    <p><small>{category}</small></p>
                    <div  className='flex items-center justify-center gap-2'>
                        <p><small>{rating}</small></p>
                        <CiStar />
                    </div>
                    
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;