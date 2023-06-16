import React from "react";
import { motion } from "framer-motion";
import svgImage from "../assets/undraw_developer_activity_re_39tg (1).svg";
import developerSVG from "../assets/undraw_programming_re_kg9v.svg";
import Summary from "./Summary";

const About: React.FC = () => {
  return (
    <>
      <motion.div
        className="max-w-6xl mx-auto bg-red-800 rounded-2xl p-4 shadow-md shadow-slate-400 relative"
        initial={{ x: "200vh" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, duration: 1.5, type: "tween" }}
      >
        <motion.div className="grid grid-cols-12 pt-12 intro mx-auto text-white mt-8 pb-16 ">
          <div className="col-span-12 md:col-span-8  w-full mx-auto">
            <div
              className="flex flex-col p-4 gap-4 bg-slate-100 shadow-md shadow-slate-100  ml-8 w-10/12 rounded-2xl
            border-dashed border-slate-600 border"
            >
              <div className="flex md:hidden w-40 justify-center mx-auto">
                <div className="dev flex justify-center self-center text-center mx-auto">
                  <img src={developerSVG} alt="" className="self-center" />
                </div>
              </div>
              <div
                className="align-middle flex justify-center md:justify-start text-2xl md:text-6xl font-playfair 
                   mt-4 md:mt-8 first-letter:text-lime-400 relative "
              >
                <span className="bg-gradient-to-r from-orange-500  to-orange-800 bg-clip-text text-transparent ">
                  Full Stack Developer
                </span>
              </div>
              <div className="text-sm mt-4 mb-4 tracking-widest  max-w-lg text-slate-700">
                I am a highly skilled and motivated Full-Stack Developer with
                expertise in Java, ReactJS, SQL & JavaScript.
                <br />
                <br />
                With <span className="text-red-600">
                  6 years of experience
                </span>{" "}
                in the industry, I have successfully delivered robust and
                scalable web applications., passionate about crafting elegant
                solutions to complex problems and thrive in collaborative
                environments.
                <br />
              </div>
            </div>
          </div>
          <div className="hidden col-auto md:col-span-4 bg-transparent p-2 md:flex items-center relative ">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-lime-700 via-green-600 to-emerald-700 
          -rotate-6   w-80 rounded-lg shadow-lg shadow-lime-300 -translate-x-6"
            ></div>
            <div className="z-20">
              <img src={svgImage} alt="" className="w-9/12" />
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="fixed bottom-0 h-16 bg-slate-800 w-full text-slate-100 flex justify-center items-center text-lg">
        <div className="mx-auto w-8/12 text-center font-thin tracking-wide">
          Welcome to my portfolio website. Please find all the required
          information about me here!
        </div>
      </div>
    </>
  );
};

export default About;
