import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import CaseStudy from "./CaseStudy";
import Cards from "./Cards";
import { motion } from "framer-motion";

function Featured() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCardHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div data-scroll data-scroll-speed=".7" className="relative z-10 bg-zinc-800 rounded-3xl -top-[90vh]">
      <div className="py-10 px-10 mt-10 border-b-[1px] border-zinc-700">
        <h1 className="shead text-6xl">Featured projects</h1>
      </div>
      <div className="container flex">
        <div className="w-1/2 px-10">
          <h1 className="py-5 flex items-center gap-2">
            <GoDotFill />
            FYDE
          </h1>
        </div>
        <div className="w-1/2 px-10">
          <h1 className="py-5 flex items-center gap-2">
            <GoDotFill />
            VISE
          </h1>
        </div>
      </div>
      <div className="cardcontainer relative px-10 w-full h-[80vh] flex gap-6">
        <h1 className="thead left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[#CDEA68] z-[9] absolute text-8xl overflow-hidden">
          {"FYDE".split("").map((item, index) => (
            <motion.span
              key={index}
              initial={{ y: "100%" }}
              animate={hoveredIndex === 0 ? { y: "0" } : { y: "100%" }}
              transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
              className="inline-block"
            >
              {item}
            </motion.span>
          ))}
        </h1>
        <div
          onMouseEnter={() => handleCardHover(0)}
          onMouseLeave={() => handleCardHover(null)}
          className="w-1/2 h-full rounded-xl cursor-pointer"
        >
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
            alt=""
          />
        </div>

        <h1 className="thead left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[#CDEA68] z-[9] absolute text-8xl overflow-hidden">
          {"VISE".split("").map((item, index) => (
            <motion.span
              key={index}
              initial={{ y: "100%" }}
              animate={hoveredIndex === 1 ? { y: "0" } : { y: "100%" }}
              transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
              className="inline-block"
            >
              {item}
            </motion.span>
          ))}
        </h1>
        <div
          onMouseEnter={() => handleCardHover(1)}
          onMouseLeave={() => handleCardHover(null)}
          className="w-1/2 h-full rounded-xl overflow-hidden cursor-pointer"
        >
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex px-10 py-5">
        <div className="flex gap-3 w-1/2">
          {["AUDIT", "copywriting", "sales deck", "slides design"].map(
            (item, index) => (
              <h1
                key={index}
                className="uppercase border px-2 py-1 rounded-full cursor-pointer"
              >
                {item}
              </h1>
            )
          )}
        </div>
        <div className="flex gap-3 w-1/2">
          {["AUDIT", "company presentation"].map((item, index) => (
            <h1
              key={index}
              className="uppercase border px-2 py-1 rounded-full cursor-pointer"
            >
              {item}
            </h1>
          ))}
        </div>
      </div>
      <div className="container flex">
        <div className="w-1/2 px-10">
          <h1 className="py-5 flex items-center gap-2">
            <GoDotFill />
            TRAWA
          </h1>
        </div>
        <div className="w-1/2 px-10">
          <h1 className="py-5 flex items-center gap-2">
            <GoDotFill />
            PREMIUM BLEND
          </h1>
        </div>
      </div>
      <div className="cardcontainer relative px-10 w-full h-[80vh] flex gap-6">
        <h1 className="thead left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[#CDEA68] z-[9] absolute text-8xl overflow-hidden">
          {"TRAWA".split("").map((item, index) => (
            <motion.span
              key={index}
              initial={{ y: "100%" }}
              animate={hoveredIndex === 2 ? { y: "0" } : { y: "100%" }}
              transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
              className="inline-block"
            >
              {item}
            </motion.span>
          ))}
        </h1>
        <div
          onMouseEnter={() => handleCardHover(2)}
          onMouseLeave={() => handleCardHover(null)}
          className="w-1/2 h-full rounded-xl cursor-pointer"
        >
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
            alt=""
          />
        </div>

        <h1 className="thead left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[#CDEA68] z-[9] absolute text-8xl overflow-hidden">
          {"PREMIUM BLEND".split("").map((item, index) => (
            <motion.span
              key={index}
              initial={{ y: "100%" }}
              animate={hoveredIndex === 3 ? { y: "0" } : { y: "100%" }}
              transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
              className="inline-block"
            >
              {item}
            </motion.span>
          ))}
        </h1>
        <div
          onMouseEnter={() => handleCardHover(3)}
          onMouseLeave={() => handleCardHover(null)}
          className="w-1/2 h-full rounded-xl cursor-pointer"
        >
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex px-10 py-5">
        <div className="flex gap-3 w-1/2">
          {["brand itentity", "design research", "investor deck"].map(
            (item, index) => (
              <h1
                key={index}
                className="uppercase border px-2 py-1 rounded-full cursor-pointer"
              >
                {item}
              </h1>
            )
          )}
        </div>
        <div className="flex gap-3 w-1/2">
          {["AUDIT", "branded template"].map((item, index) => (
            <h1
              key={index}
              className="uppercase border px-2 py-1 rounded-full cursor-pointer"
            >
              {item}
            </h1>
          ))}
        </div>
      </div>
      <CaseStudy />
      <Cards />
    </div>
  );
}

export default Featured;
