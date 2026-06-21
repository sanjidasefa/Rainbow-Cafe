import React from "react";
import { use } from "react";

const cards = fetch("feture.json").then((res) => res.json());

const Feature = () => {
  const featureCards = use(cards);
  // console.log(featureCards);
  return (
    <div className="bg-white px-25 py-20">
      <div className="text-black text-center">
        <h1 className="text-4xl mb-3 font-bold">Why Choose Us?</h1>
        <p className="mb-10">Quality and care in everything we do</p>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {featureCards.map((card) => {
            return (
              <div
                key={card.id}
                className="bg-[#fbf7f0] py-10 px-15 rounded-2xl text-center text-black flex-1 flex flex-col items-center justify-center shadow-sm"
              >
                <span
                  className="text-4xl mb-4"
                  role="img"
                  aria-label={card.title}
                >
                  {card.icon}
                </span>
                <h2 className="text-2xl font-bold my-3 text-gray-800">
                  {card.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
