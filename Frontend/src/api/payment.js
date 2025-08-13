import axios from 'axios';

const API_BASE_URL = 'http://localhost:4001';

// Create a new payment order
export const createOrder = async (amount) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/payment/order`, { amount });
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

// Verify payment after successful transaction
export const verifyPayment = async (paymentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/payment/verify`, paymentData);
    return response.data;
  } catch (error) {
    console.error('Error verifying payment:', error);
    throw error;
  }
};

// Get user's purchased books
export const getMyBooks = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/payment/my-books/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching purchased books:', error);
    return [];
  }
};