import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-[3rem] py-6 px-5 space-y-4">
      <h1 className="text-3xl text-white font-RubikBold font-bold">Furnit.</h1>
      <p className="text-[1rem] text-gray-400 font-RubikMedium font-medium leading-9">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, impedit.
      </p>
      <div className="flex justify-between">
        <div>
          <h3 className="text-[1.1rem] mb-5 font-RalewatSemiBold font-semibold text-white">
            Customer
          </h3>
          <ul className="text-[1rem] text-gray-400 space-y-3 font-RubikMedium font-medium">
            <li>Order Status</li>
            <li>Collections</li>
            <li>Our Story</li>
            <li>Affiliates</li>
            <li>Security</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[1.1rem] mb-5 font-RalewatSemiBold font-semibold text-white">
            Information
          </h3>
          <ul className="text-[1rem] text-gray-400 space-y-3 font-RubikMedium font-medium">
            <li>Customer Service</li>
            <li>Careers</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
      <div className="py-5">
        <span className="text-[1.1rem] mb-5 font-RalewatSemiBold font-semibold text-white">
          Follow Us
        </span>
        <div className="flex gap-4 mt-4">
          <Image
            src="/../assets/images/instagram.svg"
            className="bg-orange-100 rounded-full p-1"
            alt=""
            width={40}
            height={40}
          ></Image>
          <Image
            src="/../assets/images/facebook.svg"
            className="bg-orange-100 rounded-full p-1"
            alt=""
            width={40}
            height={40}
          ></Image>
          <Image
            src="/../assets/images/twitter.svg"
            className="bg-orange-100 rounded-full p-1"
            alt=""
            width={40}
            height={40}
          ></Image>
        </div>
      </div>
      <span className="text-[1rem] text-gray-400 font-RubikMedium font-medium">
        © Copyright 2022. All Rights Reserved.
      </span>
      <div className="flex gap-5">
        <p className="text-[1rem] text-gray-400 font-RubikMedium font-medium">
          Terms of condition
        </p>
        <p className="text-[1rem] text-gray-400 font-RubikMedium font-medium">
          Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
