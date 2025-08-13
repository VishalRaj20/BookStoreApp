import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyBooks from '../components/MyBooks';

function MyBooksPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gray-100 dark:bg-gray-900">
        <MyBooks />
      </div>
      <Footer />
    </>
  );
}

export default MyBooksPage;