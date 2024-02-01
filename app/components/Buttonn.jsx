import { FaArrowRight } from "react-icons/fa";

const Buttonn = (props) => {
  
  return (
    <>
      <div className="flex md:flex-col items-center">
        <button className="flex mt-12 items-center w-full justify-center p-3 bg-mn gap-2">
         <img
            src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6560d706514c51af627b9c97_how-btn-img.webp"
            width="90px"
            alt=""
          />
          Get started for free
          <FaArrowRight />
        </button>
      </div>
    </>
  );
};

export default Buttonn;
