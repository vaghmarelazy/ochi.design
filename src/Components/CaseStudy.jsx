import React from "react";
import { GoDotFill } from "react-icons/go";

function CaseStudy() {
  return (
    <div className="w-full relative -top[100vw] ">
      <div className="flex items-center justify-center my-16 ">
        <button className="shead text-[1vw] bg-[#2e2e2e] text-white py-6 px-8 rounded-full flex items-center gap-8 uppercase">
          VIEW ALL CASE STUDIES
          <div>
            <GoDotFill />
          </div>
        </button>
      </div>
    </div>
  );
}

export default CaseStudy;
