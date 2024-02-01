"use client"
// import { useState } from "react";
import "../globals.css"
import Typewriter  from "typewriter-effect";

function Videos(props) {
  // const [img,setImg]=useState("https://resource.heygencdn.com/homepage/header_video_josh2.mp4")
  return (
    <>
      <div className="container">
        <div className=" rounded-lg  p-4 flex flex-col z-[500] items-start w-72 mb-1 txt-mn">
          {/* <>{img}</> */}
          <h3 className="text-mn m-3  ">sciript</h3>
          <div className="text-black font-medium">
            <Typewriter options={{
              strings:["Hey there! Welcome to HeyGen - where you can easily create fun,high-quality videos using our AI avatars and voices. In just a few clicks, you can generate custom videos for social media,presentations, education and many more!"],
              loop:true,
              autoStart:true,
              delay:60
            }}/>
            
          </div>
        </div>
        <div className="hero-vid ">
          <video
            className="rounded-lg absolute top-0 left-0 w-[100%] h-[100%] object-cover vd"
            controls
            autoPlay
            muted
          >
            <source src={props.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
export default Videos;
