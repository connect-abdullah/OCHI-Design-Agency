import React from "react";
// import { motion } from "motion/react"
import ScrollVelocity from "../ScrollVelocity";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".03" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-1 border-b-1 border-zinc-300 flex whitespace-nowrap gap-10 overflow-hidden">
        <ScrollVelocity
          texts={["WE ARE OCHI"]}
          velocity={60}
          className="text-[20vw] leading-none font-['Test_Founders_Grotesk_X-Condensed'] uppercase pt-2 pb-10 -mb-[2vw]"
          stiffness={100}
        />
      </div>
    </div>
  );
};

export default Marquee;
