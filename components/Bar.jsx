import React from "react";

// local imports
import { companyItems } from "@/utils/data";
import Link from "next/link";

const Bar = () => {
  return (
    <div className="border w-full h-14 flex justify-center items-center gap-8">
      {companyItems?.map((items, index) => (
        <>
          <Link
            key={index}
            href={`/${items.name}`}
            className={`${
              items.color === "red" ? "text-red-500" : "text-white"
            } `}
          >
            {items.name}
          </Link>
          {index !== companyItems.length - 1 && <span>|</span>}
        </>
      ))}
    </div>
  );
};

export default Bar;
