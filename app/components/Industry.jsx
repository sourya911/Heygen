import React from "react";
import "../globals.css";
import Usercard2 from "./Usercard2";
const Industry = () => {
  const img = [
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a0394c8c9dbd18f2835_users-love-us%204.svg",
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a0398f36d836d5cad57_NaturalLanguageProcessing(NLP)_BestUsability_Total.svg",
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a03716ff72e09e1b1de_NaturalLanguageProcessing(NLP)_EasiestToUse_EaseOfUse.svg",
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a03abe8100901131b16_TexttoSpeech_BestMeetsRequirements_MeetsRequirements.svg",
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a03f1c2220b60bbbdf8_NaturalLanguageProcessing(NLP)_Leader_Leader.svg",
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a04984ffc68fed12227_TexttoSpeech_HighPerformer_Enterprise_HighPerformer.svg",
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a03bf6c7d2cf9ff627f_TexttoSpeech_HighPerformer_Mid-Market_HighPerformer.svg",
  ];
  return (
    <>
      <div>
        <h1 className="container text-6xl mt-20 text-black">
          A <span className="text-mn ">beloved</span> industry leader
        </h1>
        <h2 className="text-2xl text-black ml-40 my-20">Over 15,000 5-star reviews from across the internet</h2>
        <div className="flex w-[120px]">
        <Usercard2 imageUrls={img}/>
        </div>
        </div>
    </>
  );
};

export default Industry;
