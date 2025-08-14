import React, { useEffect, useState } from 'react';
import { getMyBooks, removeBook } from '../api/payment';
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
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">My Books</h2>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 max-w-md w-full text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">Please log in to view your purchased books.</p>
          <Link
            to="/signup"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Log In
          </Link>
        </div>
      </div>
    );
  }

  const handleRemove = async (bookId) => {
    try {
      await removeBook(authUser._id, bookId);
      setBooks(prev => prev.filter(b => b._id !== bookId));
      toast.success("Book removed from your library");
    } catch (error) {
      toast.error("Failed to remove book");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">📚 My Books</h2>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        ) : books.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6">You haven't purchased any books yet.</p>
            <Link
              to="/course"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Browse Books
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {books.map((book) => (
              <div
                key={book._id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className="h-56 overflow-hidden cursor-pointer group"
                  onClick={() => navigate(`/book/${book._id}`, { state: { book } })}
                  title="Click to read this book"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 truncate">{book.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{book.name}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-3 py-1 rounded-full">
                      {book.category}
                    </span>
                    <span className="text-green-600 dark:text-green-400 text-sm font-medium">Purchased</span>
                  </div>
                  <button
                    onClick={() => handleRemove(book._id)}
                    className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-transform transform hover:scale-105"
                  >
                    Remove
                  </button>
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
