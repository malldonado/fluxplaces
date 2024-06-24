import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#2144e1] w-full h-full pb-1">
      <div className="flex flex-col lg:flex-row w-full justify-center items-center h-full max-w-7xl lg:mx-auto lg:justify-between lg:px-12">
        <div className="items-center w-full lg:w-[30%] flex lg:justify-start justify-center mb-8 lg:mb-0">
          <ul className="text-white text-center lg:text-left">
            <Link href='/'>
              <Image className="cursor-pointer mx-auto lg:mx-0 my-8 lg:my-0 lg:mb-10 lg:mt-7" width={130} height={130} src="/img/white.svg" alt="Logo" />
            </Link>
            <li className="mb-2">Rua da Liberdade, 10, 13000-000</li>
            <li>São Paulo / SP</li>
            <li className="flex justify-center lg:justify-start gap-3 mt-4">
              <span className="text-[26px] cursor-pointer">
                <FaFacebookSquare />
              </span>
              <span className="text-[26px] cursor-pointer">
                <RiInstagramFill />
              </span>
              <span className="text-[26px] cursor-pointer">
                <FaSquareXTwitter />
              </span>
            </li>
          </ul>
        </div>
        <div className="items-center w-full lg:w-[30%] flex justify-center mb-8 lg:mb-0">
          <ul className="text-white flex flex-col">
            <li className="text-[22px] font-medium mb-6 mt-8 lg:mb-10">Quick Access</li>
            <Link href='/categories' className="mb-3 cursor-pointer text-center font-medium">Categories</Link>
            <Link href='/stores' className="mb-3 cursor-pointer text-center font-medium">Stores</Link>
            <Link href='/wishlist' className="mb-3 cursor-pointer text-center font-medium">Wishlist</Link>
          </ul>
        </div>
        <div className="items-center w-full lg:w-[30%] flex lg:justify-end justify-center">
          <ul className="text-white text-center lg:text-left">
            <li className="text-[22px] font-medium mb-6 mt-6 text-center lg:mb-10">Contact</li>
            <li className="mb-3 text-center">Phone: +55 (11) 12345678</li>
            <li className="mb-10 text-center">contato@fluxplaces.com</li>
            {/* <li className="text-center">Phone: +1 12345678</li> */}
          </ul>
        </div>
      </div>
      <p className="text-white text-center mt-8 mb-2 font-light opacity-75 lg:mt-10 pb-6 lg:pb-2">
        © Fluxplaces all rights 2023 - Designed by malldonado.dev
      </p>
    </div>
  );
}

export default Footer;
