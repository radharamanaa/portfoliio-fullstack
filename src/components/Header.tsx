import React from "react";
import { motion } from "framer-motion";
import RightHeader from "./RightHeader";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import baseUrl from "../baseUrl";

const Header: React.FC = () => {
  const variants = {
    initial: {
      y: -100,
    },
    animate: {
      y: 0,
    },
    transition: {
      duration: 2,
      type: "spring",
      stiffness: 100,
    },
  };
  return (
    <motion.header
      className="max-w-6xl flex flex-wrap justify-center md:justify-between items-center mx-auto border-b-2 p-2 "
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 2, type: "spring", stiffness: 100 }}
    >
      <motion.h2
        className="ml-4 text-3xl text-slate-900 cursor-pointer font-playfair font-semibold tracking-wider 
          first-letter:font-semibold first-letter:text-4xl flex justify-center md:justify-start"
      >
        <Link to={baseUrl + "/about"}> Abhijeet Mishra</Link>
      </motion.h2>
      <RightHeader />
    </motion.header>
  );
};

export default Header;
