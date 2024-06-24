"use client";

import React, { useState } from "react";
import { HiShoppingBag } from "react-icons/hi";
import { RiMapPinLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";

const BannerIndex: React.FC = () => {
  const [selected, setSelected] = useState<"products" | "stores">("products");

  const products = (
    <>
      <HiShoppingBag className="mr-1" /> <p>Products</p>
    </>
  );

  const stores = (
    <>
      <RiMapPinLine className="mr-1" /> <p>Stores</p>
    </>
  );

  const handleClick = (type: "products" | "stores") => {
    setSelected(type);
  };

  const getButtonStyle = (type: "products" | "stores") => {
    return selected === type
      ? { backgroundColor: "#c9ddff", color: "#2144e1" }
      : { backgroundColor: "#ffffff", color: "#2144e1" };
  };

  const placeholder =
    selected === "products" ? "Search for products..." : "Search for stores...";

  return (
    <div className="bg-gradient-to-r from-[#2144e1] to-blue-500 w-full h-[500px]">
      <div className="lg:mx-12 lg:flex lg:justify-center lg:items-center lg:h-full">
        <div className="max-w-7xl px-12 flex-col w-full h-[100%] mx-auto lg:flex lg:flex-row lg:justify-center lg:items-center">
          <div className="w-full lg:w-[65%]">
            <div className="text-[34px] text-center font-bold text-white py-10 lg:py-0 lg:tracking-[.2px] lg:text-[44px] lg:text-left">
              Search for the product or store?
            </div>
            <p className="lg:text-xl lg:text-left lg:px-0 text-white text-center px-4 text-[20px] mb-10 lg:mb-0">
              With just a few clicks, find the product or store near you!
            </p>
            <form className="w-full lg:w-[90%] bg-white h-[150px] rounded-xl mt-5 block px-4 lg:px-0">
              <div className="flex items-center h-[50%] border-b-[1px] border-[#eee] lg:mx-4">
                <span
                  className="w-[100px] flex h-[45px] justify-center items-center text-[#2144e1] font-bold text-sm rounded-md cursor-pointer"
                  onClick={() => handleClick("products")}
                  style={getButtonStyle("products")}
                >
                  {products}
                </span>
                <span
                  className="w-[100px] flex h-[45px] justify-center items-center text-[#2144e1] font-bold text-sm rounded-md cursor-pointer"
                  onClick={() => handleClick("stores")}
                  style={getButtonStyle("stores")}
                >
                  {stores}
                </span>
              </div>
              <div className="flex justify-start items-center h-[50%]">
                <input
                  className="w-[80%] lg:w-[77%] xl:w-[80%] h-[45px] bg-[#f5f5f5] lg:ml-4 flex px-4 outline-none rounded-md text-[#2144e1] font-medium placeholder:font-normal"
                  type="text"
                  placeholder={placeholder}
                />
                <button
                  onClick={() => handleClick(selected)}
                  className="w-[20%] lg:w-[15%] xl:w-[15%] bg-[#2144e1] text-white flex justify-center items-center h-[45px] rounded-md ml-2 font-medium text-[20px] md:text-[25px] lg:text-[25px] xl:text-[16px] cursor-pointer"
                >
                  <IoSearch className="mr-1" />
                  <p className="hidden xl:block">Search</p>
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-[35%] hidden lg:block">
            <Image
              width={500}
              height={500}
              src="/img/Map.svg"
              alt="Map"
              className="h-auto my-auto hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerIndex;
