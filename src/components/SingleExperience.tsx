import React from "react";
import { ExperienceData } from "../types/types";
import { motion } from "framer-motion";
interface SingleExperienceProps {
  exp: ExperienceData;
  openPortal: (id: number) => void;
  index: number;
}
const SingleExperience: React.FC<SingleExperienceProps> = ({
  exp,
  openPortal,
  index,
}) => {
  return (
    <motion.div
      className="flex flex-col mt-8 bg-gradient-to-r from-slate-200 to-cyan-200 
      max-w-sm p-4 cursor-pointer shadow-md shadow-lime-200"
      onClick={() => openPortal(exp.id)}
      initial={{ x: "-150vw" }}
      animate={{ x: 0 }}
      transition={{ delay: index }}
      whileHover={{
        scale: 1.05,
        transition: { type: "tween" },
      }}
    >
      <div className="company-name  text-slate-800 self-center text-xl font-playfair first-letter:text-lime-600">
        {exp.company}
      </div>
      <div className="duration text-xs text-slate-800 self-center mb-4">
        {exp.duration}
      </div>
      <div className="role text-sm text-slate-800 pb-1 underline decoration-dashed decoration-1 underline-offset-2 ">
        {exp.role}
      </div>
      <div className="mt-4 achievements text-sm text-slate-800 mb-4 font-raleway tracking-wider indent-8">
        {exp.achievements || exp.projects}
      </div>
    </motion.div>
  );
};

export default SingleExperience;
