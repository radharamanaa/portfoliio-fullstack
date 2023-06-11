import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const RightHeader: React.FC = () => {
  return (
    <motion.div className="flex justify-around items-center gap-4 flex-wrap mt-8 md:mt-0">
      <motion.div className="cursor-pointer text-white font-raleway tracking-wider">
        <NavLink to="portfoliio-fullstack/experience">Experience</NavLink>
      </motion.div>
      <motion.div className="cursor-pointer text-white font-raleway tracking-wider">
        <NavLink to="portfoliio-fullstack/skills">Skills</NavLink>
      </motion.div>
      <motion.div className="cursor-pointer text-white font-raleway tracking-wider">
        <NavLink to="portfoliio-fullstack/github">GitHub Profile</NavLink>
      </motion.div>
      <motion.div className="cursor-pointer text-white font-raleway tracking-wider">
        <NavLink to="portfoliio-fullstack/education">Education</NavLink>
      </motion.div>
      <motion.div className="cursor-pointer text-white font-raleway tracking-wider">
        <NavLink to="portfoliio-fullstack/contactme">Contact Me</NavLink>
      </motion.div>
    </motion.div>
  );
};

export default RightHeader;
