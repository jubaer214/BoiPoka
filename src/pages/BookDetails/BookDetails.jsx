import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams();
    const intId = parseInt(id)


    const data = useLoaderData();

    const singleBook = data.find(book => book.bookId === intId);
    // console.log(singleBook)
    const { bookName, author, review, image, category, totalPages, rating, tags, publisher, yearOfPublishing } = singleBook;

    return (
        <div className=''>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-8 my-10 lg:max-h-[1000px]'>
                <div className='bg-gray-100 p-10'>
                    <img className='w-fit' src={image} alt="" />
                </div>
                <div className='space-y-7'>
                    <h1 className='font-bold text-3xl'>{bookName}</h1>
                    <p>By: {author}</p>
                    <div className='border-1 border-dashed border-gray-400'></div>
                    <h2 className='bg-gray-200 px-6 py-1 border-1 rounded-2xl w-fit'>{category}</h2>
                    <div className='border-1 border-dashed border-gray-400'></div>
                    <h2><span className='font-bold'>Review :</span> <small className='text-gray-600'>{review}</small></h2>
                    <div className='flex gap-10 '>
                        <h2 className='font-bold'>Tag: </h2>
                        <h2 className='bg-gray-100 px-2 py-1 rounded-xl text-green-400'>#{tags[0]} </h2>
                        <h2 className='bg-gray-100 px-2 py-1 rounded-xl text-green-400'>#{tags[1]} </h2>

                    </div>
                    <div className='border-1 border-dashed border-gray-400'></div>
                    <div className='flex gap-10'>
                        <div className='text-gray-600'>
                            <h2 className='text-gray-500'>Number of Pages:</h2>
                            <h2 className='text-gray-500'>Publisher:</h2>
                            <h2 className='text-gray-500'>Year of Publishing:</h2>
                            <h2 className='text-gray-500'>Rating:</h2>
                        </div>
                        <div className='font-bold'>
                            <p>{totalPages }</p>
                            <p>{publisher }</p>
                            <p>{yearOfPublishing }</p>
                            <p>{rating }</p>
                        </div>
                    </div>
                    <div className='font-bold flex gap-10'>
                        <button className='btn font-bold'>Read</button>
                        <button className='btn font-bold bg-blue-300 text-white'>Wish List</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default BookDetails;