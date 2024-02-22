'use client';
import React, { useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import { RiCloseFill } from 'react-icons/ri';
import Link from 'next/link';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenu = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between p-5">
      <header className="text-3xl text-teal-800 font-RubikBold font-bold">
        Furnit.
      </header>
      <div onClick={handleMenu} className="absolute right-5 z-20">
        {toggle ? (
          <RiCloseFill className="w-9 h-9" />
        ) : (
          <RiMenu3Fill className="w-7 h-7" />
        )}
      </div>
      {toggle && (
        <div className="bg-orange-100 absolute top-0 w-full h-full grid items-center justify-center right-0">
          <ul className="flex flex-col gap-5 text-center font-RubikBold ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
