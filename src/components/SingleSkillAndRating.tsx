import React from "react";
import { SkillRating } from "../types/types";
import { AnimatePresence, motion } from "framer-motion";

interface SkillAndRatingProps {
  skillrating: SkillRating;
  i: number;
  expanded: false | number;
  setExpanded: (a: false | number) => void;
}
const style = {
  background: "#0055ff",
  borderRadius: "10px",
  color: "white",
  cursor: "pointer",
  height: "40px",
};
const SingleSkillAndRating: React.FC<SkillAndRatingProps> = ({
  skillrating,
  i,
  expanded,
  setExpanded,
}) => {
  const isOpen = i === expanded;
  return (
    <div className="flex flex-col w-64">
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="w-64 p-2"
        style={style}
      >
        {skillrating.skill}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="bg-slate-200 p-8 rounded-lg mt-4"
          >
            <ContentPlaceholder para={skillrating.info} />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};
const ContentPlaceholder: React.FC<{ para: string }> = ({ para }) => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className="max-w-sm text-slate-900 justify-center font-raleway"
  >
    {para}
  </motion.div>
);
export default SingleSkillAndRating;
