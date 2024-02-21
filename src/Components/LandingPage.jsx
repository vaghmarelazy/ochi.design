import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.5" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-10">
        {["we create", "eye opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease:[0.76, 0, 0.24, 1],duration: 1 }}
                    className="bg-red-700 w-[8vw] h-[5.6vw] mr-[1vw] rounded-md relative top-[1vw]"
                  ></motion.div>
                )}
                <h1 className="thead text-[9vw] leading-[.75] font-Grotest uppercase">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] mt-32 border-zinc-800 flex justify-between items-center px-10 py-4">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return <p className="cursor-pointer text-md font-light leading-none">{item}</p>;
        })}
        <div className="flex items-center gap-2">
          <div className="cursor-pointer btn px-5 py-2 border-[1px] rounded-full border-zinc-500 text-sm capitalize">
            START THE PROJECT
          </div>
          <div className="cursor-pointer w-10 h-10 rounded-full border-[1px] border-zinc-500 flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
