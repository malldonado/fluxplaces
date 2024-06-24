"use client";

import React from "react";
import Image from "next/image";
import NextLink from "next/link";

const LoginLeft: React.FC = () => {
  return (
    <div className="relative w-[55%]">
      <NextLink href="/">
        <Image
          width={100}
          height={100}
          src="/img/white.svg"
          alt="Logo"
          className="absolute top-7 left-7 cursor-pointer"
        />
      </NextLink>
      <div className="w-[100%] h-full bg-gradient-to-r from-[#2144e1] to-[#213cb6] flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <Image
            width={500}
            height={500}
            src="/img/banner.svg"
            alt="Banner"
            className="h-auto my-auto w-[75%]"
          />
          <h2 className="text-white font-bold text-[24px] nunito-font mt-10">
            Leave Reviews for all meals
          </h2>
          <p className="mt-2 text-white nunito-font text-[14px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginLeft;
