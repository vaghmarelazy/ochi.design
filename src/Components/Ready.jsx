import React from "react";
import Eye from "./Eye";
import { GoDotFill } from "react-icons/go";

function Ready() {
  return (
    <div data-scroll data-scroll-speed=".5" className="w-full h-[150vh] -top-[140vh] z-[99] bg-[#CDEA68] rounded-3xl relative">
      <div className="w-full h-screen text-center pt-32 relative">
        {["READY", "TO START"].map((item, index) => (
          <span className="thead w-full h-full text-[15vw] leading-[.75] text-zinc-800 line-h text-center">
            {item}
            <br />
          </span>
        ))}
        <span className="thead w-full h-screen text-[15vw] leading-[.75] text-zinc-800 line-h text-center">
          THE PROJECT <span>?</span>
        </span>
        <div data-scroll data-scroll-speed=".8" className="absolute w-full h-screen top-0">
          <Eye />
        </div>
      </div>
      <div className="w-full text-center items-center justify-center flex ">
        <button className="shead flex items-center gap-5 text-center justify-center border-[1px] border-zinc-800 py-3 px-5 text-[1.2vw] rounded-full bg-zinc-800">START THE PROJECT <GoDotFill/></button>
      </div>
      <div className="w-full text-center items-center justify-center flex mt-5 text-zinc-800 ">
        OR
      </div>
      <div className="w-full text-center items-center justify-center flex mt-5">
        <button className="shead flex items-center gap-5 text-center justify-center border-[1px] text-zinc-800 border-zinc-800 py-3 px-5 text-[1.2vw] rounded-full ">HELLO@OCHI.DESIGN<GoDotFill/></button>
      </div>
      
    </div>
  );
}

export default Ready;
