import React, { useEffect, useState } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import ScrollFloat from '../ScrollFloat';

export default function ProjectEyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      // Bcz atan2 gives value in radian and by multiplying it with 180/pi it coverts it to degrees

      setRotate(angle - 180);
    });
  });
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.23"  className="eyes w-full h-screen overflow-hidden relative">
      <div className="relative h-full w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">

          <h1 className="text-black text-9xl top-20 absolute items-center uppercase w-[48%] font-['Test_Founders_Grotesk_X-Condensed'] font-extrabold leading-none px-10">
          <ScrollFloat
  animationDuration={1}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.03}
  containerClassName="text-[2px]"
>
Ready To Start The Project ?
</ScrollFloat>
          </h1>
          <button className="bg-[#212121] w-md gap-7 items-center mb-8 text-white py-5 px-6 flex rounded-full hover:bg-[#000000] font-extralight text-sm bottom-20 right-[11%]  absolute justify-between">
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
            <div className="flex gap-2 items-center">START NOW<BsArrowUpRightCircle className="w-5 h-5 text-white"/></div>
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>

          <div className="absolute flex gap-10 top-[35%] left-1/2 translate-x-[20%] -translate-y-[50%]">
            <div className="flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
                <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative">
                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 w-full h-10">
                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
                </div>
                </div>
            </div>
            <div className="flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
                <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative">
                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 w-full h-10">
                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
