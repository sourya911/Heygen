import React from "react";
import "../globals.css";
import { FaArrowRight, FaPlay } from "react-icons/fa";
const Usercard = ({ imageUrls }) => {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px",borderRadius:"30px" }}>
        {imageUrls.map((imageUrl, index) => (
          <>
          <div className="flex flex-col relative">
            <div className="demmo flex absolute max-w-[180px] border-r-8 z-11">
              <img
                key={index}
                src={imageUrl}
                alt={`Image ${index + 1}`}
                style={{ minWidth: "180px", height: "263px", objectFit: "cover" ,borderRadius:"20px"}}
              />
             
            </div>
            <h1 className=" p-5 ml-3 z-22 relative top-[-100px] w-[150px] align-middle flex items-center gap-3 rounded-lg bg-[#0c062c80]  blur-[0.1px] transition-all duration-300">
              Customize
              <FaArrowRight/>
              </h1>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Usercard;
