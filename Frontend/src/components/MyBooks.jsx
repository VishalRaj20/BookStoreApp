import React, { useEffect, useState } from 'react';
import { getMyBooks } from '../api/payment';
import { useAuth } from '../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function MyBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authUser] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      if (!authUser) {
        setLoading(false);
        return;
      }

      try {
        const data = await getMyBooks(authUser._id);
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
        toast.error('Failed to load your books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [authUser]);

  if (!authUser) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">My Books</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-md w-full text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Please log in to view your purchased books.</p>
          <Link 
            to="/signup" 
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Log In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">My Books</h2>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : books.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">You haven't purchased any books yet.</p>
            <Link 
              to="/course" 
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Browse Books
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <div key={book._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="h-48 overflow-hidden cursor-pointer" 
                  onClick={() => navigate(`/book/${book._id}`, { state: { book } })}
                  title="Click to read this book"
                >
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-full h-full object-cover object-center hover:opacity-90 transition-opacity"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{book.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{book.name}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                      {book.category}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Purchased</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyBooks;
