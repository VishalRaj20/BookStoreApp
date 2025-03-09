import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/books`);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
