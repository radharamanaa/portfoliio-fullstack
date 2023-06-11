import React from "react";
import { motion } from "framer-motion";
import RightHeader from "./RightHeader";
import { Outlet } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <motion.header
      className="max-w-6xl flex flex-wrap justify-center md:justify-between items-center mx-auto border-b-2 p-2 bg-slate-800/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <motion.h2
        className="text-3xl text-slate-100 cursor-pointer font-playfair font-semibold tracking-wider 
          first-letter:font-semibold first-letter:text-4xl flex justify-center md:justify-start"
      >
        Abhijeet Mishra
      </motion.h2>
      <RightHeader />
    </motion.header>
  );
};

export default Header;
