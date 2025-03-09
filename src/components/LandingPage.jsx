import { motion } from "framer-motion";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import slidingBox from "../images/slidingBox.jpg";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-42 px-18">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <motion.img
                  initial={{ width: 0 }}
                  animate={{ width: "7rem" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.9 }}
                  src={slidingBox}
                  className="w-[7rem] h-[5vw] mr-3 -top-[0.3vw] relative rounded-md"
                ></motion.img>
              )}
              <h1 className="flex items-center uppercase text-[7rem] font-['Test_Founders_Grotesk_X-Condensed'] leading-[6.3vw]     tracking-tight">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-30 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "For public and private companies",
        ].map((item, index) => (
          <p
            key={index}
            className="tracking-tight leading-none text-md font-light"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2 group">
          <div className="px-5 py-2 border-[1.5px] border-zinc-600 rounded-full font-light text-md capitalize transition-colors duration-300 group-hover:bg-black group-hover:text-white">
            Start The Project
          </div>
          <div>
            <BsArrowUpRightCircle className="w-10 h-10 text-zinc-600 transition-colors duration-300 group-hover:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
