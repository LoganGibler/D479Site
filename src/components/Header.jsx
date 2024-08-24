import React, { useState, useEffect } from "react";
import headerImg from "../imgs/beach.jpg";
import { useInView } from "react-intersection-observer";
import subimage1 from "../imgs/subimage1.jpg";
import subimage2 from "../imgs/subimage2.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { ref: visit, inView: visit1 } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  const { ref: taniti, inView: taniti1 } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  const { ref: pic1, inView: pic1View } = useInView({
    triggerOnce: true,
    threshhold: 0.9,
  });

  const { ref: pic2, inView: pic2View } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  const { ref: pic3, inView: pic3View } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  return (
    <div className="flex flex-col">
      <div className="flex justify-center mt-[5rem]">
        <div className="flex flex-col">
          <p
            ref={visit}
            className={`text-blue-400 pr-20 font-bold text-[50px] transition-all delay-100 duration-700 tracking-wider ${
              visit1
                ? "transform opacity-100"
                : "transform translate-x-[-200px] opacity-0  "
            }`}
          >
            Visit
          </p>
          <p
            ref={taniti}
            className={`text-blue-600  font-bold text-[50px] tracking-wider ml-[6rem] transition-all duration-700 delay-400 ${
              taniti1
                ? "transform opacity-100"
                : "transform translate-x-[200px] opacity-0"
            }`}
          >
            Taniti
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-[6rem]">
        <img
          ref={pic1}
          src={subimage1}
          className={`rounded-full mx-7 shadow-xl w-[480px] transition-all duration-700 delay-500 ${
            pic1View ? "opacity-100 transform" : "opacity-0 translate-y-[100px]"
          }`}
        ></img>
        <img
          ref={pic2}
          src={subimage2}
          className={`rounded-full mx-7 shadow-xl w-[480px] transition-all duration-700 delay-700 ${
            pic2View ? "opacity-100 transform" : "opacity-0 translate-y-[100px]"
          }`}
        ></img>
        <img
          ref={pic3}
          src={headerImg}
          className={`rounded-full mx-7 shadow-xl w-[480px] transition-all duration-700 delay-1000 ${
            pic3View ? "opacity-100 transform" : "opacity-0 translate-y-[100px]"
          }`}
        ></img>
      </div>
    </div>
  );
};

export default Header;
