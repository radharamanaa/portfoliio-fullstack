import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="h-screen">
        <div className="h-screen bg-gradient">
          <motion.header
            className="max-w-6xl flex justify-between items-center mx-auto border-b-2 p-2"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
          >
            <motion.h2
              className="text-3xl text-slate-100 cursor-pointer font-playfair font-semibold tracking-wider 
          first-letter:font-semibold first-letter:text-4xl underline underline-offset-2"
            >
              Abhijeet Mishra
            </motion.h2>
            <motion.div className="flex justify-around items-center gap-4">
              <motion.div className="cursor-pointer text-white">
                Experience
              </motion.div>
              <motion.div className="cursor-pointer text-white">
                Skills
              </motion.div>
              <motion.div className="cursor-pointer text-white">
                Projects
              </motion.div>
              <motion.div className="cursor-pointer text-white">
                Education
              </motion.div>
              <motion.div className="cursor-pointer text-white">
                Contact Me
              </motion.div>
            </motion.div>
          </motion.header>
        </div>
      </div>
    </>
  );
}

export default App;
