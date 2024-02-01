import React from "react";
import "../globals.css"
import { FaCircleCheck } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
const Safety = () => {
  const select = [
    {
      t1: "Ethics statement",
      t2: "Discover our ethical approach to AI, emphasizing acceptable use and transparency. View more.",
    },
    {
      t1: "Security portal",
      t2: "Learn how we protect your data and secure our AI technology.  View more.",
    },
    {
      t1: "Privacy policy",
      t2: "See how we respect and protect your data in compliance with industry standards.  View more.",
    },
    {
      t1: "Content moderation",
      t2: "Find out how we promote a safe, respectful digital environment.  View more.",
    },
  ];
  return (
    <>
      <div className="container bg-mn w-full justify-center p-3">
        <p className="text-green-400 text-4xl pl-80 mt-4"><FaLock/></p>
        <h1 className="mt-2 pl-20 text-6xl  p-2 mb-7">Safety at the core of our technology</h1>
        <p className="text-xl p-2">
          At HeyGen, security isn't just a consideration—it's a commitment.
          That's why we're proud to be SOC 2 compliant, an industry standard for
          data protection.
        </p>
        <p className="text-xl p-2">
          Our AI video platform is built with your privacy and protection in
          mind, so you can trust us with your valuable data.
        </p>

        <div className="container flex flex-col">
            {select.map((obj)=>{
                return (
                    <div className="flex gap-1 items-start justify-normal">
                    <p className="text-3xl text-green-400 w-40 mt-3"><FaCircleCheck/></p>
                    <div className="p-3">
                        <p>{obj.t1}</p>
                        <p>{obj.t2}</p>
                    </div>
                    </div>
                )    
            })}
        </div>
      </div>
    </>
  );
};

export default Safety;
