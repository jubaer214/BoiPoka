import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {

    const [readList, setReadList] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedData = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedData.includes(book.bookId));
        setReadList(myReadList);
    })

    const [sort, setSort] = useState([])


    return (
        <div className='mt-10 mb-10'>
            <h1 className='bg-gray-100 rounded-lg text-center p-2 text-2xl font-bold mb-8'>Books</h1>
            <div className='flex justify-center items-center mb-5'>
                <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1 bg-blue-400 font-bold text-white">Sort By ⬇️</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Pages</a></li>
                        <li><a>Ratings</a></li>
                    </ul>
                </div>
            </div>
              <Tabs>
                <TabList>
                <Tab>Read Book List</Tab>
                <Tab>My Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2>{readList.length}</h2>
                    {
                        readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;