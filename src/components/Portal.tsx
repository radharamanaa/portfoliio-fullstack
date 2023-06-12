import React from "react";
import { ExperienceData } from "../types/types";
import { motion } from "framer-motion";
import tech from "../images/isometric-blockchain-technology-for-cryptocurrencies.png";
import role from "../images/simplistic-cup-winner.png";
interface PortalProps {
  exp: ExperienceData;
  closeModal: () => void;
}

const Portal: React.FC<PortalProps> = ({ exp, closeModal }) => {
  return (
    <div
      className="absolute bg-slate-900/90 flex 
    justify-center items-center z-10 w-full inset-0 bottom-0"
    >
      <motion.div
        className="max-w-xl relative mt-16 bg-slate-900/80 mb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 80 }}
      >
        <div
          className="flex items-center absolute top-10 right-4 text-white text-xl rounded-full px-2 bg-slate-900/60 cursor-pointer"
          onClick={() => closeModal()}
        >
          &times;
        </div>
        <div
          className="flex flex-col mt-8 
                    bg-gradient-to-r from-sky-800 to-cyan-800 
                    max-w-4xl p-4 cursor-text"
        >
          <div className="company-name text-slate-100 self-center text-4xl font-playfair first-letter:text-lime-400">
            {exp.company}
          </div>
          <div className="duration text-xs text-slate-100 self-center max-w-prose text-center">
            {exp.aboutCompany}
          </div>
          <div className="role mt-8 text-sm text-slate-100 pb-1  ">
            <span className="underline decoration-dashed decoration-1 underline-offset-2">
              {exp.role}
            </span>
            <span className="text-slate-300">:&nbsp;{exp.duration} </span>
          </div>

          <div className="mt-4 achievements text-sm text-slate-100 mb-4  tracking-wider ">
            {exp.projects}
          </div>
          {exp.achievements && (
            <div className="grid grid-cols-12 items-center  p-4">
              <div className="col-span-8 mt-4 achievements text-sm max-w-prose text-slate-100 mb-4  tracking-wider ">
                {exp.achievements}
              </div>
              <div className="col-span-4 h-32 md:w-32 bg-slate-100 rounded-full flex items-center justify-center rotate">
                <img src={role} className="h-24" />
              </div>
            </div>
          )}
          <div className="grid grid-cols-12 items-center  p-4 ">
            <div className="col-span-4 w-16 md:w-32 bg-slate-100">
              <img src={tech} />
            </div>
            <div className="col-span-8 mt-4 achievements text-sm max-w-prose text-slate-100 mb-4  tracking-wider ">
              {exp.techUsed}
            </div>
          </div>

          {/* <div className="mt-4 achievements text-sm text-slate-100 mb-4 tracking-wider ">
            {exp.achievements}
          </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Portal;
