import React, { useState } from "react";
import experiences from "../data/experiences.json";
import SingleExperience from "./SingleExperience";
import { createPortal } from "react-dom";
import Portal from "./Portal";
import { ExperienceData } from "../types/types";

const Experience: React.FC = () => {
  const [expObj, setExpObj] = useState<ExperienceData | null>(null);
  function openPortal(id: number) {
    let obj = experiences.find((item) => item.id === id)!;
    setExpObj(obj);
  }
  function closeModal() {
    setExpObj(null);
  }
  return (
    <div
      className="max-w-4xl mx-auto bg-slate-700/50 flex gap-4 flex-wrap 
    justify-center mb-8 mt-8 bg-gradient-to-tr from-indigo-900 to-sky-900 pb-16 shadow-md shadow-purple-600"
    >
      {experiences.map((exp, index) => {
        return (
          <SingleExperience
            key={exp.company}
            exp={exp}
            openPortal={openPortal}
            index={index * 0.2}
          />
        );
      })}
      {expObj &&
        createPortal(
          <Portal closeModal={closeModal} exp={expObj} key={expObj.company} />,
          document.getElementById("portal")!
        )}
    </div>
  );
};

export default Experience;
