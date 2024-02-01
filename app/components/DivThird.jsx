import React from "react";

const DivThird = () => {
  const arr1 = [
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566d9b35fd911cd666cc204_discord.webp",
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656437be31f6f4a6fe2e16a6_zapier.webp",
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656437c09837db5b566a7bae_canva.webp",
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656437bdf32c4fcae5438b29_chatgpt.webp",
  ];
  return (
    <>
      <div className="mt-0 flex gap-7 container">
        <div className="w-1/3 bg-blue-400 p-4 pb-0 flex flex-col max-h-[480px] rounded-2xl">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">Integrations</h1>
            <p className="mt-8">
              Using HeyGen couldn't be easier, streamline your video creation
              process from your favorite platform.
            </p>
          </div>
          <div className="object-cover w-full mt-24">
            
          </div>
        </div>

        <div className="w-2/3 mb-10 bg-white rounded-2xl ">
          <div className="flex flex-col p-3 items-start gap-10">
            <h1 className="text-black text-2xl">Templates for everything</h1>
            <p className="text-xl text-black gap-4 flex w-full">
                <button>Popular</button>
                <button>Learning & development</button>
                <button>Ecommerce</button>
            </p>
          </div>
          <div className="mt-12">
            <video
              src="https://resource.heygencdn.com/homepage/scriptgenai2.mp4"
              autoPlay
              loop
              muted
              className="w-full object-cover rounded-2xl"
            ></video>
          </div>
        </div>
      </div>
    </>
  );
};

export default DivThird;
