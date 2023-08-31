"use client";

import React, { useState } from "react";

// local imports
import { companyItems } from "@/utils/data";
import Link from "next/link";

const Bar = ({ title }) => {
  const [selectItem, setSelectItem] = useState(title);
  const getClickedItem = (item) => {
    setSelectItem(item);
  };
  // console.log("Selected item is : ", selectItem);
  return (
    <>
      <div className="border w-full h-14 flex justify-center items-center gap-8">
        {/* bar comp for company page */}
        {companyItems?.map((items, index) => (
          <>
            <Link
              key={index}
              // href={`#`}
              href={`/${items.name}`}
              className={`${
                items.color === "red" ? "text-red-500" : "text-white"
              } `}
              onClick={() => getClickedItem(items.name)}
            >
              {items.name}
            </Link>
            {index !== companyItems.length - 1 && <span>|</span>}
          </>
        ))}
      </div>
      {/* showing diff pages  */}
      {selectItem === "About Us" ? (
        <>about us</>
      ) : selectItem === "Missions Statement" ? (
        <>mission statement</>
      ) : selectItem === "Leadership" ? (
        <>Leadership</>
      ) : (
        <>all</>
      )}
    </>
  );
};

export default Bar;
