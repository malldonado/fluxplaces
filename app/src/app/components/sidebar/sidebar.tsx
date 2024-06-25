"use client";
import React, { useState, useEffect } from "react";
import { BsPersonFill } from "react-icons/bs";
import {
  MdSpaceDashboard,
  MdSell,
  MdKeyboardArrowRight,
  MdOutlineAttachMoney,
} from "react-icons/md";
import { RiDiscountPercentFill, RiMessage3Fill } from "react-icons/ri";
import { IoReturnDownBack } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { BsFillCreditCardFill } from "react-icons/bs";
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
    if (typeof window !== 'undefined') {
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
        // { id: 1, label: "Dashboard", route: "/seller", emoji: <MdSpaceDashboard className="w-6 h-6 mr-2" /> },
        { id: 1, label: "Products", route: "/seller-products", emoji: <BsPersonFill className="w-6 h-6 mr-2" /> },
        { id: 2, label: "Orders", route: "/seller-orders", emoji: <MdSell className="w-6 h-6 mr-2" /> },
        { id: 3, label: "Finance", route: "/seller-finance", emoji: <BsFillCreditCardFill className="w-6 h-6 mr-2" /> },
        { id: 4, label: "Discount", route: "/seller-discount", emoji: <RiDiscountPercentFill className="w-6 h-6 mr-2" /> },
        { id: 5, label: "Message", route: "/seller-message", emoji: <RiMessage3Fill className="w-6 h-6 mr-2" /> },
        { id: 6, label: "Settings", route: "/seller-settings", emoji: <IoIosSettings className="w-6 h-6 mr-2" /> },
        { id: 7, label: "Account", route: "/panel-profile", emoji: <IoReturnDownBack className="w-6 h-6 mr-2" /> },
        { id: 8, label: "Home", route: "/", emoji: <IoReturnDownBack className="w-6 h-6 mr-2" /> },
      ]
    : [
        // { id: 1, label: "Dashboard", route: "/account", emoji: <MdSpaceDashboard className="w-6 h-6 mr-2" /> },
        { id: 1, label: "Profile", route: "/panel-profile", emoji: <BsPersonFill className="w-6 h-6 mr-2" /> },
        { id: 2, label: "Wishlist", route: "/panel-wishlist", emoji: <FaStar className="w-6 h-6 mr-2" /> },
        { id: 3, label: "Discount", route: "/panel-discount", emoji: <RiDiscountPercentFill className="w-6 h-6 mr-2" /> },
        { id: 4, label: "Message", route: "/panel-message", emoji: <RiMessage3Fill className="w-6 h-6 mr-2" /> },
        { id: 5, label: "My shopping", route: "/panel-shopping", emoji: <BiSolidShoppingBagAlt className="w-6 h-6 mr-2" /> },
        { id: 6, label: "Wanna Sell", route: "/seller-products", emoji: <MdSell className="w-6 h-6 mr-2" /> },
        { id: 7, label: "Settings", route: "/panel-settings", emoji: <IoIosSettings className="w-6 h-6 mr-2" /> },
        { id: 8, label: "Home", route: "/", emoji: <IoReturnDownBack className="w-6 h-6 mr-2" /> },
      ];

  const breadCrumbItems: SidebarItem[] = [
    { id: 1, label: "Home", route: "/", emoji: <MdKeyboardArrowRight className="text-[20px] fill-black" /> },
    { id: 2, label: "Account", route: "/account", emoji: <MdKeyboardArrowRight className="text-[20px] fill-black" /> },
    ...(isSellerRoute ? [{ id: 3, label: "Seller", route: "/seller", emoji: <MdKeyboardArrowRight className="text-[20px] fill-black" /> }] : []),
  ];

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
          <ul className={`flex-column space-y space-y-2 text-[16px] font-medium dark:text-gray-400 md:me-4 mb-4 md:mb-0 w-full mt-10`}>
            {items.map((item) => (
              <li key={item.id}>
                <Link href={item.route}>
                  {/* Removed <a> tag and placed content directly inside Link */}
                  <div className={`inline-flex items-center px-2 py-3 rounded-md w-full mb-1 ${pathname === item.route ? "text-white bg-blue-700 active" : "text-blue-700 hover:text-white hover:bg-black bg-white"}`}>
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
