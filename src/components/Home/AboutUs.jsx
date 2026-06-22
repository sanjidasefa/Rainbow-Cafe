import React from 'react';
import { Link } from 'react-router';

const AboutUs = () => {
  return (
    <div className='bg-[#481E14] p-10 md:p-15'>
      <div className='flex items-center justify-center flex-col md:flex-row gap-5'>
         <div><img className='rounded-2xl md:h-100 w-full' src="https://i.postimg.cc/6p1XgPtv/margarita-cherniak-d-ICRI11KU1M-unsplash.jpg" alt="" /></div>
     <div>
      <span className='uppercase text-amber-600 text-xs tracking-[0.4rem]'>Our Story</span>
      <h1 className='text-2xl font-bold my-5'>A Small Dream That Become a Cafe</h1>
      <p className='mb-5 text-sm opacity-70'>We are a team of passionate individuals dedicated to providing the best experience for our customers.</p>
      <Link  className="text-white  bg-amber-600 p-2 px-5 rounded-2xl text-sm " to="/About">Learn More About Us</Link>
     </div>
      </div>
    </div>
  );
};

export default AboutUs;