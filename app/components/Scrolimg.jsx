import React from "react";
import Usercard from "./Usercard";
const Scrolimg = () => {
  const imgs = [
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd403de1871d2d426cb_07.webp",

    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cee111dd4df1ef2b15b_25.webp",

    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd2a7d01fc94a727fab_06.webp",

    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd7da46e743b668a1d5_12.webp",
    ,
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ccf7db78031ca7c4c2d_01.webp",

    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65854d2b5bd2e3203e00e948_Avatar.webp",

    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65675bc0bdd2b122ad7e25e5_Avatar-10.webp",

    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce5f05eb306f94cdf5b_22.webp",

    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65675bbbb99d6f30f6127a6c_Avatar-7.webp",

    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce4d5b2d0fa8af4ca2d_20.webp",
  ];
  return (
    <>
      <div className="rounded-md">
        <Usercard imageUrls={imgs} />
       
      </div>
    </>
  );
};

export default Scrolimg;
