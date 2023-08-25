'use client'

import Image from "next/image";
import React, { useState } from "react";

// local imports
import { navbarData } from "@/utils/data";
import Link from "next/link";

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleItemHover = (item) => {
    setActiveItem(item);
    setShowSubMenu(true);
  };

  const handleItemLeave = () => {
    setActiveItem(null);
    setShowSubMenu(false);
  };

  return (
    <div>
      {/* main container */}
      <nav className="flex justify-between items-center md:px-10 px-6 py-4 w-full bg-[#ac9020]">
        {/* logo */}
        <Image
          src="/orlWhiteTransparent.png"
          alt="logo"
          width={50}
          height={50}
        />

        {/* menu items */}
        <div className="w-[80%] flex justify-evenly items-center">
          <Link href={`/`}>
            <span className=" hover:text-gray-950 hover:font-medium">Home</span>
          </Link>
          {navbarData.map((item, index) => (
            <Link key={index} className="cursor-pointer" href={item.link}>
              <span
                className={`hover:text-gray-950 flex`}
                onMouseEnter={() => handleItemHover(item)}
              >
                {item.name}
              </span>
              {item.subMenu && showSubMenu && item === activeItem && (
                <ol className="absolute z-10 mt-2 py-4 px-8 border rounded-md bg-[#ac9020]"
                onMouseLeave={() => handleItemLeave()}
                >
                  {item.subTitles.map((subTitles, index) => (
                    <li key={index} className="my-4 ">
                      
                      <Link href={`/${item.link}/${subTitles}`}>
                        <span className="border-b hover:text-gray-950">
                          {subTitles}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ol>
              )}
            </Link>
          ))}

          <Link
            href={`/bookDemo`}
            className="border p-2 rounded-lg hover:bg-white hover:text-black hover:font-medium hover:border-black border-opacity-30"
          >
            Book a Demo
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;