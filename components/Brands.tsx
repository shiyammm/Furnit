import React from 'react';
import Image from 'next/image';
import company from '../public/assets/images/company01.svg';

const Brands = () => {
  return (
    <section className="bg-black mt-10 py-10 grid gap-10">
      <p className="text-white font-RubikRegular px-4 text-center text-[1.3rem]">
        Various brands have used our products
      </p>
      <div className="w-full justify-center flex flex-col gap-10 items-center min-h-52">
        <Image
          className="company"
          alt="SquareSpace"
          width={220}
          height={48}
          src="/../assets/images/company01.svg"
        ></Image>
        <Image
          className="company"
          alt="DocSign"
          width={125}
          height={48}
          src="/../assets/images/company02.svg"
        ></Image>
        <Image
          className="company"
          alt="Braze"
          width={92}
          height={48}
          src="/../assets/images/company03.svg"
        ></Image>
        <Image
          className="company"
          alt="Attentive"
          width={141}
          height={48}
          src="/../assets/images/company04.svg"
        ></Image>
        <Image
          className="company"
          alt="OpenDoor"
          width={134}
          height={48}
          src="/../assets/images/company05.svg"
        ></Image>
        <Image
          className="company"
          alt="Square"
          width={132}
          height={48}
          src="/../assets/images/company06.svg"
        ></Image>
      </div>
    </section>
  );
};

export default Brands;
