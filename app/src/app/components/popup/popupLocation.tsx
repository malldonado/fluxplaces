"use client";

import React, { useState, useEffect } from "react";
import { GrLocation } from "react-icons/gr";
import { LiaSearchSolid } from "react-icons/lia";
import { Pane, Dialog } from "evergreen-ui";
import { AiOutlinePushpin } from "react-icons/ai";

const PopupLocation: React.FC = () => {
  const [isMap, setMap] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 900);
  };

  useEffect(() => {
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex items-center cursor-pointer">
      {!isMobile && (
        <Pane>
          <Dialog
            isShown={isMap}
            title="Address for your order"
            onCloseComplete={() => setMap(false)}
            hasFooter={false}
          >
            <div className="flex relative">
              <input
                className="h-[45px] w-full bg-[#f5f5f5] rounded-[5px] outline-none border border-[#f2f2f2] px-2 text-[#2144e1] font-medium placeholder:font-normal"
                type="text"
                placeholder="Search for address or zip code"
              />
              <LiaSearchSolid className="absolute right-2 bottom-0 top-0 my-auto text-[25px] cursor-pointer fill-[#2144e1]" />
            </div>
            <button className="flex h-[45px] w-full bg-[#2144e1] text-white justify-center items-center mt-5 rounded-[5px] text-[16px] font-medium mb-6">
              <GrLocation className="text-[15px] mr-1" />
              Use current location
            </button>
          </Dialog>
          <span
            onClick={() => setMap(true)}
            className="flex items-center text-base font-medium text-black"
          >
            <AiOutlinePushpin className="h-5 w-5" />
            <span className="ml-1">
              Av. Europa, 1626 - Americana/SP
            </span>
          </span>
        </Pane>
      )}
    </div>
  );
};

export default PopupLocation;
