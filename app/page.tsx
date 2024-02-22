import React from 'react';
import Brands from '@/components/Brands';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import LivingRoomSet from '@/components/LivingRoomSet';
import NewestProducts from '@/components/NewestProducts';
import InteriorModern from '@/components/InteriorModern';
import NewArrival from '@/components/NewArrival';
import Guarantee from '@/components/Guarantee';
import RecentBlog from '@/components/RecentBlog';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div className="bg-white">
      <NavBar />
      <Hero />
      <Brands />
      <LivingRoomSet />
      <NewestProducts />
      <InteriorModern />
      <NewArrival />
      <Guarantee />
      <RecentBlog />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default page;
