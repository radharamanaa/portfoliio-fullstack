import React from "react";
import { ExperienceData } from "../types/types";
interface SingleExperienceProps {
  exp: ExperienceData;
}
const SingleExperience: React.FC<SingleExperienceProps> = ({ exp }) => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-sky-800 to-cyan-800 max-w-sm p-4 cursor-pointer">
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
        {exp.projects}
      </div>
    </div>
  );
};

export default SingleExperience;
