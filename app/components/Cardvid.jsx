import React from "react";
import { FaPlay, FaArrowRight } from "react-icons/fa";
import "../globals.css";
import Buttonn from "./Buttonn";

const Cardvid = () => {
  return (
    <>
    <div className="lg:flex md:flex-col">
      <div className="card-vd md:w-96">
        <a href="https://resource.heygencdn.com/website/vera_remove/howitworks_new2.mp4">
          <button className="flex items-center justify-around absolute z-50 p-4 bg-play2 rounded-md m-2">
            <FaPlay /> Demo
          </button>
        </a>
        <video
          width="800"
          className="relative rounded-lg flex mt-10"
          controls
          autoPlay
          muted
        >
          <source
            src="https://resource.heygencdn.com/website/vera_remove/howitworks_new2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <section className="container mt-10">
        <div className="flex flex-col gap-3 justify-center">
          <h2 className="text-6xl font-semibold text-bg2 mb-4">How it works</h2>
          <h2 className="text-bg2 text-2xl mt-3">
            Whether you're a professional or beginner, you can create stunning
            videos in minutes instead of hours.
          </h2>
          <Buttonn />
        </div>
      </section>
      </div>
    </>
  );
};

export default Cardvid;
