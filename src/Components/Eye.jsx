import React, { useEffect, useState } from "react";

function Eye() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="  absolute z-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
        <div className=" flex items-center justify-center w-[15vw] h-[15vw] bg-white rounded-full">
          <div className=" relative w-2/3 h-2/3 bg-black rounded-full">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-6"
            >
              <div className=" relative flex items-center justify-center w-6 h-6 bg-white rounded-full"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[1.5vw]">
              Play
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center w-[15vw] h-[15vw] bg-white rounded-full">
          <div className="relative w-2/3 h-2/3 bg-black rounded-full">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-6"
            >
              <div className=" relative flex items-center justify-center w-6 h-6 bg-white rounded-full">
                {/* <div className="text-[1.5vw]">Play</div> */}
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[1.5vw]">
              Play
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eye;
