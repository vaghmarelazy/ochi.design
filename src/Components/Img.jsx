import React from "react";
import Eye from "./Eye";
import Photo from "../EyesBackground.jpg";

function Img() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.5" className="relative -top-[50vh]">
      <div
        className="relavtive w-full h-screen"
        style={{
          backgroundImage: `url(${Photo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div data-scroll data-scroll-section data-scroll-speed=".5" className="absolute w-full h-screen">
          <Eye />
        </div>
      </div>
    </div>
  );
}

export default Img;
