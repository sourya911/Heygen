import React from "react";
import { FaArrowRight, FaPlay, FaVideo } from "react-icons/fa";
import "../globals.css"

const Instantavt = (props) => {
  return (
    <>
    
      <div className="flex md:flex-col items-start gap-3">
        <h1 className="text-white text-6xl">{props.head}</h1>
        <p className="text-3xl text-[#bbadff]">{props.txt}</p>
        <div className="flex justify-center items-center bg-mn p-5">
          <button className="flex gap-2 items-center">
            Get started for free
            <FaArrowRight />
          </button>
        </div>
        <button className="flex items-center justify-around absolute  p-4 bg-play2 rounded-md m-2 gap-3 mt-52 ml-4">
            <FaPlay /> Demo
          </button>
        <video 
          src={props.lin}
          type="video/mp4"
          controls autoPlay muted
        />
      </div>
    </>
  );
};

export default Instantavt;
