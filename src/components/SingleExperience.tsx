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
      className="flex flex-col mt-8 bg-gradient-to-r from-sky-800 to-cyan-800 max-w-sm p-4 cursor-pointer"
      onClick={() => openPortal(exp.id)}
      initial={{ x: "-150vw" }}
      animate={{ x: 0 }}
      transition={{ delay: index }}
    >
      <div className="company-name  text-slate-100 self-center text-xl font-playfair first-letter:text-lime-400">
        {exp.company}
      </div>
      <div className="duration text-xs text-slate-100 self-center mb-4">
        {exp.duration}
      </div>
      <div className="role text-sm text-slate-100 pb-1 underline decoration-dashed decoration-1 underline-offset-2 ">
        {exp.role}
      </div>
      <div className="mt-4 achievements text-sm text-slate-100 mb-4 font-raleway tracking-wider indent-8">
        {exp.achievements || exp.projects}
      </div>
    </motion.div>
  );
};

export default SingleExperience;
