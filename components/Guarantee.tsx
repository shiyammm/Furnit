import React from 'react';
import data from '@/constants/data';
import Image from 'next/image';
import Furniture02 from '@/public/assets/images/furniture02.png';

const Guarantee = () => {
  return (
    <section className="mt-[5rem] px-4">
      <h1 className="font-bold text-left font-RalewayRomanBold text-[2rem] text-black leading-9">
        We guarantee the safety of your shopping
      </h1>
      <div className="grid grid-cols-2 ">
        {data.Guarantees.map((guarantee) => (
          <div
            key={guarantee.head}
            className="flex flex-col py-8  items-left justify-center space-y-3"
          >
            <Image src={guarantee.icon} alt="" width={80} height={80}></Image>
            <span className="text-[1.1rem]  font-RalewatSemiBold font-semibold text-black">
              {guarantee.head}
            </span>
            <p className="text-left text-gray-500 text-[0.9rem] font-RubikRegular font-normal">
              {guarantee.body}
            </p>
          </div>
        ))}
      </div>
      <Image
        alt="Furniture"
        src={Furniture02}
        width={360}
        height={360}
        className="object-cover mt-9"
      ></Image>
    </section>
  );
};

export default Guarantee;
