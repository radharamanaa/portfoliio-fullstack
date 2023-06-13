import React from "react";
import { motion } from "framer-motion";
import svgImage from "../assets/undraw_developer_activity_re_39tg (1).svg";

const About: React.FC = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto bg-slate-800/50 p-4"
      initial={{ y: "-200vw" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 1.5, type: "spring", stiffness: 50 }}
    >
      <motion.div className="grid grid-cols-12 intro mx-auto text-white mt-8 pb-16">
        <div className="col-span-12 md:col-span-8  w-full mx-auto">
          <motion.div
            className="flex flex-col p-4 gap-4"
            initial={{ y: "-100vw" }}
            animate={{ y: 0 }}
            transition={{
              delay: 2,
              duration: 2,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div
              className="align-middle flex justify-center md:justify-start text-2xl md:text-6xl font-playfair 
                   mt-4 md:mt-16 first-letter:text-lime-400"
            >
              <span className="text-lime-400">F</span>ull{" "}
              <span className="text-lime-400">&nbsp;S</span>tack Developer
            </div>
            <motion.div
              className="text-sm mt-4 tracking-widest font-thin max-w-lg"
              initial={{ y: "-200vw" }}
              animate={{ y: 0 }}
              transition={{
                delay: 4,
                duration: 2,
                type: "spring",
                stiffness: 100,
              }}
            >
              I am a highly skilled and motivated Full-Stack Developer with
              expertise in Java, ReactJS, SQL & JavaScript.
              <br />
              <br />
              With 6 years of experience in the industry, I have successfully
              delivered robust and scalable web applications., passionate about
              crafting elegant solutions to complex problems and thrive in
              collaborative environments.
              <br />
            </motion.div>
          </motion.div>
        </div>
        <div className="hidden col-auto md:col-span-4 bg-transparent p-2 md:flex items-center">
          <img src={svgImage} alt="" className="w-9/12" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
