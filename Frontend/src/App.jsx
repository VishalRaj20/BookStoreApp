import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contacts from './contacts/Contacts';
import Abouts from './components/Abouts';
import PaymentPage from './pages/PaymentPage';
import MyBooksPage from './pages/MyBooksPage';
import BookReaderPage from './pages/BookReaderPage';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {
    const [authUser, setAuthUser] = useAuth();
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true"; // Get saved dark mode state
    });

    // Apply dark mode class when the state changes
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", darkMode); // Save to localStorage
    }, [darkMode]);

    return (
        <>
            <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/contact" element={<Contacts />} />
                    <Route path="/about" element={<Abouts />} />
                    <Route path="/payment" element={authUser ? <PaymentPage /> : <Navigate to="/signup" />} />
                    <Route path="/my-books" element={authUser ? <MyBooksPage /> : <Navigate to="/signup" />} />
                    <Route path="/book/:bookId" element={authUser ? <BookReaderPage /> : <Navigate to="/signup" />} />
                </Routes>
                <Toaster />
            </div>
        </>
    );
}

export default App;
