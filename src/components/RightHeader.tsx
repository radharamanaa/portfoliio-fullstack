import React from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import baseUrl from "../baseUrl";

const RightHeader: React.FC = () => {
  return (
    <div className="flex justify-around items-center gap-4 flex-wrap mt-8 md:mt-0">
      <div className="cursor-pointer text-slate-900 font-raleway tracking-wider">
        <NavLink to={`${baseUrl}/experience`}>Experience</NavLink>
      </div>
      <div className="cursor-pointer text-slate-900 font-raleway tracking-wider">
        <NavLink to={`${baseUrl}/skills`}>Skills</NavLink>
      </div>
      <div className="cursor-pointer text-slate-900 font-raleway tracking-wider">
        <NavLink to={`${baseUrl}/aboutme`}>About Me</NavLink>
      </div>
      <div className="cursor-pointer text-slate-900 font-raleway tracking-wider">
        <NavLink to={`${baseUrl}/contactme`}>Contact Me</NavLink>
      </div>
      <div className="cursor-pointer text-slate-900 font-raleway tracking-wider">
        <NavLink to={`${baseUrl}/myprojects`}>My Projects</NavLink>
      </div>
      <div className="cursor-pointer text-slate-900 font-raleway tracking-wider">
        <a href="https://github.com/radharamanaa" target="_blank">
          GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default RightHeader;
