import Bar from "@/components/Bar";
import CompBanner from "@/components/CompBanner";
import Particlesbackground from "@/components/ParticlesBackground";
import React from "react";

const Company = ({ params }) => {
  // console.log("bar params are : ", params);

  return (
    <div>
      <CompBanner title={"Comapny"} />
      <Bar />
      <div className="w-full h-screen bg-black"></div>

      <Particlesbackground />

      {/* Company */}
    </div>
  );
};

export default Company;
