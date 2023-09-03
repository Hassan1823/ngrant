import React from "react";

const MissionsStatement = () => {
  return (
    <div className="w-full h-auto bg-black flex flex-col items-center gap-4 py-20">
      {/* <h1 className="text-red-500 hover:text-red-400 font-semibold text-lg">About Us</h1> */}
      <p className="w-[60%] text-center">
        <span className="text-red-500 hover:text-red-400">Our mission</span> at
        Outlaw Research Labs is to protect the clients data and emerging AI
        technology from any potential misuse or exploitation. As a trusted
        partner in the rapidly-evolving{" "}
        <span className="text-red-500 hover:text-red-400">AI landscape</span>,
        we are dedicated to providing the most resilient security solutions that
        are customized to exactly meet the unique needs of each client we serve.
        We put the
        <span className="text-red-500 hover:text-red-400">{" Eye"}</span> in AI,
        serving as the vigilant protector of valuable assets for each client
        that works with us.
      </p>
    </div>
  );
};

export default MissionsStatement;
