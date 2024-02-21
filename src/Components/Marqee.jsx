import { motion } from "framer-motion";
import React from "react";

function Marqee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-[5vw] bg-[#004D43] rounded-tr-3xl rounded-tl-3xl"
    >
      <div className="text border-t-2 border-b-2 border-zinc-500 flex whitespace-nowrap overflow-hidden gap-10 mt-8">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="thead text-[30vw] uppercase font-bold leading-none -mt-16 -mb-[2rem]"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="thead text-[30vw] uppercase font-bold leading-none -mt-16 -mb-[2rem]"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="thead text-[30vw] uppercase font-bold leading-none -mt-16 -mb-[2rem]"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marqee;
