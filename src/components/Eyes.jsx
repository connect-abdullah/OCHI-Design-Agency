import React, { useEffect, useState} from "react";
import EyesBG from "../images/EyesBG.jpg";

export default function Eyes() {

    // Eye Tracking Function
    const [rotate, setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            let angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
            
            // Bcz atan2 gives value in radian and by multiplying it with 180/pi it coverts it to degrees

            setRotate(angle-180);
        })
    })

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7"
        className="relative h-full w-full bg-center bg-cover"
        style={{ backgroundImage: `url(${EyesBG})` }}>
            
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
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
