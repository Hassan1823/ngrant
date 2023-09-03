import React from "react";
import InfoCard from "./InfoCard";
import { founderData, executiveData } from "@/utils/data";

const Leadership = () => {
  return (
    <div className="w-full h-auto bg-black flex flex-col items-center justify-center gap-8 py-10">
      {/* post title  */}
      <div className="flex justify-center items-center gap-4 my-8">
        <div className="border border-orange-800 w-12 h-0"></div>
        <h1 className="">Founders</h1>
        <div className="border border-orange-800 w-12 h-0"></div>
      </div>
      <InfoCard data={founderData} />
      {/* post title  */}
      <div className="flex justify-center items-center gap-4 my-8">
        <div className="border border-orange-800 w-12 h-0"></div>
        <h1 className="">Executives</h1>
        <div className="border border-orange-800 w-12 h-0"></div>
      </div>
      <InfoCard data={executiveData} />
    </div>
  );
};

export default Leadership;
