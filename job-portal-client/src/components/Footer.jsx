import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRedhat } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { IoRemoveOutline } from "react-icons/io5";
import { FcPositiveDynamic } from "react-icons/fc";

const Footer = () => {
  return (
    <div>
      <div className="main-footer h-[1200px] lg:h-[300px] bg-gray-700 grid  lg:grid-cols-4  py-7 pl-3">
        <div>
          <h1 className="uppercase font-bold text-xl flex gap-2 text-white">
            {" "}
            <span className="">
              <FcPositiveDynamic />
            </span>
            Job Uplift
          </h1>
          <p className="text-slate-300 py-4">
            Thousands of jobs in the computer, engineering and technology
            sectors are waiting for you.
          </p>
          <div className="flex justify-start items-center text-gray-200 gap-6">
            <p className="hover:text-slate-100 cursor-pointer ">
              <FaFacebook />
            </p>
            <p className="hover:text-slate-100 cursor-pointer ">
              <FaTwitter />
            </p>
            <p className="hover:text-slate-100 cursor-pointer ">
              <FaInstagram />
            </p>
            <p className="hover:text-slate-100 cursor-pointer ">
              <FaRedhat />
            </p>
            <p className="hover:text-slate-100 cursor-pointer ">
              <FaWhatsapp />
            </p>
          </div>
          <p className="text-slate-300 pt-4 cursor-pointer hover:text-slate-100">
            +91 48239423947
          </p>
          <p className="text-slate-300  cursor-pointer hover:text-slate-100">
            +81 48239423947
          </p>
        </div>

        <div className="p">
          <h1 className="text-white text-xl font-bold ">
            Frequently asked Question
          </h1>
          <ul className="text-slate-300 py-4 space-y-2">
            <li className="flex items-center cursor-pointer hover:text-slate-100">
              <IoRemoveOutline className="w-6 " />
              Privacy & Security
            </li>
            <li className="flex items-center cursor-pointer hover:text-slate-100">
              <IoRemoveOutline className="w-6 " />
              Terms & Service
            </li>
            <li className="flex items-center cursor-pointer hover:text-slate-100">
              <IoRemoveOutline className="w-6 " />
              Communications
            </li>
            <li className="flex items-center cursor-pointer hover:text-slate-100">
              <IoRemoveOutline className="w-6 " />
              Referal Teams
            </li>
            <li className="flex items-center cursor-pointer hover:text-slate-100">
              <IoRemoveOutline className="w-6 " />
              Lending License
            </li>
            <li className="flex items-center cursor-pointer hover:text-slate-100">
              <IoRemoveOutline className="w-6 " />
              Disclaimers
            </li>
          </ul>
        </div>
        <div className="p">
          <h1 className="text-white text-xl font-bold ">Find Jobs</h1>
          <ul className="text-slate-300 py-4 space-y-2">
            <li className="flex items-center cursor-pointer hover:text-slate-100">
              <IoRemoveOutline className="w-6 " />
              India Jobs
            </li>
            <li className="flex items-center cursor-pointer hover:text-slate-100">
              <IoRemoveOutline className="w-6 " />
              USA Jobs
            </li>
            <li className="flex items-center cursor-pointer hover:text-slate-100">
              <IoRemoveOutline className="w-6 " />
              Russia Jobs
            </li>
            <li className="flex items-center cursor-pointer hover:text-slate-100">
              <IoRemoveOutline className="w-6 " />
              Israel Jobs
            </li>
            <li className="flex items-center cursor-pointer hover:text-slate-100">
              <IoRemoveOutline className="w-6 " />
              Canada Jobs
            </li>
            <li className="flex items-center cursor-pointer hover:text-slate-100">
              <IoRemoveOutline className="w-6 " />
              China Jobs
            </li>
          </ul>
        </div>
        <div className="pr-16 pt-4">
          <img
            src="https://www.shutterstock.com/image-photo/kiev-ukraine-october-20-2020-600nw-1838003368.jpg"
            alt="playstore image"
          />
        </div>
      </div>
      <div className="lower-footer h-[90px] lg:h-[50px] bg-gray-800 text-white pt-3 flex text-center justify-between">
        <p className="mx-auto cursor-pointer">
          ©️ 2024 Job Uplift. All right reserved. Design by Rahul Singh Takuli
        </p>
      </div>
    </div>
  );
};

export default Footer;
