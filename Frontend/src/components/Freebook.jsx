import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

function Freebook() {
   const [book,setBook] = useState([]);
   useEffect(() =>{
    const getBook = async () =>{
      try {
        const res=await axios.get("https://book-store-app-api.vercel.app/book");
        console.log(res.data);
        setBook(res.data.filter((data)=>data.category==="Free"));
        console.log(res.data.filter((data)=>data.category==="Free"))
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
   },[])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div>
            <h1 className='font-semibold text-xl pb-2'>Free Offered courses</h1>
            <p>Explore our extensive library of free courses. Enhance your skills and knowledge with expertly curated content, available at no cost!"</p>
            </div>
            
        
        <div>
        <Slider {...settings}>
        {book.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook