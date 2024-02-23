import data from '@/constants/data';
import Image from 'next/image';
import React from 'react';

const RecentBlog = () => {
  return (
    <section className="px-4 mt-[3rem]">
      <h1 className="text-black text-[2rem] my-7 font-semibold font-RalewatSemiBold">
        Read Our Latest Blog
      </h1>
      <p className="text-center text-[1.1rem] text-gray-500 font-RubikMedium">
        We write various things related to furniture, from tips and what things
        I need to pay attention to when choosing furniture
      </p>
      <div>
        {data.BlogsSection.map((blog) => (
          <div key={blog.body}>
            <Image
              alt="furniture"
              className="object-cover mt-9"
              src={blog.img}
            ></Image>
            <div className="my-6 space-y-2">
              <h2 className="font-semibold text-[1.2rem] font-RalewatSemiBold">
                {blog.title}
              </h2>
              <div className="flex items-center gap-3">
                <span className="flex items-center font-RubikMedium font-medium text-[0.85rem] gap-3 ">
                  <Image
                    src="/../assets/images/pencil.svg"
                    width={20}
                    height={20}
                    alt="pencil-icon"
                  ></Image>{' '}
                  {blog.author}
                </span>
                <div className="w-[1px] h-4 bg-black"></div>
                <span className="flex items-center font-RubikMedium font-medium text-[0.85rem] gap-3">
                  <Image
                    src="/../assets/images/calender.svg"
                    width={20}
                    height={20}
                    alt="pencil-icon"
                  ></Image>{' '}
                  {blog.date}
                </span>
              </div>
              <p className="text-[0.85rem] text-gray-500 leading-7 font-RubikMedium font-medium">
                {blog.body}
              </p>
            </div>
            <button className="font-semibold font-RubikSemiBold text-[1.2rem] border-[1px] border-black px-4 py-2">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentBlog;
