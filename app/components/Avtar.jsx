import React from "react";
import "../globals.css";
import { FaArrowRight, FaVideo } from "react-icons/fa";
import "../globals.css"


const Avtar = () => {
  return (
    <>
      <div className="card-bg container h-auto pb-5 flex flex-col items-center">
        <h1 className=" text-6xl text-white font-semibold mt-32">AI avatars</h1>
        <p className="mt-2 text-gray-500">
          Choose your perfect avatar covering different ethnicities, ages, poses
          and clothes.
        </p>
        <div className="flex md:flex-col items-center">
        <button className="flex mt-12 items-center p-3 bg-mn gap-2">
            <img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6560d706514c51af627b9c97_how-btn-img.webp" width="90px" alt="" />
            Get started for free
            <FaArrowRight/>
        </button>
        <p className="m-5">or</p>
        <button className="flex items-center p-3 border-y-white bg-transparent gap-2">
           <FaVideo/>
            Create your own customer avatar
        </button>
        </div>
      </div>
    </>
  );
};

export default Avtar;
