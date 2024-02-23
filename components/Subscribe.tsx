import Image from 'next/image';
import React from 'react';

const Subscribe = () => {
  return (
    <section className="mt-8 mx-4 px-5 py-6 bg-gradient-to-br from-gray-800 via-gray-700 to-slate-700 space-y-6">
      <div className="space-y-4">
        <h1 className="text-white font-RalewayRomanBold font-bold text-[2.1rem] leading-11">
          Subscribe now and get 10% off all items
        </h1>
        <p className="text-white font-RubikMedium font-medium text-[1.1rem]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ratione!
        </p>
      </div>
      <form action="">
        <label htmlFor="email" className="block">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full py-4 px-4 border focus:outline-none focus:border-blue-500"
            placeholder="Your email here.."
          />
        </label>
        <button
          type="submit"
          className="bg-gray-800 px-6 py-2 text-orange-100 font-RubikBold font-bold text-[1.5rem]"
        >
          Subscribe
        </button>
      </form>
      <Image
        src="/../assets/images/twoChairs.png"
        width={400}
        height={400}
        alt="chairs"
        className="object-cover"
      ></Image>
    </section>
  );
};

export default Subscribe;
