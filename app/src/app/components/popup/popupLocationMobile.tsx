import React, { useState } from "react";
import { TbMapPinPin } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { LiaSearchSolid } from "react-icons/lia";
import { Pane, Dialog } from "evergreen-ui";

const PopupLocation: React.FC = () => {
  const [isMap, setMap] = useState<boolean>(false);

  const isMobile = (): boolean => {
    const width = window.innerWidth;
    return width < 900;
  };

  const mobile = isMobile();

  return (
    <>
      {mobile && (
        <Pane className="w-full">
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
            className="font-sans text-[15px] cursor-pointer mt-[6px] font-medium h-[40px] flex items-center justify-center w-full"
          >
            <div className="flex justify-center items-center w-full m-auto md:text-start">
              <div className="w-full">
                <span className="my-auto text-[15px] flex justify-center">
                  <TbMapPinPin className="color-[#2144e1] text-[20px] mt-[-2px] mr-[5px]" />{" "}
                  Av. Europa, 1626 - Americana/SP
                </span>
              </div>
            </div>
          </span>
        </Pane>
      )}
    </>
  );
};

export default PopupLocation;
