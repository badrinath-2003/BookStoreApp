import React, { useEffect, useState } from 'react'
import Cards from "./Cards"
import axios from "axios"
import {Link} from "react-router-dom"
function Course() {
    const [book,setBook] = useState([]);
    useEffect(() =>{
        const getBook = async () => {
            try {
                const book = await axios.get("https://book-store-app-api.vercel.app/book")
                console.log(book.data);
                setBook(book.data)
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    },[]);
    return (
        <>
            <div className=' max-w-screen-2x1 container mx-auto md:px-20 px-4'>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you<span className='text-violet-500'> Here! :)</span></h1>
                    <p className='mt-12'>Explore our vast library of courses, meticulously curated to enhance your skills and knowledge. Whether you seek new insights or wish to deepen your expertise, our selection of free and premium courses caters to all. Embark on your learning journey with us and unlock new opportunities for personal and professional growth.</p>
                    <Link to="/">
                    <button className=' mt-6 bg-pink-500 rounded-md hover:bg-pink-700 duration-300' >Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        book.map((item)=>(
                            <Cards key={item.id} item={item}/>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Course