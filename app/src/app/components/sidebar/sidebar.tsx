"use client";
import React, { useState, useEffect } from "react";
import { BsFillCreditCardFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiDiscountPercentFill, RiMessage3Fill } from "react-icons/ri";
import {
  IoReturnDownBack,
  IoGridOutline,
  IoBagOutline,
  IoCardOutline,
  IoChatboxOutline,
  IoPricetagOutline,
  IoSettingsOutline,
  IoExitOutline,
  IoLibraryOutline,
  IoFileTrayStackedOutline,
  IoStorefrontOutline,
  IoBarChartOutline,
} from "react-icons/io5";
import { SlStar } from "react-icons/sl";
import { IoIosSettings } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import Link from "next/link";

interface SidebarProps {}

interface SidebarItem {
  id: number;
  label: string;
  route: string;
  emoji: JSX.Element;
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [selectedItem, setSelectedItem] = useState<SidebarItem | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [pathname, setPathname] = useState<string>("");
  const [isSellerRoute, setIsSellerRoute] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setPathname(path);
      setIsSellerRoute(path.startsWith("/seller"));
    }
    return () => {
      setIsMounted(false);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  const items: SidebarItem[] = isSellerRoute
    ? [
        {
          id: 1,
          label: "Dashboard",
          route: "/seller",
          emoji: <IoGridOutline className="w-6 h-6 mr-2" />,
        },
        {
          id: 2,
          label: "Products",
          route: "/seller-products",
          emoji: <IoLibraryOutline className="w-5 h-5 mr-2" />,
        },
        {
          id: 3,
          label: "Orders",
          route: "/seller-orders",
          emoji: <IoFileTrayStackedOutline className="w-5 h-5 mr-2" />,
        },
        {
          id: 4,
          label: "Finance",
          route: "/seller-finance",
          emoji: <IoBarChartOutline className="w-5 h-5 mr-2" />,
        },
        {
          id: 5,
          label: "Discount",
          route: "/seller-discount",
          emoji: <IoPricetagOutline className="w-5 h-5 mr-2" />,
        },
        {
          id: 6,
          label: "Message",
          route: "/seller-message",
          emoji: <IoChatboxOutline className="w-5 h-5 mr-2" />,
        },
        {
          id: 7,
          label: "Settings",
          route: "/seller-settings",
          emoji: <IoSettingsOutline className="w-5 h-5 mr-2" />,
        },
        // {
        //   id: 8,
        //   label: "Account",
        //   route: "/panel-profile",
        //   emoji: <IoExitOutline className="w-5 h-5 mr-2" />,
        // },
        {
          id: 8,
          label: "Home",
          route: "/",
          emoji: <IoExitOutline className="w-5 h-5 mr-2" />,
        },
      ]
    : [
        {
          id: 1,
          label: "Dashboard",
          route: "/panel",
          emoji: <IoGridOutline className="w-5 h-5 mr-2" />,
        },
        {
          id: 2,
          label: "Wishlist",
          route: "/panel-wishlist",
          emoji: <SlStar className="w-5 h-5 mr-2" />,
        },
        {
          id: 3,
          label: "Discount",
          route: "/panel-discount",
          emoji: <IoPricetagOutline className="w-5 h-5 mr-2" />,
        },
        {
          id: 4,
          label: "Message",
          route: "/panel-message",
          emoji: <IoChatboxOutline className="w-5 h-5 mr-2" />,
        },
        {
          id: 5,
          label: "My shopping",
          route: "/panel-shopping",
          emoji: <IoBagOutline className="w-5 h-5 mr-2" />,
        },
        // {
        //   id: 7,
        //   label: "Wanna Sell",
        //   route: "/seller",
        //   emoji: <IoStorefrontOutline className="w-5 h-5 mr-2" />,
        // },
        {
          id: 6,
          label: "Settings",
          route: "/panel-settings",
          emoji: <IoSettingsOutline className="w-5 h-5 mr-2" />,
        },
        {
          id: 7,
          label: "Home",
          route: "/",
          emoji: <IoExitOutline className="w-5 h-5 mr-2" />,
        },
      ];

  // const breadCrumbItems: SidebarItem[] = [
  //   {
  //     id: 1,
  //     label: "Home",
  //     route: "/",
  //     emoji: <MdKeyboardArrowRight className="text-[20px] fill-black" />,
  //   },
  //   {
  //     id: 2,
  //     label: "Account",
  //     route: "/account",
  //     emoji: <MdKeyboardArrowRight className="text-[20px] fill-black" />,
  //   },
  //   ...(isSellerRoute
  //     ? [
  //         {
  //           id: 3,
  //           label: "Seller",
  //           route: "/seller",
  //           emoji: <MdKeyboardArrowRight className="text-[20px] fill-black" />,
  //         },
  //       ]
  //     : []),
  // ];

  const handleItemClick = (item: SidebarItem) => {
    setSelectedItem(item);
  };

  return (
    <div className={`py-2 mr-4 h-full w-[250px]`}>
      {/* <div className={`flex w-[250px] py-3 text-gray-700 bg-gray-50 pl-4`} aria-label="Breadcrumb">
        {breadCrumbItems.map((item) => (
          <Link href={item.route} key={item.id}>
            <div className={`flex justify-center items-center font-bold ${pathname === item.route ? "text-[#1d4ed8]" : ""}`}>
              {item.label}
              {item.emoji}
            </div>
          </Link>
        ))}
      </div> */}

      {/* NAVBAR LEFT */}
      <div>
        <div className="md:flex">
          <ul
            className={`flex-column space-y space-y-2 text-[16px] font-medium dark:text-gray-400 md:me-4 mb-4 md:mb-0 w-full mt-10`}
          >
            {items.map((item) => (
              <li key={item.id}>
                <Link href={item.route}>
                  {/* Removed <a> tag and placed content directly inside Link */}
                  <div
                    className={`inline-flex items-center px-2 py-3 rounded-sm w-full mb-1 ${
                      pathname === item.route
                        ? "text-white bg-[#5d87ff] active"
                        : "text-blue-700 hover:text-white hover:bg-blue-700 bg-white"
                    }`}
                  >
                    {item.emoji}
                    {item.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
