import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const RightHeader: React.FC = () => {
  return (
    <motion.div className="flex justify-around items-center gap-4 flex-wrap mt-8 md:mt-0">
      <motion.div className="cursor-pointer text-white font-raleway tracking-wider">
        <NavLink to="experience">Experience</NavLink>
      </motion.div>
      <motion.div className="cursor-pointer text-white font-raleway tracking-wider">
        <NavLink to="skills">Skills</NavLink>
      </motion.div>
      <motion.div className="cursor-pointer text-white font-raleway tracking-wider">
        <NavLink to="github">GitHub Profile</NavLink>
      </motion.div>
      <motion.div className="cursor-pointer text-white font-raleway tracking-wider">
        <NavLink to="education">Education</NavLink>
      </motion.div>
      <motion.div className="cursor-pointer text-white font-raleway tracking-wider">
        <NavLink to="contactme">Contact Me</NavLink>
      </motion.div>
    </motion.div>
  );
};

export default RightHeader;
