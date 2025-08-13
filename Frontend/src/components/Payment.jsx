import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createOrder, verifyPayment } from '../api/payment';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const [authUser] = useAuth();
  const { book } = location.state || {};

  useEffect(() => {
    // Redirect if no book data is passed
    if (!book) {
      navigate('/course');
      return;
    }

    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [book, navigate]);

  const handlePayment = async () => {
    if (!authUser) {
      toast.error('Please login to purchase books');
      navigate('/signup');
      return;
    }

    try {
      const orderData = await createOrder(book.price);
      
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Get from .env file
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'BookStore',
        description: `Purchase of ${book.title}`,
        order_id: orderData.id,
        handler: async function (response) {
          try {
            // Verify payment with backend
            const paymentData = {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userId: authUser._id,
              bookId: book._id
            };

            const result = await verifyPayment(paymentData);
            
            if (result.success) {
              toast.success('Payment successful! Book purchased.');
              navigate('/my-books');
            } else {
              toast.error('Payment verification failed');
            }
          } catch (error) {
            toast.error('Payment verification failed');
            console.error('Payment verification error:', error);
          }
        },
        prefill: {
          name: authUser?.fullname || '',
          email: authUser?.email || ''
        },
        theme: {
          color: '#F37254'
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      toast.error('Failed to initiate payment');
      console.error('Payment initiation error:', error);
    }
  };

  if (!book) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Checkout</h2>
            <button 
              onClick={() => navigate(-1)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Cancel
            </button>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
          
          <div className="flex items-center mb-6">
            <div className="h-20 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
              <img 
                src={book.image} 
                alt={book.title} 
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-base font-medium text-gray-800 dark:text-white">{book.title}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{book.category}</p>
            </div>
            <p className="text-base font-medium text-gray-800 dark:text-white">${book.price}</p>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
          
          <div className="flex justify-between mb-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">Subtotal</p>
            <p className="text-sm font-medium text-gray-800 dark:text-white">${book.price}</p>
          </div>
          
          <div className="flex justify-between mb-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">Taxes</p>
            <p className="text-sm font-medium text-gray-800 dark:text-white">$0.00</p>
          </div>
          
          <div className="flex justify-between mb-6">
            <p className="text-base font-medium text-gray-800 dark:text-white">Total</p>
            <p className="text-base font-medium text-gray-800 dark:text-white">${book.price}</p>
          </div>
          
          <button
            onClick={handlePayment}
            className="w-full bg-blue-600 py-3 px-4 rounded-md text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Pay with Razorpay
          </button>
          
          <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
            By completing this purchase, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Payment;