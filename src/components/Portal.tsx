import React from "react";
import { ExperienceData } from "../types/types";
import { motion } from "framer-motion";
interface PortalProps {
  exp: ExperienceData;
  closeModal: () => void;
}

const Portal: React.FC<PortalProps> = ({ exp, closeModal }) => {
  return (
    <div
      className="absolute bg-slate-700/50 flex 
    justify-center items-center z-10 h-screen w-full inset-0"
    >
      <motion.div
        className="max-w-2xl relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
      >
        <div
          className="absolute top-10 right-8 text-black text-2xl rounded-full bg-slate-600/25 cursor-pointer"
          onClick={() => closeModal()}
        >
          &times;
        </div>
        <div
          className="flex flex-col mt-8 
                    bg-gradient-to-r from-sky-800 to-cyan-800 
                    max-w-4xl p-4 cursor-text"
        >
          <div className="company-name  text-slate-100 self-center text-4xl font-playfair first-letter:text-lime-400">
            {exp.company}
          </div>
          <div className="duration text-xs text-slate-100 self-center max-w-prose text-justify">
            {exp.aboutCompany}
          </div>
          <div className="role mt-8 text-sm text-slate-100 pb-1 underline decoration-dashed decoration-1 underline-offset-2 ">
            {exp.role} - {exp.duration}
          </div>
          <div className="mt-4 achievements text-sm text-slate-100 mb-4 font-raleway tracking-wider indent-8">
            {exp.projects}
          </div>
          <div className="mt-4 achievements text-sm text-slate-100 mb-4 font-raleway tracking-wider indent-8">
            {exp.techUsed}
          </div>
          <div className="mt-4 achievements text-sm text-slate-100 mb-4 font-raleway tracking-wider indent-8">
            {exp.achievements}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portal;
