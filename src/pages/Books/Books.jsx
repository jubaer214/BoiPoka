import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const [allBooks, setAllBooks] = useState([])

    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then(res => res.json())
    //         .then(data =>
    //             console.log(data)
    //         )
    // })

    

    return (
        <div>
            <h3 className='underline text-center font-bold text-3xl mb-5 mt-5 font-mono'>Books</h3>
            <Suspense>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-20 mb-10'>
                    {
                        data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}>

                        </Book>)
                    }
                </div>
            </Suspense>
            
        </div>
    );
};

export default Books;