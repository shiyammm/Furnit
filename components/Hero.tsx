import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-orange-100 py-9 pt-16 px-4 w-full h-full text-left grid gap-4">
      <span className="font-RubikRegular text-[20px] text-black ">
        Interior Needs
      </span>
      <h1 className="text-[2rem] text-black font-PollerOne font-bold leading-[2.5rem]">
        Various new collections of furniture to decorate the corner of your
        house.
      </h1>
      <button className="text-[20px] font-RubikBold font-bold bg-zinc-800 px-5 py-4 text-white">
        Shop Now
      </button>
      <div>
        <Image
          src="/../assets/images/HeroFurniture.png"
          alt="HeroFurniture"
          width={500}
          height={500}
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
