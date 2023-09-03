import React from "react";

const CompBanner = ({ title }) => {
  return (
    <div className="border w-full h-[45vh] flex justify-center items-center">
      <span className="text-white font-medium text-6xl uppercase">{title}</span>
    </div>
  );
};

export default CompBanner;
