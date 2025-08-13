import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

function BookReader() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { bookId } = useParams();
  const book = location.state?.book;

  useEffect(() => {
    if (!book) {
      setError('Book information not found');
    } else {
      setLoading(false);
    }
  }, [book]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-md w-full text-center">
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4">Error</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{error}</p>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{book.title}</h1>
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Back
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl h-[600px] border border-gray-300 dark:border-gray-600 shadow-md rounded-md overflow-hidden">
              <iframe 
                src={book.content} 
                title={book.title}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Book Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Title:</span> {book.title}</p>
              <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Author:</span> {book.name}</p>
              <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Category:</span> {book.category}</p>
              {book.price > 0 && (
                <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Price:</span> ${book.price}</p>
              )}
            </div>
            <div className="flex justify-center md:justify-end">
              <img 
                src={book.image} 
                alt={book.title} 
                className="h-40 w-32 object-cover rounded-md shadow-md" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookReader;