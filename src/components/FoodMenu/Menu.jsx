import React, { use } from "react";
import { Link } from "react-router";

const menus = fetch("/items.json").then((res) => res.json());
const Menu = () => {
  const menuItems = use(menus);
  //  console.log(menuItems)
  return (
    <div>
      <div className="bg-[#fbf7f0]  px-25 py-20">
        <div className="text-black text-center">
          <h1 className="text-4xl mb-3 font-bold">Populer Dishes</h1>
          <p className="mb-10">Our most loved items,loved by everyone</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 ">
          {menuItems.map((item) => {
            return (
              <div key={item.id} className=' bg-white rounded-2xl'>
                <div>
                  <img src={item.image} alt={item.name} className='h-70 w-full rounded-t-2xl' />
                </div>
                <div
                  className="p-6
 text-black"
                >
                  <h1 className="font-bold text-xl">{item.title}</h1>
                  <p className="text-xs my-1">{item.description}</p>
                  <p className="text-amber-600 font-bold">Rs. {item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center my-5">
          <Link to="/menu" className="text-white bg-amber-600 p-2 px-5 rounded-2xl text-xs ">See Full Menu</Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
