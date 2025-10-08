import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ReadList = () => {
    return (
        <div className='mt-10 mb-10'>
            <h1 className='bg-gray-100 rounded-lg text-center p-2 text-2xl font-bold mb-8'>Books</h1>
              <Tabs>
                <TabList>
                <Tab>Read Book List</Tab>
                <Tab>My Wishlist</Tab>
                </TabList>

                <TabPanel>
                <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;