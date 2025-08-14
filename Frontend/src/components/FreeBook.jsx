import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios";

function FreeBook({query}) {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstoreapp-backend-s8hx.onrender.com");
        const filteredBooks = res.data.filter((data) => data.name?.toLowerCase().includes(query)&& data.category == "Free");
        setBook(filteredBooks);
        console.log(filteredBooks);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, [query]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
        <p>
          Books are a gateway to knowledge, imagination, and personal growth.
          Whether you're looking to sharpen your skills, dive into new subjects, or simply
          enjoy a great read, our free book collection has something for you. 📖✨
        </p>
        <p>
          Expand your horizons with these carefully selected books across various genres and topics.
          Knowledge should be accessible to everyone, so start your journey today! 🚀
        </p>
      </div>
      <div className='mt-6'>
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FreeBook;
