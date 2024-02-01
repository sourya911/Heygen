import React from "react";
import "../globals.css";
import { FaArrowRight, FaPlay } from "react-icons/fa";
const Usercard2 = ({ imageUrls }) => {
  return (
    <div>
      <div className=""
       style={{ display: "flex", gap: "5px",borderRadius:"30px" ,justifyItems:"center",alignItems:"center"}}>
        {imageUrls.map((imageUrl, index) => (
          <>
          <div className="flex flex-col relative ">
            <div className="demmo flex absolute max-w-[80px] border-r-8 z-11">
              <img
                
                key={index}
                src={imageUrl}
                alt={`Image ${index + 1}`}
                style={{ minWidth: "70px", height: "auto", objectFit: "cover" ,marginLeft:"20px" ,borderRadius:"20px"}}
              />
             
            </div>
            
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Usercard2;
