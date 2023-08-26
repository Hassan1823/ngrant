'use client'

import CompBanner from "@/components/CompBanner";
import React from "react";
import { usePathname } from "next/navigation"; // import usePathname hook


const Careers = () => {
  const pathname = usePathname(); // call usePathname hook to get current URL pathname
  console.log("path is :",pathname); // log the current path name to the console
  
  return (
    <div className="">
      <div className="">
        <CompBanner title={"Careers"}/>
        Careers Main
      </div>
    </div>
  );
};

export default Careers;