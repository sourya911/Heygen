import React from "react";
import { FaPlay } from "react-icons/fa";
import "../globals.css";
const DivFirst = () => {
  return (
    <>
      <section className="flex  gap-8  relative h-auto mb-32">
        <div className="w-[350px] absolute  z-[111]">
          <video
            src="https://resource.heygencdn.com/homepage/vt5s2.mp4"   
            autoPlay
            muted
            className=" aspect-9/16 top-0 right-0 overflow-hidden object-cover rounded-2xl"
          ></video>
          <div className="bg-transparent relative p-3 mt-[-500px]">
            <button className="flex gap-1 items-center mt-[-90px] p-4 mb-7 border rounded-md">
              <FaPlay /> Nikki in Spanish
            </button>

            <h1 className="text-2xl font-semibold mt-64">Video transltator</h1>
            <h3 className="mt-4">
              Effortlessly translate your videos using our one-click solution
              that clones your natural speaking voice and style for seamless
              delivery in other languages.
            </h3>
            <button className="p-4 mt-3 bg-mn">Learn more</button>
          </div>
        </div>
        
        <div className="bg-white items-right p-5 flex flex-col w-[350px] ml-[410px] h-[620px] rounded-2xl">
          <div className="h-1/2">
              <h1 className="text-black text-2xl mt-5">API</h1>
              <h3 className="text-black mt-12 text-xl">Integrate HeyGen's powerful AI capabilities into your product and create amazing avatar videos programmatically with HeyGen's API.</h3>
          </div>
          <div className="h-1/2 mt-10">
            <img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656762e9c1a39be7ceeddf90_feature-p-800.png" className="h-full w-auto object-cover m-0"  />
          </div>
        </div>

      </section>
    </>
  );
};

export default DivFirst;
