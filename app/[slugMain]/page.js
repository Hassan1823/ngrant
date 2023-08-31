import Bar from "@/components/Bar";
import CompBanner from "@/components/CompBanner";
import Particlesbackground from "@/components/ParticlesBackground";
import React from "react";

const page = ({ params }) => {
  const slug = params?.slugMain?.replace(/%20/g, " ") || ""; // replace '-' with ' '
  // console.log("slug params are : ", slug);
  return (
    <>
      <div>
        <CompBanner title={slug} />
        <Bar title={slug} />
        {/* Remaining page */}
      </div>
      <Particlesbackground />
    </>
  );
};

export default page;
