import React, { useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Pane, Dialog } from "evergreen-ui";

const PopupSearchIndex: React.FC = () => {
  const [isSearch, setSearch] = useState<boolean>(false);

  return (
    <div>
      <Pane>
        <Dialog
          isShown={isSearch}
          onCloseComplete={() => setSearch(false)}
          hasFooter={false}
          hasHeader={false}
        >
          <div className="flex relative h-[90px] justify-center items-center">
            <input
              className="h-[45px] w-full bg-[#f5f5f5] rounded-[5px] outline-none border border-[#f2f2f2] px-2 text-[#2144e1] font-medium placeholder:font-normal"
              type="text"
              placeholder="Search products or stores"
            />
            <LiaSearchSolid className="absolute right-2 bottom-0 top-0 my-auto text-[25px] cursor-pointer fill-[#2144e1]" />
          </div>
        </Dialog>
        <HiMagnifyingGlass
          onClick={() => setSearch(true)}
          className="h-6 w-6"
        />
      </Pane>
    </div>
  );
}

export default PopupSearchIndex;
