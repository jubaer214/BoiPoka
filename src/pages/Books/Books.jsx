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
            <h3>Books</h3>
            <Suspense>
                
            </Suspense>
            <Book data={data}></Book>
        </div>
    );
};

export default Books;