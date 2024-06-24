import React from "react";
import { FaStar } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const CaseBestSellers: React.FC = () => {
  return (
    <div className="max-w-7xl mb-[100px] mt-[90px] mx-auto px-12">
      <div className="flex w-full">
        <h2 className="font-bold text-[30px] w-[80%]">Best Sellers</h2>
      </div>
      <div className="flex justify-center items-center h-auto mt-10">
        <div className="cursor-pointer relative">
          <div className="bg-[#2144e1] w-[100px] text-center font-medium p-0 text-white flex justify-center items-center h-[30px] leading-4 absolute top-[10px] rounded-[5px]">
            <MdDiscount /> 15% Off
          </div>
          <Image width={250} height={250} src="/img/product.svg" alt="Product" />
          <div className="flex mb-[10px]">
            <div className="w-[25%]">
                <Image width={50} height={50} src="/img/profile.svg" alt="Company" />
            </div>
            <div className="w-[75%]">
              <p className="text-left font-medium mb-[5px]">Iphone 12 Yellow</p>
              <div className="text-yellow-400 flex items-center leading-6">
                <FaStar className="fill-yellow-400 mr-2" />
                46
              </div>
            </div>
          </div>
          <div className="bg-[#79b93c33] h-[30px] flex items-center justify-center rounded-md">
            <p className="text-[#79b93c] font-bold z-1000 opacity-100">
              Open Now
            </p>
          </div>
        </div>
      </div>
      <button className="text-white font-bold bg-[#2144e1] mt-10 w-[120px] flex justify-center items-center h-[45px] rounded-[8px] text-[14px] outline-none">
        View All <IoIosArrowForward />
      </button>
    </div>
  );
};

export default CaseBestSellers;
