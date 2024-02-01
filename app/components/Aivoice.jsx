import React from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import "../globals.css";
import Buttonn from "./Buttonn";

const Aivoice = () => {
  const arr1 = [
    "Lavi Friendly",
    "Charles Neutral",
    "Ethan Profexxional",
    "Scarlett Professional",
    "Belle Neutral",
    "Alison Cheerful",
  ];

  const arr2 = [
    "Japanese",
    "Spanish",
    "Germany",
    "French",
    "Korean",
    "Italian",
  ];
  return (
    <>
      <div className="container flex flex-col items-start  justify-center">
        <section className="md:flex-col md:gap-3 md:justify-center md:items-center lg:w-1/2 ">
          <h1 className="text-7xl font-8  text-bg2 mb-5">AI voices</h1>
          <p className="text-mn text-2xl text-bg2  w-full h-32 mb-5">
            Select a premium voice across any style or language. Benefit from
            our AI-Driven text reader, infusing human-like intonation and
            inflections with exceptional accuracy.
          </p>

          {/* <div className="flex justify-center items-center bg-mn p-5 bg-mn w-full">
              <img
                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6560d706514c51af627b9c97_how-btn-img.webp"
                width="90px"
                alt=""
              />
          <button className="flex  items-center">
            Get started for free
            <FaArrowRight />
          </button>
        </div> */}
        </section>
        <Buttonn />

        <section className="flex mt-12 justify-end relative flex-col gap-3 ">
          <div className="bg-white w-full container h-auto p-10 max-w-1/2 rounded-xl pb-1">
            <h1 className="text-black text-2xl font-semibold">
              <span className="text-mn">300+</span> voices
            </h1>
            <div className="flex p-2 rounded-lg gap-3 w-[300px]">
              {arr1.map((ar) => {
                return (
                  <>
                    <div className="flex items-center  gap-3 border relative p-3">
                      <h1 className="text-black pt-1">
                        <FaPlay />
                      </h1>
                      <div className="bg-white rounded-md flex text-black justify-center items-center gap-2 ">
                        {ar}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="bg-white w-full container h-auto p-12 justify-center rounded-xl pb-2">
            <h1 className=" text-2xl font-semibold text-black mb-8">
              <span className="text-mn">40+</span> languages
            </h1>
            <div className="flex p-2 rounded-md gap-3 pb-0">
              {arr2.map((ar) => {
                return (
                  <>
                    <div className="flex items-center gap-3 border relative p-3 overflow-hidden">
                      <h1 className="text-black pt-1">
                        <FaPlay />
                      </h1>
                      <div className="bg-white rounded-md flex text-black justify-center items-center gap-2">
                        {ar}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Aivoice;
