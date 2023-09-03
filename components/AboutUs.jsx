import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full h-auto bg-black flex flex-col items-center gap-4 py-20">
      {/* <h1 className="text-red-500 hover:text-red-400 font-semibold text-lg">About Us</h1> */}
      <p className="w-[60%] text-center">
        <span className="text-red-500 hover:text-red-400">Outlaw</span> Research
        Labs is a team of passionate individuals sharing a single focus of
        dedication towards evolving the boundaries in the AI/ML space. Our team
        has extensive cybersecurity and engineering experience, collectively
        over <span className="text-red-500 hover:text-red-400">120 years</span>,
        which has led us to focus on security around AI and its current
        landscape/threat-scape. As the world races to adopt new and emerging
        technologies driven by{" "}
        <span className="text-red-500 hover:text-red-400">
          artificial intelligence
        </span>
        , we bring our expertise to the forefront to protect against potential
        risks and threats.
      </p>
    </div>
  );
};

export default AboutUs;
