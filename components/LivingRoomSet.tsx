import React from 'react';
import Image from 'next/image';

const LivingRoomSet = () => {
  return (
    <section className="w-full h-full  my-7 flex flex-col gap-5 px-4">
      <div className="living_room relative min-w-[20rem] min-h-[34rem] bg-gradient-to-br from-gray-800 via-gray-700 to-slate-700  px-5 py-6 space-y-6 text-white">
        <span className="font-medium text-[1.1rem] font-RubikMedium">
          Living Room
        </span>
        <p className="font-semibold text-[2rem] font-RalewatSemiBold leading-9 ">
          The best foam padded chair
        </p>
        <button className="font-RubikBold font-bold text-[16px] px-5 py-3 border-white border-2">
          Shop Now
        </button>
        <Image
          alt="Chair"
          className="absolute bottom-2 left-1/2 -translate-x-1/2 "
          src="/../assets/images/livingRoomFurniture01.png"
          width={200}
          height={200}
        ></Image>
      </div>
      <div className="living_room relative min-w-[20rem] min-h-[33rem] bg-gradient-to-br from-gray-800 via-gray-700 to-slate-700  px-5 py-6 space-y-6 text-white">
        <span className="font-medium text-[1.1rem] font-RubikMedium">
          Living Room
        </span>
        <p className="font-semibold text-[2rem] leading-9 font-RalewatSemiBold">
          Latest model chandelier
        </p>
        <button className="font-RubikBold font-bold text-[16px] px-5 py-3 border-white border-2">
          Shop Now
        </button>
        <Image
          alt="Lamp"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 "
          src="/../assets/images/livingRoomFurniture02.png"
          width={200}
          height={200}
        ></Image>
      </div>
    </section>
  );
};

export default LivingRoomSet;
