import React from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import baseUrl from "../baseUrl";

const RightHeader: React.FC = () => {
  const location = useLocation();
  return (
    <motion.div className="flex justify-around items-center gap-4 flex-wrap mt-8 md:mt-0">
      <motion.div className="cursor-pointer text-white font-raleway tracking-wider">
        <NavLink to={`${baseUrl}/experience`}>Experience</NavLink>
      </motion.div>
      <motion.div className="cursor-pointer text-white font-raleway tracking-wider">
        <NavLink to={`${baseUrl}/skills`}>Skills</NavLink>
      </motion.div>
      <motion.div className="cursor-pointer text-white font-raleway tracking-wider">
        <a href="https://github.com/radharamanaa" target="_blank">
          GitHub Profile
        </a>
      </motion.div>
      <motion.div className="cursor-pointer text-white font-raleway tracking-wider">
        <NavLink to={`${baseUrl}/education`}>Education</NavLink>
      </motion.div>
      <motion.div className="cursor-pointer text-white font-raleway tracking-wider">
        <NavLink to={`${baseUrl}/contactme`}>Contact Me</NavLink>
      </motion.div>
    </motion.div>
  );
};

export default RightHeader;
