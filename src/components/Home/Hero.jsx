import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
  return (
 <div className="bg-cover bg-center h-screen w-full bg-[url('https://i.postimg.cc/3xwF17VJ/hero.jpg')]">
  <div className=" flex justify-center items-center text-center flex-col h-full bg-black/60 text-white p-8"> {/* টেক্সট ক্লিয়ার দেখার জন্য একটু ডার্ক ওভারলে ও হাইট দেওয়া হয়েছে */}
    <div>
      <h1 className="text-4xl font-bold">Food Made With <br /> <span className="text-orange-400">Love & Flavor</span></h1>
      <p className=" my-5">Every Dish is Crafted with warmth and authentic taste. <br /> Come and experience the difference.</p>
    </div>
    <div className="flex gap-4">
      <Link to="/" className="bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-orange-500 transition duration-300">View Our Menu</Link>
      <Link to="/" className="border border-orange-400 text-orange-400 px-6 py-3 rounded-full hover:bg-orange-400 hover:text-white transition duration-300">Reserve a Table</Link>
    </div>
  </div>
</div>
  );
};

export default Hero;