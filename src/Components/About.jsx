import { motion } from "framer-motion";
import React from "react";
import { GoDotFill } from "react-icons/go";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".5" className="relative z-[2] -top-[40vh] w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-zinc-900">
      <h1 className="shead px-14 text-[3.5vw] leading-none  mr-[15vw] mb-12">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="border-b-[2px] border-[#a2b177]"></div>
      <div className="flex py-4 px-10 shead mb-24">
        <div className="w-[50%] ">What you can expect:</div>
        <div className="w-[25%] ">
          <div className="mb-10">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </div>
          <div>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </div>
        </div>
      </div>
      <div className="border-t-[2px] border-[#a2b177] w-full flex">
        <div  className="w-1/2 px-12 ">
            <h1 className="text-[3.5vw] font-normal shead mb-2">Our approach:</h1>
            <button className=" text-[1vw] bg-[#2e2e2e] text-white py-4 px-6 rounded-full flex items-center gap-8 uppercase">Read more 
            <div><GoDotFill/></div></button>
        </div>
        <div className="w-[45vw] mt-5 rounded-3xl h-[80vh] ">
          <img className="w-full h-full object-cover overflow-hidden rounded-xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
      
    </div>
  );
}

export default About;
