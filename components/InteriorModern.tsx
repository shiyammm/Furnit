import Image from 'next/image';
import React from 'react';

const InteriorModern = () => {
  return (
    <section className="bg-orange-100 py-5 mt-10">
      <div className="px-4 py-9 space-y-8">
        <span className="text-[1.1rem] text-gray-500 font-RubikRegular">
          Interior Modern
        </span>
        <h1 className="text-black text-[36px] font-RalewayRomanBold font-bold leading-10">
          Arrange your home in such a way with our modern interiors
        </h1>
        <button className="text-gray-800 text[1.1rem] border-2 border-black px-7 font-RubikBold font-bold py-3">
          Shop Now
        </button>
      </div>
      <div>
        <Image
          src="/../assets/images/furniture.png"
          width={400}
          height={100}
          alt="Furniture Image"
        ></Image>
      </div>
    </section>
  );
};

export default InteriorModern;
