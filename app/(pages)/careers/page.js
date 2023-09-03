"use client";

import CompBanner from "@/components/CompBanner";
import React from "react";
// import { usePathname } from "next/navigation"; // import usePathname hook
import Particlesbackground from "@/components/ParticlesBackground";

const Careers = () => {
  // const pathname = usePathname(); // call usePathname hook to get current URL pathname
  // console.log("path is :",pathname); // log the current path name to the console

  return (
    <div>
      <div className="">
        <CompBanner title={"Careers"} />
      </div>
      <div className="w-full h-screen bg-black">hello</div>
      <Particlesbackground />
    </div>
  );
};

export default Careers;
