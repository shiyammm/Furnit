import React from 'react';
import Image from 'next/image';
import data from '@/constants/data';

const NewestProducts = () => {
  return (
    <section className="px-4 space-y-6 mt-16">
      <h1 className="text-center font-RalewayRomanBold text-[2.1rem] font-semibold">
        Our Newest Product
      </h1>
      <p className="text-center font-RubikMedium text-[18px] text-neutral-400">
        Made of the best materials and with a design that follows the times
      </p>
      <div className="grid gap-6">
        {data.NewestProducts.map((product, id) => (
          <div className="teak_wood w-full h-full" key={id}>
            <div className="chair relative">
              <span className="absolute right-3 px-3 py-0.5 top-3 bg-red-500 text-white">
                New
              </span>
              <span className="absolute bg-gray-800 px-2 py-1 text-white text-[0.9rem] bottom-3 left-3 font-RubikRegular">
                Living Room
              </span>
              <Image
                src={product.img}
                className="w-full h-96 object-cover object-center sm:object-[0%_30%]"
                alt="teak_wood"
              ></Image>
            </div>
            <div className="flex justify-between pt-7 ">
              <span className=" font-RalewayRomanBold text-[1.1rem] text-black font-medium ">
                Teak Wood chair
              </span>
              <span className=" font-RalewayRomanBold text-[1.1rem] text-black font-medium ">
                $24
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewestProducts;
