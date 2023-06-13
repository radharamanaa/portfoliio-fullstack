import React, { useState } from "react";
import skills from "../data/skills.json";
import SingleSkillAndRating from "./SingleSkillAndRating";
interface skill {
  skill: string;
  rating: number;
  info: string;
}
let skillss = skills;
const Skills: React.FC = () => {
  const [expanded, setExpanded] = useState<false | number>(0);
  return (
    <div
      className="max-w-4xl mx-auto bg-slate-700/50 flex  gap-4 flex-wrap 
    justify-center mb-8 mt-8 h-screen p-8"
    >
      {skillss.map((skill, i) => (
        <SingleSkillAndRating
          skillrating={skill}
          i={i}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </div>
  );
};

export default Skills;
