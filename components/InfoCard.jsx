import Image from "next/image";
import React, { useState, useEffect } from "react";

// local imports
// import { founderData } from "@/utils/data";
// console.table(infoData);

const InfoCard = ({ data }) => {
  const infoData = data;
  const [activeIndex, setActiveIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  // Add a delay before showing the popup (in milliseconds)
  const popupDelay = 500; // Adjust the delay as needed

  useEffect(() => {
    let timer;
    if (isMouseOver) {
      timer = setTimeout(() => {
        setShowPopup(true);
      }, popupDelay);
    } else {
      clearTimeout(timer); // Clear the timer if the mouse leaves before the delay
      setShowPopup(false);
    }

    return () => clearTimeout(timer);
  }, [isMouseOver, popupDelay]);

  const handleMouseEnter = (index) => {
    setIsMouseOver(true);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
    setActiveIndex(null);
  };

  return (
    <div className="w-full h-auto flex flex-wrap gap-8 justify-center items-center text-center">
      {infoData?.map((data, index) => {
        const isHovered = index === activeIndex;
        return (
          <div
            key={index}
            className="group w-[20%] h-[300px] p-3 cursor-pointer flex flex-col items-center justify-center gap-2 relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {/* dp */}
            <Image
              src={data.imageHref}
              alt="dp"
              width={70}
              height={70}
              className="border rounded-full object-contain blur-sm group-hover:blur-none group-hover:duration-300"
            />

            {/* name */}
            <h1 className="text-sm font-semibold">{data.name}</h1>

            {/* seat / post */}
            <h1 className="text-sm font-normal flex flex-col justify-center items-center">
              {data.post} 
              <span className="font-semibold">{data.shortPost}</span>
            </h1>

            {/* Popup */}
            {isHovered && (
              <div
                className={`absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80 flex items-center justify-center transition-opacity duration-300 ${
                  showPopup ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="bg-gray-600 p-4 rounded shadow-md">
                  <Image
                    src={data.imageHref}
                    alt="dp"
                    width={40}
                    height={40}
                    className="border rounded-full object-contain blur-sm group-hover:blur-none group-hover:duration-300 mx-auto"
                  />
                  <h2 className="text-sm font-semibold">{data.name}</h2>
                  <div
                    className="overflow-auto" // Use overflow-auto to enable scrolling
                    style={{
                      maxHeight: "250px", // Set a fixed height for the container
                      scrollbarWidth: "thin", // Use thin scrollbar
                      scrollbarColor:
                        "rgba(155, 155, 155, 0.5) rgba(255, 255, 255, 0.1)", // Customize scrollbar colors
                      overflowY: "auto", // Add this style for cross-browser compatibility
                    }}
                  >
                    <style>
                      {`
                /* Custom scrollbar styles */
                ::-webkit-scrollbar {
                  width: 6px;
                }

                ::-webkit-scrollbar-thumb {
                  background-color: rgba(155, 155, 155, 0.5);
                  border-radius: 3px;
                }

                ::-webkit-scrollbar-track {
                  background-color: rgba(255, 255, 255, 0.1);
                }
              `}
                    </style>
                    <span className="text-[10px] -leading-[2px]">
                      {data.infoDesc}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default InfoCard;
