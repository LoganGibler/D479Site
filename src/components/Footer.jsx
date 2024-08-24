import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = ({ setActiveLink }) => {
  const navigate = useNavigate();
  return (
    <div className="absolute bottom-100% w-[100%] h-[250px] mt-[10rem] bg-stone-700">
      <div className="">
        <div className="flex justify-center">
          <div className="flex flex-col text-slate-200 mx-10 mt-4">
            <h1 className="text-slate-200 font-semibold text-[25px]">
              Quick Links
            </h1>
            <a
              className="hover:cursor-pointer my-1.5"
              onClick={() => {
                navigate("/");
                setActiveLink("/");
              }}
            >
              <span className="font-semibold pr-1">Home: </span>
              Link to an overview of the island's history and culture.
            </a>
            <a
              className="hover:cursor-pointer my-1.5"
              onClick={() => {
                navigate("/Transportation");
                setActiveLink("/Transportation");
              }}
            >
              <span className="font-semibold pr-1">Transportation: </span>
              Link to information on how to get to and around Taniti.
            </a>
            <a
              className="hover:cursor-pointer my-1.5"
              onClick={() => {
                navigate("/Activities");
                setActiveLink("/Activities");
              }}
            >
              <span className="font-semibold pr-1">Activities: </span>
              Link to activities and entertainment options.
            </a>
            <a
              className="hover:cursor-pointer my-1.5"
              onClick={() => {
                navigate("/Lodging");
                setActiveLink("/Lodging");
              }}
            >
              <span className="font-semibold pr-1">Lodging: </span>
              Link to lodging & accommodation options.
            </a>
          </div>
          <div className="flex flex-col text-slate-200 mx-10 mt-4">
            <h1 className="font-semibold text-[25px]">Contact Information</h1>
            <p className="my-1.5">Support Line: 555-555-5555</p>
            <p className="my-1.5">HQ Address: Millcreek, UT 84107</p>
            <p className="my-1.5">Email: TanitiTourism@TourismRegister.com</p>
          </div>
        </div>

        <div className="flex justify-center">
          {" "}
          <p className="absolute bottom-0 pb-1 text-slate-200">
            © 2024 Taniti Island Tourism. All Rights Reserved. Created by Logan
            Gibler. View Image sources{" "}
            <a
              className="font-bold text-blue-500 hover:cursor-pointer"
              onClick={() => {
                navigate("/Sources");
              }}
            >
              Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
