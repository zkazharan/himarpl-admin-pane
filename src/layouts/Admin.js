import React from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import Sidebar from 'components/Sidebar/Sidebar.js';
import FooterAdmin from 'components/Footers/FooterAdmin.js';
import Navbar from 'components/Navbars/IndexNavbar.js'

// views
import Post from 'views/service-post/Post.js';
import Category from 'views/service-post/Category.js';

export default function Admin() {
  return (
    <>
      <Navbar />
      <div>
        <Sidebar />
        <div className='relative md:ml-64 md:mt-20 bg-gray-800 h-screen pt-24'>
          <div className='px-4 md:px-10 mx-auto w-full  -m-24 bg-gray-800 pt-12'>
            <Routes>
              <Route path='/service-post/post' exact element={<Post />} />
              <Route path='/service-post/category' exact element={<Category />} />
            </Routes>
            <FooterAdmin />
          </div>
        </div>
      </div>
    </>
  );
}
