import React from "react";
import NextLink from 'next/link';

const ProductBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#2144e1] to-[#0053db] w-full h-[100px] mb-10">
      <div className="flex max-w-[1200px] h-[100%] mx-auto justify-center items-center">
          <NextLink href="/store">
            <a className="text-[36px] font-bold text-white tracking-[.2px] cursor-pointer">
              CASAS BAHIA
            </a>
          </NextLink>
      </div>
    </div>
  );
}

export default ProductBanner;
