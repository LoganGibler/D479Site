import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import headerImg from "../imgs/croppedbeach.jpg";
import busImg from "../imgs/transportationsmall.jpg";
import bchImg from "../imgs/beach2.jpg";

const Navbar = ({ activeLink, setActiveLink }) => {
  const navigate = useNavigate();
  console.log(activeLink);

  useEffect(() => {
    navigate("/");
    setActiveLink("/");
  }, []);

  return (
    <div>
      <div
        className={`overflow-hidden shadow-lg ${
          activeLink === "/" ? "max-h-[150px]" : "max-h-[300px]"
        }`}
      >
        {" "}
        {activeLink === "/" ? <img className="" src={headerImg}></img> : null}
        {activeLink === "/Transportation" ? (
          <img className="w-full" src={busImg}></img>
        ) : null}
        {activeLink === "/Activities" ? (
          <img className="w-full" src={headerImg}></img>
        ) : null}
        {activeLink === "/Lodging" ? (
          <img className="w-full" src={bchImg}></img>
        ) : null}
      </div>
      <div className="flex justify-between text-white font-semibold px-[20rem] py-2 bg-stone-700">
        <a
          className={`rounded-lg px-2 py-0.5 ${
            activeLink === "/"
              ? "bg-white text-stone-700"
              : "hover:bg-white hover:text-stone-700 hover:cursor-pointer"
          }`}
          onClick={() => {
            navigate("/");
            setActiveLink("/");
          }}
        >
          Home
        </a>
        <a
          className={`rounded-lg px-2 py-0.5 ${
            activeLink === "/Transportation"
              ? "bg-white text-stone-700"
              : "hover:bg-white hover:text-stone-700 hover:cursor-pointer"
          }`}
          onClick={() => {
            navigate("/Transportation");
            setActiveLink("/Transportation");
          }}
        >
          Transportation
        </a>
        <a
          className={`rounded-lg px-2 py-0.5 ${
            activeLink === "/Activities"
              ? "bg-white text-stone-700"
              : "hover:bg-white hover:text-stone-700 hover:cursor-pointer"
          }`}
          onClick={() => {
            navigate("/Activities");
            setActiveLink("/Activities");
          }}
        >
          Activities
        </a>
        <a
          className={`rounded-lg px-2 py-0.5 ${
            activeLink === "/Lodging"
              ? "bg-white text-stone-700"
              : "hover:bg-white hover:text-stone-700 hover:cursor-pointer"
          }`}
          onClick={() => {
            navigate("/Lodging");
            setActiveLink("/Lodging");
          }}
        >
          Lodging
        </a>
      </div>
    </div>
  );
};

export default Navbar;
