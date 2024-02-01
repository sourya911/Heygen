"use client";
import Typewriter from "typewriter-effect";
import React from "react";
import "../globals.css";
import { FaArrowRight } from "react-icons/fa";

const Genratevc = () => {
  return (
    <>
      <section className=" flex items-center md:w-full justify-center p-5">
        <div className="bg-sc p-3 mt-2 w-[428px] h-[300px] flex flex-col justify-between rounded-md txt-mn">
          <h1 className="text-mn text-xl ">Script</h1>
          <div className="text-black text-4xl w-[364px]">
            <Typewriter
              options={{
                strings: [
                  "Hey there! Welcome to HeyGen! This is what we sound like in another language",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
          <button className="card-bg rounded-3xl p-4 flex items-center mb-1 gap-3 w-3/4 justify-center">
            Generate Voice
            <FaArrowRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default Genratevc;
