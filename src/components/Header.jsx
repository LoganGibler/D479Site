import React, { useState, useEffect } from "react";
import headerImg from "../imgs/beach.jpg";
import { useInView } from "react-intersection-observer";
import subimage1 from "../imgs/subimage1.jpg";
import subimage2 from "../imgs/subimage2.jpg";

const Header = () => {
  const { ref: visit, inView: visit1 } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  const { ref: taniti, inView: taniti1 } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  return (
    <div className="flex flex-col">
      <div className="max-h-[300px] overflow-hidden shadow-lg">
        {" "}
        <img className="" src={headerImg}></img>
      </div>

      <div className="flex justify-center mt-[7rem]">
        <div className="flex flex-col">
          <p
            ref={visit}
            className={`text-blue-700 pr-20 font-bold text-[50px] transition-all delay-100 duration-700 tracking-wider ${
              visit1
                ? "transform opacity-100"
                : "transform translate-x-[-200px] opacity-0  "
            }`}
          >
            Visit
          </p>
          <p
            ref={taniti}
            className={`text-blue-700  font-bold text-[50px] tracking-wider ml-[6rem] transition-all duration-700 delay-500 ${
              taniti1
                ? "transform opacity-100"
                : "transform translate-x-[200px] opacity-0"
            }`}
          >
            Taniti
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
