import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookReader from '../components/BookReader';

function BookReaderPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <BookReader />
      </div>
      <Footer />
    </div>
  );
}

export default BookReaderPage;