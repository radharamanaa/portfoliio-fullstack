import React from "react";
import experiences from "../data/experiences.json";
import SingleExperience from "./SingleExperience";

const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-slate-700/50 flex gap-4 flex-wrap basis-12 justify-center">
      {experiences.map((exp) => {
        return <SingleExperience key={exp.company} exp={exp} />;
      })}
    </div>
  );
};

export default Experience;
