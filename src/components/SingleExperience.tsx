import React from "react";
interface Company {
  name: string;
  duration: string;
  role: string;
  achievements: string;
}

const SingleExperience: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="company-name text-2xl text-slate-100 bg-indigo-950"></div>
      <div className="duration text-2xl text-slate-100 bg-indigo-950"></div>
      <div className="role text-sm text-slate-100 bg-indigo-950"></div>
      <div className="achievements text-2xl text-slate-100 bg-indigo-950"></div>
    </div>
  );
};

export default SingleExperience;
